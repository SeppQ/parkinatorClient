export class Zone {
    zone_id : number;
    zone_name : string;
    max_spaces : number;
    is_vip : boolean;
    lot_id : number;
    max_disabled_spaces : number;
    alt : number;
    lng : number;
    price : number;
    constructor(zone_id:number,zone_name:string,max_spaces:number,is_vip:boolean,lot_id:number,max_disabled_spaces:number,alt : number,lng : number,price : number){
        this.zone_id = zone_id;
        this.zone_name = zone_name;
        this.max_spaces = max_spaces;
        this.is_vip = is_vip;
        this.lot_id = lot_id;
        this.max_disabled_spaces = max_disabled_spaces;
        this.alt = alt;
        this.lng = lng;
        this.price = price
    }
}

