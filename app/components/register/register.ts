import {Component} 	from 'angular2/core';
import {User}		from '../../models/user';

@Component({
    selector: 'register',
    templateUrl: 'components/register/register.html'
})
export class RegisterComponent 
{ 
	public user = new User();

	public onSubmit() 
	{
		console.log(this.user);
	}
}
