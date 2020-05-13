import { PipeTransform, Pipe } from '@angular/core';
import { Car } from 'src/app/DTO/Car';
import { VehicleMake } from 'src/app/DTO/VehicleMake';

@Pipe({
    name: "carMakeFilter"
})
export class carMakeFilterPipe implements PipeTransform{
    transform(car :VehicleMake[], searchTerm: string):VehicleMake[]{
        if(!car || !searchTerm){
            return car;
        }
        return car.filter(car => car.Make_Name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}