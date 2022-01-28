
const app = require("express")()
const port = process.env.port || 3301

app.get("/*", (req, res) => {
    res.send(`App 1 - Served by port - ${port} `)
})

app.listen(port, () => console.log(`listening on port - ${port}`))