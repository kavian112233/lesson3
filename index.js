const express = require('express');
require("dotenv").config()
const app = express();
const { DataTypes } = require('sequelize')
const PORT = 8080
const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(
    "Baza",
    "postgres",
    "8777",
    {
        dialect: 'postgres',
        host: "localhost",
        port: "5432"
    }
)

const User = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    login: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "user" },
})

app.get('/fio',(req,res) => {
    res.send('<h1>Крутоголов Александр, группа 11ИС - 322. </h1>')
    })
async function start() {
    app.listen(PORT, () => {
        console.log(`address http://localhost:${PORT}`)
    })
}
sequelize.authenticate();
sequelize.sync();
start()