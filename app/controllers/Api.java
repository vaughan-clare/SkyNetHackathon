// API 

/* Authentication */



/* Query Builder */
//TODO Develop Standards for accessing 3rd party apis


/* Query Response from 3rd Parties */ 
//3rd Parties
//https://developers.google.com/custom-search/json-api/v1/overview
//

package controllers;

import com.fasterxml.jackson.databind.node.ObjectNode;
import play.*;
import play.mvc.*;
import views.html.*;
import play.libs.Json;
import com.fasterxml.jackson.databind.JsonNode;

public class Api extends Controller {

	/* Lists all available methods */
	public static Result list(String ver){
		return ok("1- default \n");
	}

	/* returns the default tree selections choices */
	public static Result defaultTree(){
        JsonNode json = request().body().asJson();
        ObjectNode result = Json.newObject();
        String name = json.findPath("name").textValue();
        if(name == null) {
            result.put("status", "KO");
            result.put("message", "Missing parameter [name]");
            return badRequest(result);
        } else {
            result.put("status", "OK");
            result.put("message", "Hello " + name);
            return ok(result);
        }

	}

	// @BodyParser.Of(BodyParser.Json.class)
	// public static Result sayHello() {
 //  		JsonNode json = request().body().asJson();
 //  		ObjectNode result = Json.newObject();
 //  		String name = json.findPath("name").textValue();
	//   if(name == null) {
	//     result.put("status", "KO");
	//     result.put("message", "Missing parameter [name]");
	//     return badRequest(result);
	//   } else {
	//     result.put("status", "OK");
	//     result.put("message", "Hello " + name);
	//     return ok(result);
	//   }
	// }

}