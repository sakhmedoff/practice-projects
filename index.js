const app = require("./app");

var PORT = process.env.PORT | 3500


app.listen(3400, "localhost", () => {
    console.log("server started")
})

