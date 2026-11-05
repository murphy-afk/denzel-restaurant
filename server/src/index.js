import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import { PrismaClient } from './generated/prisma/client.ts'

const app = express()
const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'denzel'
})
const prisma = new PrismaClient({ adapter })
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// Menu endpoints
app.get('/api/menu', async (req, res) => {
  try {
    const language = req.query.lang || 'ita'
    const categories = await prisma.menuCategory.findMany({
      orderBy: { sortOrder: 'asc' },
      include: {
        items: {
          where: { language: { code: language } },
          orderBy: { sortOrder: 'asc' }
        }
      }
    })
    res.json(categories)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch menu' })
  }
})

app.get('/api/menu/languages', async (req, res) => {
  try {
    const languages = await prisma.menuLanguage.findMany({
      orderBy: { code: 'asc' }
    })
    res.json(languages)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch languages' })
  }
})

// Gallery endpoint
app.get('/api/gallery', async (req, res) => {
  try {
    const images = await prisma.galleryImage.findMany({
      orderBy: { sortOrder: 'asc' }
    })
    res.json(images)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch gallery' })
  }
})

// Reviews endpoint
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await prisma.review.findMany({
      orderBy: { sortOrder: 'asc' }
    })
    res.json(reviews)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews' })
  }
})

// FAQ endpoint
app.get('/api/faq', async (req, res) => {
  try {
    const faqItems = await prisma.faqItem.findMany({
      orderBy: { sortOrder: 'asc' }
    })
    res.json(faqItems)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch FAQ' })
  }
})

// Services endpoint
app.get('/api/services', async (req, res) => {
  try {
    const services = await prisma.service.findMany({
      orderBy: { sortOrder: 'asc' }
    })
    res.json(services)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch services' })
  }
})

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    const contactMessage = await prisma.contactMessage.create({
      data: { name, email, message }
    })

    res.status(201).json({ message: 'Message sent successfully', id: contactMessage.id })
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' })
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Denzel API running on port ${PORT}`)
})
