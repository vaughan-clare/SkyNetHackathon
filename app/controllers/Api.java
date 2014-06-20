// API 

/* Authentication */



/* Query Builder */
//TODO Develop Standards for accessing 3rd party apis


/* Query Response from 3rd Parties */ 
//3rd Parties
//https://developers.google.com/custom-search/json-api/v1/overview
//

package controllers;

import play.*;
import play.mvc.*;
import views.html.*;

public class Api extends Controller {

	/* Lists all available methods */
	public static Result list(String ver){
		return ok("1- default \n");
	}

	/* returns the default tree selections choices */
	public static Result default(){

	}

}