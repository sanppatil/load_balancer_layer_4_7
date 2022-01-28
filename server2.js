
const app = require("express")()
const port = process.env.port || 4444

app.get("/*", (req, res) => {
    res.send(`Served by port - ${port} `)
})

app.listen(port, () => console.log(`listening on port - ${port}`))