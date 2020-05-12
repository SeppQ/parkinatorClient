import { PipeTransform, Pipe } from '@angular/core';
import { User } from 'src/app/DTO/User';

@Pipe({
    name: "UserFilter"
})
export class UserFilterPipe implements PipeTransform{
    transform(user :User[], searchTerm: string):User[]{
        if(!user || !searchTerm){
            return user;
        }
        return user.filter(user => user.email.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}