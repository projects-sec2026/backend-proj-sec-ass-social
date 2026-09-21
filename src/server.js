import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import routes from './routes/router.js'
import 'dotenv/config'

const port = process.env.PORT
const server = express()

server.use(express.json())
server.use(helmet({}))
server.use(cors({}))
server.use('/', routes)

server.listen(port, () => {
    console.log(`Rodando na porta: ${port}`)
})