export class BookingDetails {
    car_reg :String;
    zone_name :String;
    parking_name :String;
    fullname :String;

    public constructor(car_reg: string, zone_name: string, parking_name: string, fullname: string)
        {
            this.car_reg = car_reg;
            this.zone_name = zone_name;
            this.parking_name = parking_name;
            this.fullname = fullname;
        }    
}