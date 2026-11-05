import { useSeo } from '../seo'
import Picture from '../components/Picture'
import './Sfida530g.css'

export default function Sfida530g() {
  useSeo({
    title: 'Sfida 530g | Denzel Art Burger Milano',
    description:
      'Ordina e mangia un intero Denzel Burger da 530g e ricevi in premio la nostra T-shirt da vero Denzel addicted.',
    path: '/sfida530g'
  })

  return (
    <div className="page container">
      <h1 className="page-title">SFIDA 530g</h1>

      <div className="sfida-content">
        <p className="sfida-lead">
          Pensi di essere un vero mangiatore di Hamburger? Poldo ti fa un baffo?
        </p>

        <p className="sfida-challenge">
          Allora ti lanciamo la sfida DENZEL 530!
        </p>

        <p>
          Ordina e mangia un intero Denzel Burger da 530g e come simbolo della tua
          vittoria ti verra donata la nostra T-shirt da vero DENZEL-addicted!
        </p>

        <div className="sfida-image">
          <Picture
            src="./images/assets/sfida-burger.jpg"
            alt="Denzel Burger da 530g della sfida"
            width={720}
            height={960}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
