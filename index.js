
const express = require ('express')
const app = express()
app.get("/", (req, res) => {
	const hellomessage = `Bonjour`
	console.log(hellomessage)
	res.send(hellomessage)
})

app.listen(8080, () => {
	console.log("serveur pret")
})
