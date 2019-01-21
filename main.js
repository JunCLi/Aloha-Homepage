$('.amount-in-cart').slideUp(1);

(function($, window, document) {

  const updateTotalNumberInCart = () => {
    let $totalItemsInCart = $('.items-in-cart');
    let updateTotalNumber = parseInt($totalItemsInCart.html(), 10) + 1;
    $totalItemsInCart.html(updateTotalNumber);
  };

  const updateItemInCart = (event) => {
    let $ItemsInCart = $(event.currentTarget).next().find('.currently-in-cart');
    let updateItemsInCart = parseInt($ItemsInCart.val(), 10) + 1;
    $ItemsInCart.val(updateItemsInCart);
  }

  const showAmountInCart = event => {
    let $amountInCart = $(event.currentTarget).next();
    $amountInCart.slideDown();
  }

  $('.add-to-cart').on('click', event => {
    showAmountInCart(event);
    updateTotalNumberInCart();
    updateItemInCart(event);
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