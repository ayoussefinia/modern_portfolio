console.log("pattern loaded");

var windowWidth = window.innerWidth;
console.log(windowWidth);
var shapes = $(".shape").toArray();
console.log(shapes);
if(windowWidth > 1106) {
  for(i=1; i< shapes.length; i++) {
    console.log("in loop")
    var className = ".el"+i;
    $(className).addClass("animate");
    if(i<=6 && i>=1) {
      if(i%2 === 0) {
        
        $(className).addClass("checker");
        console.log("even number")
      }
    }
    if(i<=12 && i>=7) {
      if(i%2 !== 0) {
        $(className).addClass("checker");
        console.log("even number")
      }
    }
    if(i<=18 && i>=13) {
      if(i%2 === 0) {
        $(className).addClass("checker");
        console.log("even number")
      }
    }
    if(i<=24 && i>=19) {
      if(i%2 !== 0) {
        $(className).addClass("checker");
        console.log("even number")
      }
    }

    // for(j=1; j<=4; j++) {
    //   for(k=1; k<=6; k++) {

    //   }
    // }
  
    // $("el1").addClass("checker");
 
   console.log(className)
  }
   

  // for(var i=1; i= 4; i++) {
  //   if(i%2 == 0)
  // }
}
