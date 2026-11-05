import { useState } from 'react'
import './Page.css'

const faqItems = [
  {
    question: 'Che cosa e lo Shabbat?',
    answer: 'Lo Shabbat e il giorno di riposo settimanale della religione ebraica. Ha inizio al tramonto del venerdi e finisce al tramonto del sabato, per questo motivo non siamo aperti il venerdi sera e durante l\'ora legale anche il sabato sera.'
  },
  {
    question: 'Che cosa e quella pergamena attaccata alla porta?',
    answer: 'Si chiama Mezuzah ed e appunto una pergamena su cui e stilata una preghiera fondamentale della religione ebraica. E usanza che chi entra in casa tocchi la mezuzah con le dita e baci le dita stesse, in segno di rispetto per la Torah di cui contiene passi.'
  },
  {
    question: 'Sono intollerante al lattosio, posso stare tranquillo?',
    answer: 'Assolutamente si, nel nostro ristorante non possono essere introdotti latticini essendo basari (di carne) Glatt - Kosher. Non rinunciamo ai dolci pero che sono fatti di latte di soia.'
  },
  {
    question: 'Che cosa rappresenta il candelabro con 9 braccia?',
    answer: 'Si chiama Menorah ed e un candelabro con nove candele: otto di queste rappresentano le notti di Chanukah, l\'ultima (la piu alta) e chiamata Shamash o "serva" perche e usata per illuminare le altre candele. Nella prima notte di Chanukah viene accesa una candela che continuera a bruciare per otto notti, fino a quando cioe tutte le candele saranno accese.'
  },
  {
    question: 'Avete anche piatti vegetariani nel vostro menu?',
    answer: 'Si, ci sono i nostri croccanti felafel, insalate, involtini di melanzane e a breve anche l\'hamburger vegetariano.'
  }
]

export default function Kosher() {
  const [openIndex, setOpenIndex] = useState(null)

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

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div className="faq-item" key={index}>
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
      </div>
    </div>
  )
}
