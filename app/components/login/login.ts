import {Component} 	from 'angular2/core';
import {User}		from '../../models/user';

@Component({
    selector: 'login',
    templateUrl: 'components/login/login.html'
})
export class LoginComponent 
{ 
	public user = new User();

	public onSubmit() 
	{
		this.user.login();
	}
}
