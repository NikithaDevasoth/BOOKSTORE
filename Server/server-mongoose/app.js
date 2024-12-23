const express = require('express')
const app = express()
const cors = require('cors')
const Port = 1000
const conn = require('./conn/conn')
app.use(express.json())
const User=require("./routes/UserRoute")
const Books=require('./routes/BookRoute')
const Favourite=require('./routes/FavouriteRouter');
const Order=require('./routes/OrderRoute')
const Cart=require('./routes/CartRoute')
app.use(cors())
app.use('/carts',Cart)
app.use('/orders',Order)
app.use('/favourites',Favourite)
app.use('/books',Books)
app.use('/users', User)
app.listen(Port, (() => console.log('listening in:' + Port)))