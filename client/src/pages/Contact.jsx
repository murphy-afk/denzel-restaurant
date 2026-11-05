import { useState, useEffect } from 'react'
import { fetchServices, submitContact } from '../data/api'
import './Contact.css'

export default function Contact() {
  const [services, setServices] = useState([])
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    fetchServices().then((data) => setServices(data))
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    const result = await submitContact(formData)
    setFormStatus(result.message || 'Messaggio inviato con successo!')
    setFormData({ name: '', email: '', message: '' })
    setSubmitting(false)
    setTimeout(() => setFormStatus(null), 5000)
  }

  return (
    <div className="page container">
      <h1 className="page-title">SERVIZI</h1>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <h3 className="service-title">{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
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

      <div className="contact-form-section">
        <h3 className="contact-heading" style={{ textAlign: 'center' }}>SCRIVICI</h3>
        {formStatus && (
          <div className="form-status">{formStatus}</div>
        )}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Il tuo nome"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="La tua email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Messaggio</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Il tuo messaggio"
            />
          </div>
          <button type="submit" className="form-submit" disabled={submitting}>
            {submitting ? 'Invio in corso...' : 'Invia'}
          </button>
        </form>
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
