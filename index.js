const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

app.get("/", (req, res) => {
    res.json({
        message: "I am nodejs server from docker"
    })
})

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))