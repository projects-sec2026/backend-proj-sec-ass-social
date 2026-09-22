import express from 'express'
import { supabase } from '../service/supabase.js'
import 'dotenv/config'

const router = express.Router()
const password = process.env.PASSWORD

const verifyPassword = (req, res, next) => {

    const { userPassword } = req.body

    if (userPassword != password) {
        return res.status(401).json()
    }

     next()

}

router.post('/', async (req, res) => {

    const { registration } = req.body

    const {data, error} = await supabase
        .from('atendimentos')
        .insert([registration])

    if (!error) {
        return res.status(200).json(true)
    } else {
        return res
    }

})

router.post('/registered', verifyPassword, async (req, res) => {

    const {data, error} = await supabase
        .from('atendimentos')
        .select('*')

    if(error) {
        return res.status(400).json(error)
    } else {
        return res.status(200).json({data: data, loged: true})
    }

})

export default router