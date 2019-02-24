(function () {

  document.addEventListener('DOMContentLoaded', function () {


    $('#layout').fullpage({
      menu: '.navigation_main',
      autoScrolling: false,
      animateAnchor: false,
      afterLoad: function(anchorLink, index) {

        console.log(anchorLink);

      },
      onLeave: function (anchorLink, index, nextIndex) {

      }
    });

  });

}());