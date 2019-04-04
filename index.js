const express = require('express')
const app = express()
const port = 8017

app.get('/', (req, res) =>
  res.send('Greetings from Thanaphoom Babparn...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
