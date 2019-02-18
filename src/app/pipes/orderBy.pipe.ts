import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
  name: "orderby"
})

export class OrderByPipe implements PipeTransform {
  transform(array:Array<any>, args?) {

    if(array) {

    let orderByValue = args[0]
      let byVal = 1

      if(orderByValue.charAt(0) == "!") {

        // reverse the array

        byVal = -1
        orderByValue = orderByValue.substring(1)
      }
      console.log("byVal",byVal);
      console.log("orderByValue",orderByValue);

      array.sort((a: any, b: any) => {
        if(a[orderByValue] < b[orderByValue]) {
          return -1*byVal;
        } else if (a[orderByValue] > b[orderByValue]) {
          return 1*byVal;
        } else {
          return 0;
        }
      });
      return array;
    }
  }
}