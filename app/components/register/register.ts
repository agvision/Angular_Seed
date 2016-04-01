import {Component} 		from 'angular2/core';
import {User}			from '../../models/user';

@Component({
    selector: 'register',
    templateUrl: 'components/register/register.html',
    providers: [User]
})
export class RegisterComponent 
{ 

	public constructor(public user: User)
	{
	}

	public onSubmit() 
	{
		this.user.register()
				 .then((data) => this.onRegisterSuccess(data))
				 .catch((errors) => this.handleRegisterErrors(errors));
	}

	private onRegisterSuccess(data: any)
	{
		console.log("Register Success");
	}

	private handleRegisterErrors(errors: string[])
	{
		console.log(errors);
	}
}
