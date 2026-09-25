var el = document.getElementById('discourse-comments');
if (el) {
  DiscourseEmbed = {
    discourseUrl: el.dataset.discourseUrl,
    discourseEmbedUrl: el.dataset.embedUrl,
  };
  (function () {
    var d = document.createElement('script');
    d.type = 'text/javascript';
    d.async = true;
    d.src = DiscourseEmbed.discourseUrl + 'javascripts/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);
  })();
}
