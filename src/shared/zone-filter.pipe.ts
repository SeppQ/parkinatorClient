import { PipeTransform, Pipe } from '@angular/core';
import { Zone } from 'src/app/DTO/Zone';

@Pipe({
    name: "zoneFilter"
})
export class ZoneFilterPipe implements PipeTransform{
    transform(zone :Zone[], searchTerm: string):Zone[]{
        if(!zone || !searchTerm){
            return zone;
        }
        return zone.filter(zone => zone.zone_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}