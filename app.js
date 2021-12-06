const express = require('express')
const app = express()
const port = 3000
const env = process.env.COPILOT_ENVIRONMENT_NAME

app.get('/', (req, res) => {
  // console.log("Hello Get is called from client (" + req.socket.remoteAddress + ")")
  res.send('Hello AWS Copilot! Environment: ' + env)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})