const port = 1337
const payloadDir = './payloads/'

const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Webhook inspector 🎣'))

app.post('/', (req, res) => {
  res.send('OK')
  console.log(Date.now())
  console.log(req.body)

  const filename = `${Date.now()}.json`

  fs.writeFileSync(payloadDir + filename, JSON.stringify(req.body, null, 2))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
