(function($, window, document) {
  
  const initializeWebpage = () => {
    $('.amount-in-cart').slideUp(1);
    $('.items-in-cart').hide();
  }
  
  const displayTotalItemsInCart = () => {
    const $totalItemsInCart = $('.items-in-cart');
    if ($totalItemsInCart.html() === '0') {
      $totalItemsInCart.hide(500);
    } else {
      $totalItemsInCart.show(500);
    }
  }
  
  initializeWebpage();

  const updateTotalNumberInCart = (plusOrMinus = true) => {    
    const $allItemsInCart = $('.currently-in-cart');
    let sumAllItems = 0;
    $allItemsInCart.each( cart => {
      sumAllItems += +$($allItemsInCart[cart]).val();
    });
    $('.items-in-cart').html(sumAllItems);
    displayTotalItemsInCart();
  };

  const updateItemInCart = (inCart, plusOrMinus = true) => {
    const $itemsInCart = inCart.find('.currently-in-cart');
    let newItemsInCart = +$itemsInCart.val();
    if (plusOrMinus) {
      newItemsInCart++;
    } else {
      newItemsInCart > 0 ? newItemsInCart-- : newItemsInCart;
    }
    $itemsInCart.val(newItemsInCart);
  }

  const showAmountInCart = event => {
    const $amountInCart = $(event.currentTarget).next();
    $amountInCart.slideDown();
  }

  $('.increase-incart').on('click', event => {
    updateItemInCart($(event.currentTarget).closest('div'));
    updateTotalNumberInCart();
  });

  $('.decrease-incart').on('click', event => {
    updateItemInCart($(event.currentTarget).closest('div'), false);
    updateTotalNumberInCart(false);
  });

  $('.add-to-cart').on('click', event => {
    showAmountInCart(event);
    updateItemInCart($(event.currentTarget).next());
    updateTotalNumberInCart();
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
    autoPlay: 4000,
    imagesLoaded: true
  });

}(window.jQuery, window, document));