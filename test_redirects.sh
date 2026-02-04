#!/bin/bash

# QField.org Redirect Testing Script
# Tests all redirects before migration
# Usage: ./test_redirects.sh [--verbose] [--timeout <seconds>]

set -o pipefail

VERBOSE=0
TIMEOUT=10
BASE_URL="${BASE_URL:-https://qfield.org}"
FAILED_REDIRECTS=()
SUCCESSFUL_REDIRECTS=()
SKIPPED_REDIRECTS=()

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --verbose)
            VERBOSE=1
            shift
            ;;
        --timeout)
            TIMEOUT="$2"
            shift 2
            ;;
        --base-url)
            BASE_URL="$2"
            shift 2
            ;;
        *)
            shift
            ;;
    esac
done

# Function to extract redirect target from HTML file
extract_redirect_target() {
    local file="$1"
    grep -oP "URL='?\K[^'\"]*" "$file" | head -1
}

# Function to check if a URL is accessible
check_url() {
    local url="$1"
    local timeout="$2"
    
    if [ "$VERBOSE" -eq 1 ]; then
        echo -e "${BLUE}→ Checking: $url${NC}"
    fi
    
    # Use curl to follow redirects and check final status
    local http_code=$(curl -s -L -w "%{http_code}" -o /dev/null --max-time "$timeout" --connect-timeout 5 "$url" 2>/dev/null)
    
    # Check if successful (2xx or 3xx)
    if [[ $http_code =~ ^[23][0-9]{2}$ ]]; then
        return 0
    else
        if [ "$VERBOSE" -eq 1 ]; then
            echo -e "${RED}  HTTP Status: $http_code${NC}"
        fi
        return 1
    fi
}

# Function to test a single redirect
test_redirect() {
    local source_path="$1"
    local target_url="$2"
    local description="$3"
    
    local source_url="${BASE_URL}${source_path}"
    
    if [ "$VERBOSE" -eq 1 ]; then
        echo ""
        echo -e "${BLUE}Testing:${NC} $description"
        echo -e "${BLUE}Source:${NC} $source_url"
        echo -e "${BLUE}Target:${NC} $target_url"
    fi
    
    # Skip if target is empty
    if [ -z "$target_url" ]; then
        if [ "$VERBOSE" -eq 1 ]; then
            echo -e "${YELLOW}⊘ SKIPPED${NC} (no target URL found)"
        fi
        SKIPPED_REDIRECTS+=("$source_path -> (no target)")
        return 2
    fi
    
    if check_url "$target_url" "$TIMEOUT"; then
        if [ "$VERBOSE" -eq 1 ]; then
            echo -e "${GREEN}✓ SUCCESS${NC}"
        fi
        SUCCESSFUL_REDIRECTS+=("$source_path -> $target_url")
        return 0
    else
        if [ "$VERBOSE" -eq 1 ]; then
            echo -e "${RED}✗ FAILED${NC}"
        fi
        FAILED_REDIRECTS+=("$source_path -> $target_url")
        return 1
    fi
}

# Function to test if a page exists
test_page() {
    local page_path="$1"
    local description="${2:-$page_path}"
    
    local page_url="${BASE_URL}${page_path}"
    
    if [ "$VERBOSE" -eq 1 ]; then
        echo -e "${BLUE}→ Checking: $page_url${NC}"
    fi
    
    # Use curl to check page status
    local http_code=$(curl -s -w "%{http_code}" -o /dev/null --max-time "$TIMEOUT" --connect-timeout 5 "$page_url" 2>/dev/null)
    
    # Check if page exists (2xx status)
    if [[ $http_code =~ ^2[0-9]{2}$ ]]; then
        if [ "$VERBOSE" -eq 1 ]; then
            echo -e "${GREEN}✓ OK (HTTP $http_code)${NC}"
        fi
        SUCCESSFUL_REDIRECTS+=("$page_path")
        return 0
    else
        if [ "$VERBOSE" -eq 1 ]; then
            echo -e "${RED}✗ FAILED (HTTP $http_code)${NC}"
        fi
        FAILED_REDIRECTS+=("$page_path")
        return 1
    fi
}

# Main testing section
echo -e "${BLUE}═══════════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}QField.org Redirect & Page Testing${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════════════${NC}"
echo "Base URL: $BASE_URL"
echo "Timeout: ${TIMEOUT}s"
echo ""

# Change to website directory if needed
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# HTML Meta Refresh Redirects
echo -e "${BLUE}Testing HTML Meta Refresh Redirects...${NC}"
echo ""

test_redirect "/releases/" "https://github.com/opengisch/QField/releases" "releases/"
test_redirect "/get/" "https://onelink.to/qfield" "get/"
test_redirect "/sync/" "https://github.com/opengisch/QFieldSync" "sync/"
test_redirect "/issues/" "https://github.com/opengisch/QField/issues" "issues/"
test_redirect "/master/" "https://github.com/opengisch/QField/commit/master#comments" "master/"
test_redirect "/works-with-hardware.html" "https://qfield.org/hardware" "works-with-hardware.html"
test_redirect "/status/" "https://status.qfield.org" "status/"
test_redirect "/contribute/" "https://docs.qfield.org/get-started/contribute/" "contribute/"
test_redirect "/nightly/" "https://play.google.com/store/apps/details?id=ch.opengis.qfield_dev" "nightly/"

