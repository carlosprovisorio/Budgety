
//BUDGET CONTROLLER

var budgetController = (function() {

})();



//======================
// UI CONTROLLER

var UIController = (function() {

  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  }

})();



//======================
// GLOBAL APP CONTROLLER

var controller = (function(budgetCtrl, UICtrl) {
  
  var setupEventListeners = function() {

    var DOM = UICtrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener('click', crtlAddItem);

    document.addEventListener('keypress', function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        crtlAddItem();
      }
    });
  }

  var crtlAddItem = function() {
    var input = UICtrl.getInput();
  };

  return {
    init: function()  {
      console.log("Application has started.");
      setupEventListeners();
    }
  };

})(budgetController, UIController);

controller.init();
