export class User 
{
	public firstName: string = "";
	public lastName: string  = "";
	public email: string  	 = "";
	public password: string  = "";

	public register()
	{
		console.log("User Register");
		console.log(this);
	}

	public login()
	{
		console.log("User Login");
		console.log(this);
	}
}