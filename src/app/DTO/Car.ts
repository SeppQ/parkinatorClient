
export class Car {
    car_id: number;
    car_reg: string;
    car_colour: string;
    car_make: string;
    car_model: string;
    user_id: number;

    public constructor(car_id: number, car_reg: string, car_colour: string, car_make: string, car_model: string, user_id: number)
        {
            this.car_id = car_id;
            this.car_reg = car_reg;
            this.car_colour = car_colour;
            this.car_make = car_make;
            this.car_model = car_model;
            this.user_id = user_id;
        }
}

