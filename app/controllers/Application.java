package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render());
    }

    public static Result youtube(){
    	return ok(youtube.render());
    }

    public static Result googleplus(){
    	return ok(googleplus.render());
    }

}
