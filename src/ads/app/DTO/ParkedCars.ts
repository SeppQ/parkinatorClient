export class ParkedCars {
    zone_id: number;
    car_id: number;
    bookFrom: string;
    bookTo: string;
    public constructor(zone_id: number ,car_id: number,bookFrom: string,bookTo: string)
        {
            this.zone_id = zone_id;
            this.car_id = car_id;
            this.bookFrom = bookFrom;
            this.bookTo = bookTo;
        }

    
}