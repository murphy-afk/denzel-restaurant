import './Contact.css'

export default function Contact() {
  return (
    <div className="page container">
      <h1 className="page-title">SERVIZI</h1>

      <div className="services-grid">
        <div className="service-card">
          <h3 className="service-title">PRENOTAZIONE</h3>
          <p>Invia una mail o chiama e ti riserveremo subito un tavolo</p>
        </div>
        <div className="service-card">
          <h3 className="service-title">TAKE AWAY</h3>
          <p>Chiama oppure ordina direttamente qui da noi i nostri piatti da gustare a casa</p>
        </div>
        <div className="service-card">
          <h3 className="service-title">DELIVERY</h3>
          <p>
            Denzel direttamente a casa tua grazie a{' '}
            <a href="https://www.justeat.it/restaurants-denzelartburgeremore" target="_blank" rel="noopener noreferrer">Just Eat</a>,{' '}
            <a href="https://deliveroo.it/it/menu/milano/santambrogio/denzel" target="_blank" rel="noopener noreferrer">Deliveroo</a>,{' '}
            oppure tramite whatsapp al numero 3398246521
          </p>
        </div>
      </div>

      <div className="contact-info">
        <div className="contact-block">
          <h3 className="contact-heading">DENZEL</h3>
          <p>via Washington 9, 20146 Milano (MI)</p>
          <p>
            <a href="mailto:ristorantedenzel@yahoo.it">ristorantedenzel@yahoo.it</a>
          </p>
          <p>TEL / 02 485 19326</p>
          <p>CELL / 327 738 1017</p>
        </div>

        <div className="contact-block">
          <h3 className="contact-heading">ORARIO DI APERTURA</h3>
          <p>Dom - Gio (pranzo) 12.00 - 14.30</p>
          <p>(cena) 19.00 - 23.00</p>
          <p>Ven (pranzo) 12.00 - 14.30</p>
          <p>Sab sera (solo nella stagione invernale) 19.00 - 23.00</p>
        </div>
      </div>

      <div className="contact-map">
        <h3 className="contact-heading" style={{ textAlign: 'center' }}>MAP</h3>
        <iframe
          title="Mappa Denzel Milano"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.0!2d9.17!3d45.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI3JzMyLjAiTiA5wrAxMCcwMC4wIkU!5e0!3m2!1sit!2sit!4v1!5m2!1sit!2sit"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: 'var(--border-radius)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
