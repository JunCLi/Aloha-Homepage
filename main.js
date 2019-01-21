(function($, window, document) {

  const tractItemsInCart = () => {
    let $itemsInCart = $('.items-in-cart');
    updateNumberOfItems = parseInt($itemsInCart.html(), 10) + 1;
    $itemsInCart.html(updateNumberOfItems);
  };

  $('.add-to-cart').on('click', event => {
    tractItemsInCart();
  });


  const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
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
    // autoPlay: 4000,
    imagesLoaded: true
  });

}(window.jQuery, window, document));