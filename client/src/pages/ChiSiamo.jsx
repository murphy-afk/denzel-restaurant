import { useSeo } from '../seo'
import Picture from '../components/Picture'
import './Page.css'

export default function ChiSiamo() {
  useSeo({
    title: 'Concept | Denzel Art Burger Kosher Milano',
    description:
      'Lo street food di diverse parti del mondo in versione gourmet, con carne certificata Kosher da piccoli allevamenti controllati.',
    path: '/chisiamo'
  })

  return (
    <div className="page container">
      <h1 className="page-title">CONCEPT</h1>

      <div className="page-content">
        <p>
          Denzel si propone di offrire ai propri clienti lo street food di diverse
          parti del mondo in versione gourmet. Esaltando il gusto di ogni piatto
          senza perderne pero l'originalita e la tradizione. La nostra carne, come
          tutto il resto e certificata Kosher e proviene da piccoli allevamenti
          controllati, ne deriva un'alta qualita e pregio del prodotto e anche una
          garanzia di sicurezza data l'elevata attenzione nella selezione del
          prodotto dopo la macellazione.
        </p>

        <p className="highlight">Tutto in un unico ristorante!</p>

        <div className="page-image">
          <Picture
            src="./images/assets/chisiamo-burger.jpg"
            alt="Hamburger Denzel serviti aperti su un tagliere di legno"
            width={794}
            height={597}
            loading="lazy"
          />
        </div>

        <p>
          I nostri hamburger sono presentati aperti per permetterti di vedere
          esattamente cosa stai mangiare, per darti la possibilita di dosare la
          quantita di salsa e lasciar che sia tu a scegliere la modalita di
          degustazione!
        </p>
      </div>
    </div>
  )
}
