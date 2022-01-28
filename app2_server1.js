
const app = require("express")()
const port = process.env.port || 4401

app.get("/*", (req, res) => {
    res.send(`App 2 - Served by port - ${port} `)
})

app.listen(port, () => console.log(`listening on port - ${port}`))