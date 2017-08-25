import { Component, Inject, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Comments } from './../Model/app.commentsInterface';


@Pipe({
  name: "sortBy"
})

export class SortPipe implements PipeTransform{
    transform(array: Array<Comments>, args: any, reverse: boolean = false): any {
        console.log('reverse: ' + reverse);
        if (array === undefined) 
            return
        const m = reverse ? -1 : 1;

        console.log('m: ' + m);
        array.sort((a: any, b: any) => {
          if ( a[args] < b[args] ){
              return -1*m;
          }else if( a[args] > b[args] ){
              return 1*m;
          }else{
              return 0;	
          }
      });
      return array;
    }
}
