import express from 'express'
import mongoose from 'mongoose'
import { port, dbURI } from './config/environment.js'
import router from './config/router.js'
import path from 'path'

const app = express()

const __dirname = path.resolve()



const startServer = async () => {
  try {
    // ! Connect to database
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Database has connected ')

    // ! Connect to React App code to allow requests
    
    app.use(express.static(`${__dirname}/client/build`))

    //! Body Parser
    app.use(express.json())

    //! Logger Middleware
    app.use((req, _res, next) => {
      console.log(`Incoming request ${req.method} = ${req.url}`)
      next()
    })

    //! Middleware for router to handle incoming requests
    app.use('/api', router)

    //! Route handler - any other request should respond with frontend
    app.use('/*', (_, res) => res.sendFile(`${__dirname}/client/build/index.html`))

    app.listen(port, () => console.log(`👹 Express is running on ${port}`))
    
  } catch (err) {
    console.log('Somehting has gone wrong', err)
  }
}

startServer()

