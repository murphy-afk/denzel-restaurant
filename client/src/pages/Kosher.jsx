import { useState, useEffect } from 'react'
import { fetchFaq } from '../data/api'
import './Page.css'

export default function Kosher() {
  const [openIndex, setOpenIndex] = useState(null)
  const [faqItems, setFaqItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFaq().then((data) => {
      setFaqItems(data)
      setLoading(false)
    })
  }, [])

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="page container">
      <h1 className="page-title">KOSHER</h1>

      <div className="page-content">
        <p className="highlight" style={{ marginTop: 0 }}>Che cosa vuol dire Kosher?</p>

        <p>
          Letteralmente la parola Kasher o Kosher significa "Adatto", quindi
          conforme alle regole dell'alimentazione ebraica.
        </p>
        <p>
          Queste regole sono stabilite nella Torah e determinano i criteri secondo
          i quali un alimento puo essere consumato. La carne proveniente solo da
          ruminanti con lo zoccolo separato e alcune specie di volatili, per quanto
          riguarda i pesci devono avere le pinne e le squame.
        </p>
        <p>
          Importante e anche la macellazione che si basa su un procedimento
          indolore chiamato Shechitah per mano di una persona esperta. Dopo la
          macellazione l'animale e sottoposto ad un controllo approfondito per
          verificare che i polmoni siano sani, cioe senza buchi o imperfezioni ed e
          cosi che la carne prende l'appellativo di Glatt, che rappresenta un piu
          alto livello di purezza e qualita.
        </p>
        <p>
          Nel nostro ristorante non sono presenti latticini poiche l'abbinamento di
          questi con i piatti a base di carne e proibito.
        </p>

        <div className="page-quote">
          "Non mangerai il vitello nel latte di sua madre"
        </div>

        <p>
          Le materie prime, gli strumenti utilizzati e le nostre preparazioni sono
          costantemente controllate dal rabbino come garanzia dalla nostra
          certificazione.
        </p>

        <div className="page-image">
          <img src="./images/assets/kosher-photo.jpg" alt="Certificazione kosher Denzel" />
        </div>

        <h2 style={{ textAlign: 'center', color: 'var(--color-accent)', marginTop: 'var(--space-2xl)' }}>
          FAQ - DOMANDE FREQUENTI
        </h2>

        {loading ? (
          <p style={{ textAlign: 'center' }}>Caricamento...</p>
        ) : (
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div className="faq-item" key={item.id || index}>
                <button
                  className="faq-question"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  {item.question}
                  <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>+</span>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
