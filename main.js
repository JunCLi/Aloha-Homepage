(function($, window, document) {

  $(window).scroll(() => {
    if ($(window).scrollTop() >= 200) {
      $('header').addClass('fixed-nav');
    } else {
      $('header').removeClass('fixed-nav');
    }
  });

  // let timeout = null;
  // $(window).scroll(() => {
  //   if (!timeout) {
  //     timeout = setTimeout(function () {
  //       console.log('scroll');            
  //       clearTimeout(timeout);
  //       timeout = null;
  //       if ($(window).scrollTop() >= 200) {
  //           console.log('done scrolling');
  //         }
  //       }, 250);
  //     }
  // });


  const validateEmail = (email) => {
    let $emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return $emailRegex.test(email);
  };


  $('#subscribe-email').on('click', event => {
    event.preventDefault();
    const $inputtedEmail = $(event.currentTarget).siblings().val();
    if (validateEmail($inputtedEmail)) {
      alert('Thanks for subscribing!');
    } else {
      alert('Please enter a valid email address');
    }
    
  });





  $('.favourite-products ul').flickity({
    wrapAround: true,
    autoPlay: 4000,
    imagesLoaded: true
  });

}(window.jQuery, window, document));