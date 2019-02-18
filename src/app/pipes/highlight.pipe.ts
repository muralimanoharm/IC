import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(list: any, searchText: string): any[] {
    if (!list) { return []; }
    if (!searchText) { return list; }

    const re = new RegExp(searchText, 'gi');
    return list.replace(re, `<span class='highlight'>${searchText}</span>` );

  }   
}
