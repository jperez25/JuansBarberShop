package v1.Users

import javax.inject.Inject

import play.api.routing.Router.Routes
import play.api.routing.SimpleRouter
import play.api.routing.sird._

/**
  * Routes and URLs to the PostResource controller.
  */
class UsersRouter @Inject()(controller: UsersController) extends SimpleRouter {
  val prefix = "/v1/users"

/*
  def link(id: PostId): String = {
    import io.lemonlabs.uri.dsl._
    val url = prefix / id.toString
    url.toString()
  }
*/

  override def routes: Routes = {
    case GET(p"/") =>
      controller.index

    case GET(p"/formName" ? q"name=$name" & q"l_name=$l_name") =>
      controller.userName(name,l_name)

    case GET(p"/getusers" ?q"id=$id") =>
      controller.getUsers(id.toInt)

    case GET(p"/getAllCountries") =>
        controller.getAllCountries

/*
    case POST(p"/") =>
      controller.process

    case GET(p"/$id") =>
      controller.show(id)
*/
  }

}
