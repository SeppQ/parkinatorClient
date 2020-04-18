import { PipeTransform, Pipe } from '@angular/core';
import { Lots } from 'src/app/DTO/Lots';

@Pipe({
    name: "LotFilter"
})
export class LotFilterPipe implements PipeTransform{
    transform(lot :Lots[], searchTerm: string):Lots[]{
        if(!lot || !searchTerm){
            return lot;
        }
        return lot.filter(lot => lot.parking_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}