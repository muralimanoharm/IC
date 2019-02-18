import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, searchParameter:string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    if(searchParameter == 'question')
    {
      return items.filter( it => {
        return it.question.toLowerCase().includes(searchText);
      });
    }else if(searchParameter == 'source'){
      return items.filter( it => {
        return it.source.toLowerCase().includes(searchText);
      });
    }
    else if(searchParameter == 'name'){
      return items.filter( it => {
        return it.name.toLowerCase().includes(searchText);
      });
    }else if(searchParameter == 'Ascending'){
      return items.filter( it => { 
        return it.substring(0, 1).toLowerCase().includes(searchText);
    });
    } else if(searchParameter == 'All'){
    return items.filter( it => {
      return it.toLowerCase().includes(searchText);
    });
    }else if(searchParameter == 'type'){
      return items.filter( it => {
      return it.type.includes(searchText);
    });
    }
  }
}
