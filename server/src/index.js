// Denzel API server
// Session 3 will add Express routes, Prisma, and MySQL

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Denzel API running on port ${PORT}`)
})
