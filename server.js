import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

const PORT = process.env.PORT

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
