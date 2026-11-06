import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

export default function Layout() {
  const { pathname } = useLocation()

  // Takes the user to the top of the page on every route change. Instant
  // scrolling, since smooth scrolling across a full page would feel slow.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
