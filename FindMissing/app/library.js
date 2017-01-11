'use strict'

module.exports = {
 
 findMissing: function(arr1, arr2){
 	var temp1 = 0;
 	var temp2 = 0;
 	var arrDiff = 0;

 	if(arr1.length !== arr2.length){
       for(var i = 0; i<arr1.length; i++){
       	  temp1 += arr1[i];
       }
 	
       for(var i = 0; i<arr2.length; i++){
       	  temp2 += arr2[i];
       }
       arrDiff = temp2 - temp1;
       if(arrDiff>0){
       	return arrDiff;
       }else{
       	return -arrDiff;
       }

 	}else if(arr1.length===arr2.length || arr2.length===0){
          return 0;
 	}
  }

}
