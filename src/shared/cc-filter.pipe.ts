import { PipeTransform, Pipe } from '@angular/core';
import { Cc } from 'src/app/DTO/Cc';

@Pipe({
    name: "CcFilter"
})
export class CcFilterPipe implements PipeTransform{
    transform(cc :Cc[], searchTerm: string):Cc[]{
        if(!cc || !searchTerm){
            return cc;
        }
        return cc.filter(cc => cc.cc_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}