import { useState, useEffect } from 'react'
import { fetchMenu, staticMenu } from '../data/api'
import { useSeo } from '../seo'
import './Menu.css'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('antipasti')
  const [categories, setCategories] = useState(staticMenu)
  const [loading, setLoading] = useState(false)

  useSeo({
    title: 'Menù | Denzel Art Burger Kosher Milano',
    description:
      'Antipasti, hamburger, pesce e piatti del mondo: scopri il menù completo del ristorante Denzel in via Washington 9, Milano.',
    path: '/menu'
  })

  useEffect(() => {
    fetchMenu('ita').then((data) => {
      setCategories(data)
      if (data.length > 0) {
        setActiveCategory(data[0].name.toLowerCase().replace(/\s+/g, '-'))
      }
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div className="page container">
        <h1 className="page-title">MENÙ</h1>
        <p style={{ textAlign: 'center' }}>Caricamento...</p>
      </div>
    )
  }

  return (
    <div className="page container">
      <h1 className="page-title">MENÙ</h1>

      <div className="menu-tabs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`menu-tab ${activeCategory === cat.name.toLowerCase().replace(/\s+/g, '-') ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.name.toLowerCase().replace(/\s+/g, '-'))}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="menu-section">
        {categories
          .filter((cat) => cat.name.toLowerCase().replace(/\s+/g, '-') === activeCategory)
          .map((cat) => (
            <div key={cat.id}>
              <h2 className="menu-category-title">{cat.name}</h2>

              {cat.items && cat.items.length > 0 && (
                <div className="menu-items">
                  {cat.items.map((item) => (
                    <div className="menu-item" key={item.id || item.name}>
                      <div className="menu-item-header">
                        <span className="menu-item-name">{item.name}</span>
                        {item.price150g || item.price180g || item.price230g ? (
                          <span className="menu-item-prices">
                            {item.price150g && (
                              <span className="price-option">
                                <small>150 gr</small>
                                <strong>{item.price150g}</strong>
                              </span>
                            )}
                            {item.price180g && (
                              <span className="price-option">
                                <small>180 gr</small>
                                <strong>{item.price180g}</strong>
                              </span>
                            )}
                            {item.price230g && (
                              <span className="price-option">
                                <small>230 gr</small>
                                <strong>{item.price230g}</strong>
                              </span>
                            )}
                          </span>
                        ) : (
                          <span className="menu-item-price">
                            {item.price}
                            {item.unit && <small> {item.unit}</small>}
                          </span>
                        )}
                      </div>
                      {item.weight && <span className="menu-item-weight">{item.weight}</span>}
                      {item.description && (
                        <p className="menu-item-desc">{item.description}</p>
                      )}
                      {item.note && <span className="menu-item-note">{item.note}</span>}
                      {item.addonName && (
                        <div className="menu-item-addon">
                          <strong>+ {item.addonName}</strong>
                          <span className="addon-price">{item.addonPrice}</span>
                          <p>{item.addonDescription}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}
