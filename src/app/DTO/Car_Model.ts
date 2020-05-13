
export class Car_Model {
    car_model_id: number;
    car_model_name: string;
    car_make_id : number;


    public constructor(car_model_id: number, car_model_name: string, car_make_id : number)
        {
            this.car_model_id = car_model_id;
            this.car_model_name = car_model_name;
            this.car_make_id = car_make_id;
        }
}

