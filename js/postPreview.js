function is_touch_device() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

if (!is_touch_device()) {
  var links = document.querySelectorAll('.post__content a');
  var previews = document.querySelectorAll('.post-preview');

  for (var i = links.length - 1; i >= 0; i--) {
    links[i].addEventListener('mousemove', function(e) {
      var linkId = this.href.split('/');
      linkId = linkId[linkId.length - 1].slice(0, -5);
      var activePreview;
      for (var j = 0; j < previews.length; j++) {
        if (previews[j].id === linkId) {
          activePreview = previews[j];
          break;
        }
      }
      if (activePreview) {
        var offset = 15;
        activePreview.style.display = 'block';

        var left =
          e.clientX + offset * 2 + activePreview.offsetWidth > window.innerWidth
            ? window.innerWidth - activePreview.offsetWidth - offset
            : e.clientX + offset;
        var top =
          e.clientY + offset * 2 + activePreview.offsetHeight >
          window.innerHeight
            ? e.clientY - activePreview.offsetHeight - offset
            : e.clientY + offset;

        activePreview.style.top = top + 'px';
        activePreview.style.left = left + 'px';
      }
    });
  }

  for (var i = links.length - 1; i >= 0; i--) {
    links[i].addEventListener('mouseout', function() {
      for (var j = 0; j < previews.length; j++) {
        previews[j].style.display = 'none';
      }
    });
  }
}
