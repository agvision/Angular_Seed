import {Component} 	from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {RegisterComponent} from './register/register';

@Component({
    selector: 	'my-app',
    template:	'<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
    providers: 	[ROUTER_PROVIDERS]
})
@RouteConfig([
  	{
    	path: '/register',
    	name: 'Register',
    	component: RegisterComponent,
    	useAsDefault: true
  	}
])
export class AppComponent 
{ 

}