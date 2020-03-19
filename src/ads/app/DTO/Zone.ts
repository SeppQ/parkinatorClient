export class Zone {
    zone_id : number;
    zone_name : string;
    cc_id : number;
    constructor(zone_id:number,zone_name:string,cc_id:number){
        this.zone_id = zone_id;
        this.zone_name = zone_name;
        this.cc_id = cc_id;
    }
}