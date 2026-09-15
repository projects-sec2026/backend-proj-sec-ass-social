import sqlite3 from 'sqlite3'
import path from 'path'

const mySqlite = sqlite3.verbose()

const db = new mySqlite.Database(path.join(__dirname, '/registered.db'))

db.run('CREATE TABLE IF NOT EXISTS registered()')