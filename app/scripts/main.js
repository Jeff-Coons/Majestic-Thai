// =================== Requirements =================== //

/* ======================================================

  {}  There should be a opening page that has a description
      of the resturaunt and a button to start your order.

  {}  All food items should be on one page with prices and
      description.

  {}  The customer should be able to select a food item and
      proceed to build an order.

  {}  Once the customer places the order, it should be saved
      to the server for access.

====================================================== */


(function () {
  'use strict';


// =================== Models =================== //


  var MenuItemsModel = Backbone.Model.extend({

    defaults: {
      title: "",
      description: "",
      price: "&#36;0.00"
      
    }
  });

  // var basil = new MenuItemsModel ({
  //   title: "BASIL",
  //   description: "Basil, bell peppers, onions, and garlic, Thai chili sauce.",
  //   price: "&#36;15.95"
  // });
  //
  // var padPrik = new MenuItemsModel ({
  //   title: "PAD PRIK",
  //   description: "Basil, bell peppers and onions, Prik King curry sauce.",
  //   price: "&#36;15.95"
  // });
  //
  // var ginger = new MenuItemsModel ({
  //   title: "GINGER",
  //   description: "Juliennes of ginger, mushrooms, onions, carrots, and scallions.",
  //   price: "&#36;15.95"
  // });
  //
  // var garlic = new MenuItemsModel ({
  //   title: "GARLIC",
  //   description: "Black pepper garlic sauce. Served on a bed of Romaine lettuce.",
  //   price: "&#36;16.95"
  // });
  //
  // var prikKing = new MenuItemsModel ({
  //   title: "PRIK KING",
  //   description: "String beans, Prik King curry sauce.",
  //   price: "&#36;15.95"
  // });
  //
  // var sweetandSour = new MenuItemsModel ({
  //   title: "SWEET AND SOUR",
  //   description: "Onions, bell peppers, cucumbers, tomatoes, pineapples and scallions.",
  //   price: "&#36;15.95"
  // });
  //
  // var cashewNuts = new MenuItemsModel ({
  //   title: "CASHEW NUTS",
  //   description: "Cashew nuts, bell peppers, onions and scallions. ",
  //   price: "&#36;16.95"
  // });
  //
  // var vegetablesDelight = new MenuItemsModel ({
  //   title: "VEGETABLES DELIGHT",
  //   description: "Medley of fresh vegetables stir-fried in a soy-based sauce. ",
  //   price: "&#36;15.95"
  // });
  //
  // var veggisOnly = new MenuItemsModel ({
  //   title: "VEGETABLES DELIGHT (VEGGIES ONLY) ",
  //   description: "Medley of fresh vegetables stir-fried in a soy-based sauce. ",
  //   price: "&#36;14.00"
  // });

var food = [
    {
      title: "BASIL",
      description: "Basil, bell peppers, onions, and garlic, Thai chili sauce.",
      price: "&#36;15.95"
    },

    {
      title: "PAD PRIK",
      description: "Basil, bell peppers and onions, Prik King curry sauce.",
      price: "&#36;15.95"
    },

    {
      title: "GINGER",
      description: "Juliennes of ginger, mushrooms, onions, carrots, and scallions.",
      price: "&#36;15.95"
    },

    {
      title: "GARLIC",
      description: "Black pepper garlic sauce. Served on a bed of Romaine lettuce.",
      price: "&#36;16.95"
    },

    {
      title: "PRIK KING",
      description: "String beans, Prik King curry sauce.",
      price: "&#36;15.95"
    },

    {
      title: "SWEET AND SOUR",
      description: "Onions, bell peppers, cucumbers, tomatoes, pineapples and scallions.",
      price: "&#36;15.95"
    },

    {
      title: "CASHEW NUTS",
      description: "Cashew nuts, bell peppers, onions and scallions. ",
      price: "&#36;16.95"
    },

    {
      title: "VEGETABLES DELIGHT",
      description: "Medley of fresh vegetables stir-fried in a soy-based sauce. ",
      price: "&#36;15.95"
    },

    {
      title: "VEGETABLES DELIGHT (VEGGIES ONLY) ",
      description: "Medley of fresh vegetables stir-fried in a soy-based sauce. ",
      price: "&#36;14.00"
    }
  ];

// =================== Views =================== //


   var StartOrderView = Backbone.View.extend({

     className: 'start-order',

     events: {
       'click button': 'destroyView'
     },

     destroyView: function () {
       this.remove();
     },

     render: function () {
       $('.container').prepend(this.el);
       $(this.el).prepend('<h1> Majestic Thai</h1>' + '<button class="order-now"> Begin Your Order</button>');
     }

   });


   var MenuView = Backbone.View.extend({

     className: 'menu-container',

    //  initialize: function () {
    //    $('.order-now').on('click', function () {
    //      console.log("this is working!");
    //      StartOrderView.remove();
    //    });
    //  },

   });

   var MenuItemsView = Backbone.View.extend({

     className: 'menu-item'


   });


// =================== Glue =================== //


   $(document).ready(function () {

     var startOrderView = new StartOrderView();
     startOrderView.render();

     var menuItemsView = new MenuItemsView();

   });

})();
