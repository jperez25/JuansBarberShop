name := """juanBarberShopAPI"""
organization := "com.jovanny"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.13.3"

libraryDependencies += guice
libraryDependencies ++= Seq(
                            "org.scalatestplus.play" %% "scalatestplus-play" % "5.0.0" % Test,
                            jdbc,
                            "org.playframework.anorm" %% "anorm" % "2.6.7",
                            "mysql" % "mysql-connector-java" % "5.1.41"
                            )


// Adds additional packages into Twirl
//TwirlKeys.templateImports += "com.jovanny.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "com.jovanny.binders._"
