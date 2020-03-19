export class ParkedCars {
    zone_id: number;
    car_id: number;
    book_from: string;
    book_to: string;
    user_id : number;
    public constructor(zone_id: number ,car_id: number,bookFrom: string,bookTo: string,user_id:number)
        {
            
            this.zone_id = zone_id;
            this.car_id = car_id;
            this.book_from = bookFrom;
            this.book_to = bookTo;
            this.user_id = user_id;
        }

    
}