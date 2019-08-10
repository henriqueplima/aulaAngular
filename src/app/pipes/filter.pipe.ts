import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})

export class FilterPipe implements PipeTransform {
    transform(items: any, filterBy: String) {
        console.log(filterBy);
        console.log('teste aqui');
        if ((filterBy == null) || (filterBy == '')) {
            return items;
        }

       
       var newArray = items.filter(function(user){
           return user.name.toUpperCase().includes(filterBy.toUpperCase());
       });
        return newArray;
        //return items;
    }
}