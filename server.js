const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/image', (req,res) => {
    res.send('<image src="https://th.bing.com/th?id=OIP.K2rJJQDY9q1s2KJA6vX8nwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="mountain">')
})
app.get('/aaa', (req,res) => {
    res.send('<h1>こんにちは</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})