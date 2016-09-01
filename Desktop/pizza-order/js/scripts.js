//Constructor for pizza object - may have too many properties
  function Pizza(sizeParameter){
    this.size = sizeParameter;
    this.toppings = [];
    this.price = 0;
  }

//Creates a method to calculate the price of sm, md, or lg pizza
    Pizza.prototype.findPrice = function(sizeResult){
      if(this.size==='small'){
        this.price += 9;
      }
      else if(this.size === 'medium'){
        this.price += 11;
      }
      else{
        this.price += 13;
      }
    }

  $(document).ready(function(){
  $("form#pizza-order").submit(function(event){
  event.preventDefault();

  var sizeSelection = $("input:radio[name=pizza-size]:checked").val();
  (console.log(sizeSelection))
//TODO: Grab values from checkboxes.  Below isn't working:
  var toppingSelection = document.getElementsByName("topping");
  for (var checkbox = 0; checkbox < toppingSelection.length; checkbox++) {
    console.log(toppingSelection[checkbox].checked);
    console.log(toppingSelection[checkbox].type);
    console.log(toppingSelection[checkbox].value);

  }
  console.log(toppingSelection)



  //Can't successfully log a price
    console.log(this.sizePrice)


var pizzaObject = new Pizza("small");
pizzaObject.toppings.push("ham", "pineapple");

var largePizza = new Pizza("large");
largePizza.toppings.push("chicken");
console.log(pizzaObject, largePizza);



  })
  });
