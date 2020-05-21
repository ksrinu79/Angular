import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    // Remove the duplicate elements
   // let uniqueArray = value.filter(function (el, index, array) {
   //   return array.indexOf (el) == index;
   // });
   //let uniqueArray = Array.from(new Set(value));

    //return uniqueArray;

    var output = [],
      keys = [];
          // we utilize angular's foreach function
    // this takes in our original collection and an iterator function
    //angular.forEach(value, function(item) {
      for (let item of value) {
      // we check to see whether our object exists
      var key = item["questionId"];
      // if it's not already part of our keys array
      if (keys.indexOf(key) === -1) {
        // add it to our keys array
        keys.push(key);
        // push this item to our final output array
        output.push(item);
      }
    };
    // return our array which should be devoid of
    // any duplicates
    return output;
  }
}
