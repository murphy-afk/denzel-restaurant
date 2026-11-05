import { defineConfig } from 'prisma/config'
import { readFileSync } from 'fs'
import { resolve } from 'path'

function loadEnv() {
  try {
    const envPath = resolve(process.cwd(), '.env')
    const envContent = readFileSync(envPath, 'utf-8')
    const lines = envContent.split('\n')
    for (const line of lines) {
      const match = line.match(/^([A-Z_]+)=(.*)$/)
      if (match) {
        process.env[match[1]] = match[2].trim()
      }
    }
  } catch (e) {
    // .env not found, continue
  }
}

loadEnv()

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'node src/seed.js'
  },
  datasource: {
    url: process.env.DATABASE_URL || ''
  }
})
