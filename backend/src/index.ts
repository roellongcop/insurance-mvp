// backend/src/index.ts
import express from 'express'
import bodyParser from 'body-parser'
import { recommend } from './controllers/recommendation'

const app = express()
app.use(bodyParser.json())

app.post('/recommendation', recommend)

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`API listening on ${port}`))
