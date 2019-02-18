import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(input: any, args?: any): any {
    var exp, rounded,
      suffixes = ['k', 'M', 'B', 'T', 'P', 'E'];

    if (Number.isNaN(input)) {
      return null;
    }

    if (input < 1000) {
      return Number.parseFloat(input).toFixed(args);
    }

    exp = Math.floor(Math.log(input) / Math.log(1000));

    return (input / Math.pow(1000, exp)).toFixed(args) +' '+ suffixes[exp - 1];

  }


}

