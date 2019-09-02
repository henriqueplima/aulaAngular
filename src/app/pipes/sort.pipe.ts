import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort',
})

export class SortPipe implements PipeTransform {
    transform(items: any) {
        console.log("passou no sort");
        // console.log(items);
        // var newArray = items.sort();
        // console.log(newArray);
        // return newArray;
        // return items.sort();
        var newArray = items.sort(function(a,b) {
            console.log('metodo sorte');
            if ( a.name < b.name ){
                return -1;
            }
            else if ( a.name > b.name ){
                return 1;
            }
            return 0;
        });
        console.log('new');
        console.log(newArray[0]);
        return newArray;
        //return items;
    }
}