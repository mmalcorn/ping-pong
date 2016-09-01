$(document).ready(function(){
  $("#ping-pong").submit(function(){
  event.preventDefault();
  var pingPong = [];
  var userNumber = parseInt($("#userNumber").val());

  if (userNumber < 1 ){
    alert("Enter a number above 0")
  }else{
  (console.log(userNumber))
    for (var counter = 1 ; counter <= userNumber; counter++){
      if(counter % 15 === 0){
        pingPong.push("<li>");
        pingPong.push("pingpong")
        pingPong.push("</li>");
      }
      else if(counter % 5 === 0){
        pingPong.push("<li>");
        pingPong.push("ping")
        pingPong.push("</li>");
      }
      else if(counter % 3 === 0){
        pingPong.push("<li>");
        pingPong.push("pong")
        pingPong.push("</li>");
      }
      else{
        pingPong.push("<li>");
        pingPong.push(counter);
        pingPong.push("</li>");
      }
    }
  }
var joinPingPong = pingPong.join(" ");
$("#result").append(joinPingPong);

// ObjectName function(){
//
// }

var ObjectName = function(parameter1, parameter2, parameter3, parameter4, parameter5, parameter6, parameter7){
  //do a bunch of stuff here
  this.property1 = parameter1;
  this.property2 = parameter2;
  this.property3 = parameter3;
  this.property4 = parameter4;
  this.property5 = parameter5;
  this.property6 = parameter6;
  this.property7 = parameter7;
}

ObjectName.prototype.methodName = function(thing1, thing2){
  console.log(thing1);
  console.log(thing2);
}

var numberOfBeast = 666;
var variableName = "stuff";
var someObject = new ObjectName("thing1", "thing2", variableName, 1, numberOfBeast, numberOfBeast + 1, "diane");
//This is the syntax to remember for any method, including jquery methods.
// When we say
$("#thingwewanttofind")
// that gives us an object.
// when we want to run a jquery method on that object, like add some text to it, it is still in this syntax:
someObject.methodName();  //this means "hey object, GO! Run your method called 'methodname'."
someObject.methodName("hi!", "more stuff"); //if a method needs multiple pieces of informatio to do its job, we pass them in separated by commas.
$("#thingwewanttofind").append("some html!!");
// When we make a prototype, that is defining how the method will user those pieces of information, aka arguments.

  // var concatArrays = numberArray.concat(pingPong);


       (console.log("pingPong"));
       (console.log(pingPong));
       (console.log(joinPingPong));

  })
});
