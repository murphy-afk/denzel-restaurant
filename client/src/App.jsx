import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import Kosher from './pages/Kosher'
import Menu from './pages/Menu'
import Gallery from './pages/Gallery'
import DiconoDiNoi from './pages/DiconoDiNoi'
import Contact from './pages/Contact'
import Sfida530g from './pages/Sfida530g'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="chisiamo" element={<ChiSiamo />} />
          <Route path="kosher" element={<Kosher />} />
          <Route path="menu" element={<Menu />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="diconodinoi" element={<DiconoDiNoi />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sfida530g" element={<Sfida530g />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
