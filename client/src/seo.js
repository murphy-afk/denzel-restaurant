import { useEffect } from 'react'

// Base URL of the demo deploy. Swap this for the production domain in Session 8.
export const SITE_URL = 'https://murphy-afk.github.io/denzel-restaurant'

function setMeta(attr, key, content) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

// Sets the per page title, description, canonical URL and Open Graph tags.
export function useSeo({ title, description, path = '/' }) {
  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '/' : path}`
    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setCanonical(url)
  }, [title, description, path])
}
