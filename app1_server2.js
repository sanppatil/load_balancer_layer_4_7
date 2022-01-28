
const app = require("express")()
const port = process.env.port || 3302

app.get("/*", (req, res) => {
    res.send(`App 1 - Served by port - ${port} `)
})

app.listen(port, () => console.log(`listening on port - ${port}`))