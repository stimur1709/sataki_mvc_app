window.addEventListener('DOMContentLoaded', () => {
    'use strict'

  $('[data-scroll]').on("click", function (e) {
      e.preventDefault();

      let elementId = $(this).data('scroll');
      let elementOffset = $(elementId).offset().top;

      // console.log(elementOffset);

      $("html,body").animate({
        scrollTop: elementOffset - 20
      }, 1000);
  });

})

