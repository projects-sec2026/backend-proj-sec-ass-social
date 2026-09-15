import express from 'express'
import 'dotenv/config'

const router = express.Router()
const password = process.env.PASSWORD


router.post('/auth', (req, res) => {
    const { userPassword } = req.body

    if(userPassword && password == userPassword) {
        res.status(200).send({ value: 'ok' })
    } else {
        res.status(401).send()
    }
    
})

router.get('/', (req, res) => {
    res.send({ archive: 'ok' }).status(200)
})

export default router