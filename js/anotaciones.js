var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // El alcance es dentro del bloque if
  var b = 1; // El alcance es global

  console.log(a); // 4
  console.log(b); // 1
}

console.log(a); // 5
console.log(b); // 1

// const video = document.querySelector("video");
// const button = document.querySelector("button");

// function MediaPlayer(config) {
//   this.media = config.el;
// }

// MediaPlayer.prototype.Mifunction = function() {
//   !this.media.paused ? this.media.pause() : this.media.play();
// };

// const media = new MediaPlayer({ el: video });

// button.onclick = () => media.Mifunction();

// function printNumbers() {
//   var i;
//   for (i = 0; i < 10; i++) {
//     function eventuallyPrintNumber(n) {
//       setTimeout(function() {
//         console.log(n);
//       }, 100);
//     }
//     eventuallyPrintNumber(i);
//   }
// }

// printNumbers();

var myApp = (function() {
  var foo = "Module pattern";
  var bar = "ver 1.0";

  var sum = function(param1, param2) {
    return param1 + param2;
  };

  return {
    myMessage: function() {
      return foo + "" + bar;
    },
    mySum: function(param1, param2) {
      return sum(param1, param2);
    }
  };
})();
