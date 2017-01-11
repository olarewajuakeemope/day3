'use strict'

function arrayPrototypes() {

  Array.prototype.toTwenty = function() {
    var toTwentyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    return toTwentyArray;
  }
  Array.prototype.toForty = function() {
    var toFortyArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40];
    return toFortyArray;
  }
  Array.prototype.toOneThousand = function() {

    var toOneThousandArray = [];
    for (var i = 10; i < 1001; i += 10) {
      toOneThousandArray.push(i);
    }
    return toOneThousandArray;

  }
  var obj = {
    count: 0,
    index: 0,
    length: 0
  };
  Array.prototype.search = function(d) {
    this.sort(function(a, b) {
      return a - b;
    });
    var temp = 0;
    for (var n = 0; n < this.length; n++) {
      temp = this[n];
      this[n] = parseInt(temp);
    }


    var numCount = 0;
    var numIndex = 0;
    var tempDiff = 0;
    obj.length = this.length;

    function binarysearch(thisarr, e) {
      var min = 0;
      var max = thisarr.length - 1;
      var guess;
      if (thisarr[max] === e){
          return numIndex = max;
      }else if(thisarr[0] === e){
          return numIndex = 0;
      }
      while (min <= max) {
         
        guess = Math.floor((max + min) / 2);
        tempDiff = Math.floor((max + min) / 4);

        
        if (thisarr[guess] === e) {
          numIndex += guess;
          return guess;
        } else if (thisarr[guess] < e) {
          min = guess + 1;
       } else {
           max = guess - 1;
        }
       numCount++;
      }
       return numIndex = -1;
    }
    binarysearch(this, d);

    obj.count = numCount;
    obj.index = numIndex;


    return obj;

  }

}

module.exports.arrayPrototypes = arrayPrototypes;
