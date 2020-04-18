import { PipeTransform, Pipe } from '@angular/core';
import { Car } from 'src/app/DTO/Car';

@Pipe({
    name: "carRegFilter"
})
export class CarRegFilterPipe implements PipeTransform{
    transform(car :Car[], searchTerm: string):Car[]{
        if(!car || !searchTerm){
            return car;
        }
        return car.filter(car => car.car_reg.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}