package v1.Users

import javax.inject.Inject

import v1.Users.country

import play.api.Logger
import play.api.data.Form
import play.api.libs.json.Json
import play.api.libs.json._
import play.api.mvc._

import scala.concurrent.{ExecutionContext, Future}

case class UsersFormInput(name: String, password: String)

/**
  * Takes HTTP requests and produces JSON.
  */
class UsersController @Inject()(val controllerComponents: ControllerComponents) (dao: DAO) (implicit ec: ExecutionContext) extends BaseController {


  def index = Action {  Ok(Json.toJson("Hellow world!!")) }

  def userName(name: String, l_name: String) = Action { Ok(Json.toJson(name+" "+l_name)) }

  def getUsers(id:Int) = Action{
      val result = dao.get_user(id)
      Ok(s"$result")
  }

  implicit val countriesWrites = new Writes[country] {
    def writes(c: country) = Json.obj(
      "Name"      -> c.Name,
      "Continent"  -> c.Continent
    )
  }

  def getAllCountries() = Action{
      val countries = dao.getAllCountries
      val jObj = Json.toJson(countries)
      Ok(s"$jObj")
  }
}