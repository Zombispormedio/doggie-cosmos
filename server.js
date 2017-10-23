import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import methodOverride from 'method-override'
import {connect} from './drivers'
import {createNode, listNodes} from './controllers/nodesController'
import {getConfiguration} from './config'

connect(getConfiguration())
const app = express()
app.use(bodyParser.json())
app.use(morgan("combined"))
app.use(methodOverride())

app.get("/nodes", listNodes)
app.post("/node", createNode)

app.listen(3000, ()=>{
    console.log("Server started at port 3000")
})