# Extract and test /get_latest/ redirect (it's JavaScript-based)
if [ -f "get_latest/index.html" ]; then
    test_redirect "/get_latest/" "https://github.com/opengisch/QField/releases/latest" "get_latest/ (fallback)"
fi

# Page Existence Tests
echo ""
echo -e "${BLUE}Testing Page Existence in Next Version...${NC}"
echo ""

# Root and main pages
test_page "/" "homepage"
test_page "/index.html" "index.html"
test_page "/404.html" "404.html"
test_page "/ambassadors.html" "ambassadors.html"
test_page "/assistance.html" "assistance.html"
test_page "/certified-hardware.html" "certified-hardware.html"
test_page "/donate.html" "donate.html"
test_page "/donation.html" "donation.html"
test_page "/hardware.html" "hardware.html"
test_page "/partner.html" "partner.html"
test_page "/partners.html" "partners.html"
test_page "/privacy_policy.html" "privacy_policy.html"
test_page "/sdgs.html" "sdgs.html"
test_page "/success-stories.html" "success-stories.html"
test_page "/support-us.html" "support-us.html"
test_page "/thankyou.html" "thankyou.html"
test_page "/works-with-hardware.html" "works-with-hardware.html"

# Directory pages
test_page "/get/" "get/"
test_page "/get_latest/" "get_latest/"
test_page "/repo/" "repo/"
test_page "/support/" "support/"

# Success stories pages
test_page "/success-stories/building-on-top.html" "success-stories/building-on-top"
test_page "/success-stories/dai.html" "success-stories/dai"
test_page "/success-stories/ecological-surveying.html" "success-stories/ecological-surveying"
test_page "/success-stories/fire-salamanders.html" "success-stories/fire-salamanders"
test_page "/success-stories/freelance-success.html" "success-stories/freelance-success"
test_page "/success-stories/geological-mapping.html" "success-stories/geological-mapping"
test_page "/success-stories/ghana-deforestation.html" "success-stories/ghana-deforestation"
test_page "/success-stories/ground-truth-fiji.html" "success-stories/ground-truth-fiji"
test_page "/success-stories/heritage-impact-assessment.html" "success-stories/heritage-impact-assessment"
test_page "/success-stories/malaria-data-collection.html" "success-stories/malaria-data-collection"
test_page "/success-stories/mapping-breeding-birds.html" "success-stories/mapping-breeding-birds"
test_page "/success-stories/nls.html" "success-stories/nls"
test_page "/success-stories/radiation-detection.html" "success-stories/radiation-detection"
test_page "/success-stories/river-state-survey.html" "success-stories/river-state-survey"
test_page "/success-stories/tonga.html" "success-stories/tonga"
test_page "/success-stories/un.html" "success-stories/un"
test_page "/success-stories/vanilla-surveys.html" "success-stories/vanilla-surveys"
test_page "/success-stories/water-supply-rwanda.html" "success-stories/water-supply-rwanda"
test_page "/success-stories/zero-invasive-predators.html" "success-stories/zero-invasive-predators"

# Summary
echo ""
echo -e "${BLUE}═══════════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}Test Summary${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════════════${NC}"

echo ""
echo -e "${GREEN}Successful: ${#SUCCESSFUL_REDIRECTS[@]}${NC}"
if [ ${#SUCCESSFUL_REDIRECTS[@]} -gt 0 ]; then
    for redirect in "${SUCCESSFUL_REDIRECTS[@]}"; do
        echo -e "${GREEN}  ✓${NC} $redirect"
    done
fi

echo ""
echo -e "${RED}Failed: ${#FAILED_REDIRECTS[@]}${NC}"
if [ ${#FAILED_REDIRECTS[@]} -gt 0 ]; then
    for redirect in "${FAILED_REDIRECTS[@]}"; do
        echo -e "${RED}  ✗${NC} $redirect"
    done
fi

echo ""
echo -e "${YELLOW}Skipped: ${#SKIPPED_REDIRECTS[@]}${NC}"
if [ ${#SKIPPED_REDIRECTS[@]} -gt 0 ]; then
    for redirect in "${SKIPPED_REDIRECTS[@]}"; do
        echo -e "${YELLOW}  ⊘${NC} $redirect"
    done
fi

echo ""
echo -e "${BLUE}═══════════════════════════════════════════════════════════════${NC}"

# Exit with appropriate code
if [ ${#FAILED_REDIRECTS[@]} -gt 0 ]; then
    echo -e "${RED}⚠ Some redirects failed${NC}"
    exit 1
else
    echo -e "${GREEN}✓ All redirects passed${NC}"
    exit 0
fi
