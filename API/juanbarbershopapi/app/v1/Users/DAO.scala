package v1.Users

import javax.inject.Inject
import play.api.db.Database
import play.api.db._
import anorm._
import anorm.SqlParser.{ str, float }
import anorm.{ Macro, RowParser }


import scala.concurrent.Future

case class country(Name: String, Continent:String)

class DAO @Inject() (db: Database) (implicit databaseExecutionContext: DatabaseExecutionContext) {
  def updateSomething(): Unit = {
    Future {
      db.withConnection { conn =>
        // do whatever you need with the db connection
      }
    }(databaseExecutionContext)
  }

  def get_user(id: Int): String = {
    val parser = 
        str("userId")  map {
            case name  => (name)
        }
    db.withConnection {
        implicit conn => 
        // Create an SQL query
        val selectUsers: (String) = SQL(s"SELECT name as N FROM capstone.users where id = $id").as(SqlParser.str("N").single)
                        
        return selectUsers
    }
  }

  def getAllCountries(): List[country] = {
      db.withConnection {
        implicit conn => 
          val parser: RowParser[country] = Macro.namedParser[country]
          val selectCountries: List[country] = SQL("SELECT * FROM world.country").as(parser.*)
          //val countries = selectCountries.map(row => row[String]("Name") -> row[String]("Continent") ).as(SqlParser.str("Name")).toList
          
          return selectCountries
      }
  }
}