import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

   transform(value: any, campo:string, args:string): unknown {
     if(!value)return null;
    if(!args)return value;

    return value.filter(singleItem =>
      singleItem[campo].toLowerCase().includes(args.toLowerCase())      
      );
  }


}
