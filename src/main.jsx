import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const phone = '0755 123 456';

function Icon({ name, size = 24, strokeWidth = 2, className = '' }) {
  const paths = {
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1 .37 1.97.72 2.9a2 2 0 0 1-.45 2.11L8.1 10a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.93.35 1.9.59 2.9.72A2 2 0 0 1 22 16.92z" /></>,
    map: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-5"/></>,
    card: <><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h3"/></>,
    user: <><circle cx="12" cy="7" r="4"/><path d="M4 22v-2a8 8 0 0 1 16 0v2M8 21v-3m8 3v-3"/></>,
    door: <><path d="M5 21h14M7 21V4l9-2v19M7 4h9M12 12h.01"/></>,
    car: <><path d="m5 17-2-2v-4l2-1 2-4h10l2 4 2 1v4l-2 2zM7 17v3m10-3v3M5 10h14"/><circle cx="7" cy="14" r="1"/><circle cx="17" cy="14" r="1"/></>,
    safe: <><rect x="3" y="2" width="18" height="20" rx="2"/><rect x="6" y="5" width="12" height="14" rx="1"/><circle cx="12" cy="12" r="3"/><path d="M12 9v3l2 1"/></>,
    key: <><circle cx="7" cy="12" r="4"/><path d="m11 12 10-7m-4 3 2 2m-5 0 2 2"/></>,
    check: <path d="m6 12 4 4 8-9"/>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
    close: <path d="m6 6 12 12M18 6 6 18"/>,
    arrow: <path d="M5 12h14m-5-5 5 5-5 5"/>,
  };
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Logo() {
  return <a className="logo" href="#acasa" aria-label="Deblocări Uși Cluj - Acasă">
    <span className="logo-shield"><Icon name="shield" size={30} /></span>
    <span>DEBLOCĂRI UȘI<strong>CLUJ</strong></span>
  </a>;
}

const services = [
  { icon: 'door', title: 'Deblocări uși', text: 'Deblocăm orice tip de ușă rapid și fără deteriorări.' },
  { icon: 'car', title: 'Deblocări auto', text: 'Acces rapid la mașina ta, fără zgârieturi sau daune.' },
  { icon: 'safe', title: 'Deschideri seifuri', text: 'Deschidem seifuri mecanice și electronice în siguranță.' },
  { icon: 'key', title: 'Schimb yale și încuietori', text: 'Înlocuim yale, broaște și încuietori cu produse de calitate.' },
];

const features = [
  { icon: 'map', title: 'Acoperire Cluj', text: 'Intervenim în Cluj-Napoca și în localitățile din împrejurimi' },
  { icon: 'clock', title: 'Disponibil 24/7', text: 'Suntem disponibili non-stop, inclusiv în weekend și sărbători' },
  { icon: 'user', title: 'Tehnicieni Profesioniști', text: 'Echipă experimentată, echipamente moderne' },
  { icon: 'card', title: 'Plată la Intervenție', text: 'Plătești doar după rezolvarea problemei' },
];

const reasons = [
  ['Experiență & Profesionalism', 'Peste 5 ani de experiență în domeniu și soluții pentru orice situație.'],
  ['Intervenții rapide', 'Ajungem la tine în 20–30 de minute, oriunde în Cluj și împrejurimi.'],
  ['Echipamente moderne', 'Folosim echipamente profesionale și metode fără deteriorări.'],
  ['Prețuri corecte', 'Tarife transparente, comunicate înainte de intervenție.'],
];

const faqs = [
  ['Cât timp durează intervenția?', 'De regulă ajungem în 20–30 de minute, iar intervenția durează între 10 și 40 de minute, în funcție de situație.'],
  ['Cât costă o intervenție?', 'Prețul depinde de tipul ușii și de complexitatea lucrării. Îți comunicăm costul înainte de a începe.'],
  ['Deblocați uși fără să le deteriorați?', 'Da. Folosim metode și echipamente profesionale pentru a evita deteriorarea ușii ori de câte ori este posibil.'],
  ['Interveniți și la mașini?', 'Da, oferim servicii de deblocare auto pentru majoritatea mărcilor și modelelor.'],
  ['Care sunt zonele în care interveniți?', 'Acoperim Cluj-Napoca și localitățile limitrofe. Sună-ne pentru confirmarea rapidă a disponibilității.'],
  ['Ce metode de plată acceptați?', 'Poți plăti numerar sau cu cardul, la finalul intervenției.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [sent, setSent] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return <>
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Navigație principală">
          <a className="active" href="#acasa" onClick={closeMenu}>Acasă</a>
          <a href="#servicii" onClick={closeMenu}>Servicii</a>
          <a href="#despre" onClick={closeMenu}>Despre noi</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="header-phone" href="tel:+40755123456"><Icon name="phone" size={18}/>{phone}</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Deschide meniul" aria-expanded={menuOpen}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
      </div>
    </header>

    <main>
      <section className="hero" id="acasa">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Intervenții rapide • 24/7</span>
            <h1>Deblocări uși<br/><em>în Cluj-Napoca</em></h1>
            <p className="lead">Soluții rapide, profesionale și fără deteriorări.<br/>Suntem disponibili 24/7 în tot Clujul!</p>
            <div className="trust-row">
              <div><span><Icon name="clock"/></span><p><b>Intervenție rapidă</b><small>20–30 minute</small></p></div>
              <div><span><Icon name="shield"/></span><p><b>Fără deteriorări</b><small>100% siguranță</small></p></div>
              <div><span><Icon name="check"/></span><p><b>Prețuri corecte</b><small>Fără costuri ascunse</small></p></div>
            </div>
            <div className="hero-actions">
              <a className="button primary" href="tel:+40755123456"><Icon name="phone" size={19}/> Sună acum</a>
              <a className="button whatsapp" href="https://wa.me/40755123456" target="_blank" rel="noreferrer"><span>◉</span> WhatsApp</a>
            </div>
          </div>
          <div className="hero-media media-slot">
            <img src="/images/hero-locksmith.jpg" alt="Tehnician profesionist la o intervenție de deblocare" onError={(e) => e.currentTarget.classList.add('missing')} />
            <span className="image-hint">Adaugă imaginea ta<br/><small>public/images/hero-locksmith.jpg</small></span>
          </div>
        </div>
      </section>

      <section className="feature-bar" aria-label="Avantaje">
        <div className="container feature-grid">{features.map((f) => <article key={f.title}><Icon name={f.icon} size={42}/><div><h3>{f.title}</h3><p>{f.text}</p></div></article>)}</div>
      </section>

      <section className="section services" id="servicii">
        <div className="container">
          <div className="section-heading"><span>Serviciile noastre</span><h2>Cu ce te putem ajuta</h2></div>
          <div className="service-grid">{services.map((service) => <article className="service-card" key={service.title}>
            <Icon name={service.icon} size={58}/><h3>{service.title}</h3><p>{service.text}</p><a href="#contact">Detalii <Icon name="arrow" size={16}/></a>
          </article>)}</div>
        </div>
      </section>

      <section className="about" id="despre">
        <div className="about-copy">
          <span className="section-kicker">Despre noi</span><h2>De ce să ne alegi?</h2>
          <p>Suntem o echipă locală din Cluj-Napoca, cu experiență și mii de intervenții reușite. Punem accent pe seriozitate, promptitudine și respect față de clienții noștri.</p>
          <div className="reasons">{reasons.map(([title, text]) => <div key={title}><span><Icon name="check" size={15} strokeWidth={3}/></span><p><b>{title}</b><small>{text}</small></p></div>)}</div>
        </div>
        <div className="about-media media-slot">
          <img src="/images/cluj-night.jpg" alt="Panorama orașului Cluj-Napoca seara" onError={(e) => e.currentTarget.classList.add('missing')} />
          <span className="image-hint">Adaugă imaginea ta<br/><small>public/images/cluj-night.jpg</small></span>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-heading"><span>Întrebări frecvente</span><h2>Răspunsuri la întrebările tale</h2></div>
          <div className="faq-grid">{faqs.map(([question, answer], i) => <div className={openFaq === i ? 'faq-item expanded' : 'faq-item'} key={question}>
            <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{question}</span><b>⌄</b></button>
            <div className="faq-answer"><p>{answer}</p></div>
          </div>)}</div>
        </div>
      </section>
    </main>

    <footer id="contact">
      <div className="container footer-grid">
        <div className="contact-copy">
          <span className="section-kicker">Contact</span><h2>Sună-ne sau scrie-ne!</h2><p>Suntem disponibili 24/7 și gata să te ajutăm.<br/>Contactează-ne și vom ajunge la tine cât mai rapid!</p>
          <div className="contact-list">
            <a href="tel:+40755123456"><span><Icon name="phone" size={15}/></span>{phone}</a>
            <a href="mailto:contact@deblocariusicluj.ro"><span><Icon name="mail" size={15}/></span>contact@deblocariusicluj.ro</a>
            <p><span><Icon name="map" size={15}/></span>Cluj-Napoca și împrejurimi</p>
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); e.currentTarget.reset(); }}>
          <div className="form-row"><input name="name" placeholder="Nume" aria-label="Nume" required/><input name="phone" placeholder="Telefon" aria-label="Telefon" required/></div>
          <input type="email" name="email" placeholder="Email" aria-label="Email" required/>
          <textarea name="message" placeholder="Mesaj" aria-label="Mesaj" required></textarea>
          <button className="button primary" type="submit">Trimite mesaj</button>
          {sent && <p className="form-success" role="status">Mulțumim! Mesajul a fost pregătit pentru trimitere.</p>}
        </form>
      </div>
      <div className="container footer-bottom"><p>© 2026 Deblocări Uși Cluj. Toate drepturile rezervate.</p><p>Web design cu pasiune în Cluj <span>♥</span></p></div>
    </footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
