export class Lots {
    lot_id: number;
    parking_name: string;
    cc_id: number;
    County: string;
    public constructor(lot_id: number ,Parking_name: string,cc_id: number , County : string)
        {
            this.lot_id = lot_id;
            this.parking_name = Parking_name;
            this.cc_id = cc_id;
            this.County = County;
        }

    
}