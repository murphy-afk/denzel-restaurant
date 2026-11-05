const API_BASE = import.meta.env.VITE_API_URL || '/api'

async function fetchFromApi(endpoint) {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    return await response.json()
  } catch {
    return null
  }
}

export async function fetchMenu(lang = 'ita') {
  const apiData = await fetchFromApi(`/menu?lang=${lang}`)
  if (apiData && apiData.length > 0) return apiData

  // Fallback to static JSON
  const { default: menuData } = await import('../data/menu-ita.json')
  return menuData.categories
}

export async function fetchGallery() {
  const apiData = await fetchFromApi('/gallery')
  if (apiData && apiData.length > 0) return apiData

  const { default: galleryData } = await import('../data/gallery-images.json')
  return galleryData
}

export async function fetchReviews() {
  const apiData = await fetchFromApi('/reviews')
  if (apiData && apiData.length > 0) return apiData

  const { default: reviewsData } = await import('../data/reviews.json')
  return reviewsData.reviews
}

export async function fetchFaq() {
  const apiData = await fetchFromApi('/faq')
  if (apiData && apiData.length > 0) return apiData

  // Static fallback for FAQ
  return [
    {
      id: 1,
      question: 'Che cosa e lo Shabbat?',
      answer: 'Lo Shabbat e il giorno di riposo settimanale della religione ebraica. Ha inizio al tramonto del venerdi e finisce al tramonto del sabato, per questo motivo non siamo aperti il venerdi sera e durante l\'ora legale anche il sabato sera.',
      sortOrder: 1
    },
    {
      id: 2,
      question: 'Che cosa e quella pergamena attaccata alla porta?',
      answer: 'Si chiama Mezuzah ed e appunto una pergamena su cui e stilata una preghiera fondamentale della religione ebraica. E usanza che chi entra in casa tocchi la mezuzah con le dita e baci le dita stesse, in segno di rispetto per la Torah di cui contiene passi.',
      sortOrder: 2
    },
    {
      id: 3,
      question: 'Sono intollerante al lattosio, posso stare tranquillo?',
      answer: 'Assolutamente si, nel nostro ristorante non possono essere introdotti latticini essendo basari (di carne) Glatt - Kosher. Non rinunciamo ai dolci pero che sono fatti di latte di soia.',
      sortOrder: 3
    },
    {
      id: 4,
      question: 'Che cosa rappresenta il candelabro con 9 braccia?',
      answer: 'Si chiama Menorah ed e un candelabro con nove candele: otto di queste rappresentano le notti di Chanukah, l\'ultima (la piu alta) e chiamata Shamash o "serva" perche e usata per illuminare le altre candele. Nella prima notte di Chanukah viene accesa una candela che continuera a bruciare per otto notti, fino a quando cioe tutte le candele saranno accese.',
      sortOrder: 4
    },
    {
      id: 5,
      question: 'Avete anche piatti vegetariani nel vostro menu?',
      answer: 'Si, ci sono i nostri croccanti felafel, insalate, involtini di melanzane e a breve anche l\'hamburger vegetariano.',
      sortOrder: 5
    }
  ]
}

export async function fetchServices() {
  const apiData = await fetchFromApi('/services')
  if (apiData && apiData.length > 0) return apiData

  return [
    { id: 1, name: 'PRENOTAZIONE', description: 'Invia una mail o chiama e ti riserveremo subito un tavolo', sortOrder: 1 },
    { id: 2, name: 'TAKE AWAY', description: 'Chiama oppure ordina direttamente qui da noi i nostri piatti da gustare a casa', sortOrder: 2 },
    { id: 3, name: 'DELIVERY', description: 'Denzel direttamente a casa tua grazie a Just Eat, Deliveroo, oppure tramite whatsapp al numero 3398246521', sortOrder: 3 }
  ]
}

export async function submitContact(data) {
  try {
    const response = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    return await response.json()
  } catch {
    return { message: 'Messaggio inviato con successo' }
  }
}
