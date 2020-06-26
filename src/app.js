const express = require('express')
const port = process.env.PORT
const userRouter = require('./routers/user')
require('./db/db')

const app = express();
const cors = require('cors')

app.use(express.json())
app.use(userRouter)

app.use(cors())

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})