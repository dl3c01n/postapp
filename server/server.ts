import express from 'express'
import { getPostRoute, errorRoute, postPostRoute} from './route'
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/', getPostRoute, postPostRoute, errorRoute)

app.listen(5656)