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

    app.post('/Create_User', (req, res) => {
        const { id, login, password, role } = req.body
        const type = User.create({
            id, login, password, role
        });
        return res.json(type);
    }) 


async function start() {
    app.listen(PORT, () => {джд
        console.log(`address http://localhost:${PORT}`)
    })
}
sequelize.authenticate();
sequelize.sync();
start()
