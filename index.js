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

app.get('/',(req,res) => {
res.send('<h1>я сделаю 1 задание</h1>')
})

app.get('/fio',(req,res) => {
    res.send('<h1>Крутоголов Александр, группа 11ИС - 322. </h1>')
    })

    app.post('/Create_User', (req, res) => {
        const { id, login, password, role } = req.body
        const type = User.create({
            id, login, password, role
        });
        return res.json(type);
    })
    
    app.delete('/Delete_User/Delete_ID/:Delete_ID', (req, res) => {
        const { id, login, password, role } = req.body
        let Delete_ID = Number(req.params.Delete_ID)
        const type = User.destroy({ where: { id: Delete_ID } });
        res.send("Ну удалил и че")
    })

async function start() {
    app.listen(PORT, () => {
        console.log(`address http://localhost:${PORT}`)
    })
}
sequelize.authenticate();
sequelize.sync();
start()