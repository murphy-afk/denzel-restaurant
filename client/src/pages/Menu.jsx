import { useState } from 'react'
import menuData from '../data/menu-ita.json'
import './Menu.css'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('antipasti')

  const categories = menuData.categories

  return (
    <div className="page container">
      <h1 className="page-title">MENÙ</h1>

      <div className="menu-tabs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`menu-tab ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="menu-section">
        {categories
          .filter((cat) => cat.id === activeCategory)
          .map((cat) => (
            <div key={cat.id}>
              <h2 className="menu-category-title">{cat.name}</h2>

              {cat.items && (
                <div className="menu-items">
                  {cat.items.map((item) => (
                    <div className="menu-item" key={item.name}>
                      <div className="menu-item-header">
                        <span className="menu-item-name">{item.name}</span>
                        {item.prices ? (
                          <span className="menu-item-prices">
                            {Object.entries(item.prices).map(([weight, price]) => (
                              <span key={weight} className="price-option">
                                <small>{weight}</small>
                                <strong>{price}</strong>
                              </span>
                            ))}
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
                      {item.addon && (
                        <div className="menu-item-addon">
                          <strong>+ {item.addon.name}</strong>
                          <span className="addon-price">{item.addon.price}</span>
                          <p>{item.addon.description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {cat.extras && (
                <div className="menu-extras">
                  <h3 className="extras-title">{cat.extras.name}</h3>
                  <div className="extras-grid">
                    {cat.extras.items.map((extra) => (
                      <div className="extra-item" key={extra.name}>
                        <span>+ {extra.name}</span>
                        <span className="extra-price">{extra.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {cat.sections && (
                <div className="menu-drinks">
                  {cat.sections.map((section) => (
                    <div className="drink-section" key={section.name}>
                      <h3 className="drink-title">{section.name}</h3>
                      {section.price && (
                        <span className="drink-section-price">{section.price}</span>
                      )}
                      <div className="drink-items">
                        {(section.items || []).map((item) => (
                          <div className="drink-item" key={typeof item === 'string' ? item : item.name}>
                            {typeof item === 'string' ? (
                              <span>{item}</span>
                            ) : (
                              <>
                                <span className="drink-name">
                                  {item.name}
                                  {item.note && <em> ({item.note})</em>}
                                </span>
                                <span className="drink-price">{item.price}</span>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  {cat.coperto && (
                    <div className="coperto">
                      <strong>{cat.coperto.name}</strong>
                      <p>{cat.coperto.description}</p>
                      <span>{cat.coperto.price}</span>
                    </div>
                  )}
                  {cat.allergeni && (
                    <p className="allergeni">{cat.allergeni}</p>
                  )}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}
