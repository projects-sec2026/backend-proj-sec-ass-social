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

    if(!error) {
        return res.status(200).json(true)
    } else {
        return res.status(401).json(error)
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

router.delete('/:id', async (req, res) => {

    const { id } = req.params

    const {data, error} = await supabase
        .from('atendimentos')
        .delete()
        .eq('id', id)
        .select()

    if(!error) {
        return res.status(204).json(data[0])
    } else {
        return res.status(500).json(error)
    }

})

router.delete('/all', async (req, res) => {

    const {data, error} = supabase
        .from('atendimentos')
        .delete()
        .not('id', 'is', null)

    if(!error) {
        return res.status(204).json()
    } else {
        return res.status(500).json(error)
    }

})

export default router