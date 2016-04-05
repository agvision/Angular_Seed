import {Component} 	from 'angular2/core';
import {User}		from '../../models/user';

import {TranslateService} from '../../services/translate';

@Component({
    selector: 'login',
    templateUrl: 'components/login/login.html',
    providers: [User]
})
export class LoginComponent 
{ 

	public constructor(public user: User, public ts: TranslateService)
	{
		ts.load('components/login/strings', 'login');
	}

	public onSubmit() 
	{
		this.user.login()
				 .then((data) => this.onLoginSuccess(data))
				 .catch((errors) => this.handleLoginErrors(errors));
	}

	public onUserClick()
	{
		this.user.getProfile()
				 .then((data) => this.onGetProfileSuccess(data))
				 .catch((errors) => this.handleGetProfileErrors(errors));
	}

	private onLoginSuccess(data: any)
	{
		console.log("Login Success");
		if(data.token) {
			this.saveAuthToken(data.token);
		}
	}

	private onGetProfileSuccess(data)
	{
		console.log(data);
	}

	private handleGetProfileErrors(errors)
	{
		console.log(errors);
	}

	private saveAuthToken(token: string)
	{
		this.user.setAuthToken(token);
	}

	private handleLoginErrors(errors: string[]) 
	{
		console.log(errors);
	}
}
