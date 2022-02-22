import express, { Application, Request, Response } from "express"
import { json, urlencoded } from "body-parser"
import morgan from "morgan"

const app: Application = express()
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan("dev"))

const middleware = (req: Request, res: Response, next: any) => {
  console.log("middleware")
  next()
}

app.get("/", middleware, (_req: Request, res: Response) => res.send({ message: "hello world" }))

export const start = () => {
  //check http://localhost:3000/ to see the response
  app.listen(3000)
}
