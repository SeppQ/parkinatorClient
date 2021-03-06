export class Zone {
    zone_id : number;
    zone_name : string;
    max_spaces : number;
    is_vip : boolean;
    lot_id : number;
    max_disabled_spaces : number;
    
    constructor(zone_id:number,zone_name:string,max_spaces:number,is_vip:boolean,lot_id:number,max_disabled_spaces:number){
        this.zone_id = zone_id;
        this.zone_name = zone_name;
        this.max_spaces = max_spaces;
        this.is_vip = is_vip;
        this.lot_id = lot_id;
        this.max_disabled_spaces = max_disabled_spaces;
    }
}

