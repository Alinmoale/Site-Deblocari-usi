import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const phone = '+40 742 565 046';

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
    check: <path d="m6 12 4 4 8-9"/>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
    close: <path d="m6 6 12 12M18 6 6 18"/>,
    arrow: <path d="M5 12h14m-5-5 5 5-5 5"/>,
    chevron: <path d="m6 9 6 6 6-6"/>,
  };
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Logo({ onNavigate }) {
  return <a className="logo" href="#acasa" onClick={(event) => onNavigate(event, 'acasa')} aria-label="Deblocări Uși Cluj - Acasă">
    <span className="logo-shield"><img src="/images/logo-key-house-v2-small.png" alt="" width="120" height="80" /></span>
    <span>DEBLOCĂRI UȘI<strong>CLUJ</strong></span>
  </a>;
}

const services = [
  {
    title: 'Deblocări uși',
    image: '/images/service-deblocari-usi-480.jpg',
    text: 'Intervenție rapidă pentru uși de apartament, casă sau birou, realizată cu echipamente profesionale.',
    items: ['Uși metalice, din lemn sau PVC', 'Chei rupte ori blocate în yală', 'Fără deteriorări, când situația permite'],
  },
  {
    title: 'Schimb yale și încuietori',
    image: '/images/service-schimb-yale-480.jpg',
    text: 'Înlocuim cilindri, yale, broaște și încuietori și verificăm funcționarea mecanismului după montaj.',
    items: ['Înlocuire cilindri și yale', 'Soluții pentru diferite tipuri de uși', 'Testarea mecanismului după montaj'],
  },
  {
    title: 'Deschideri seifuri',
    image: '/images/service-deschideri-seifuri-480.jpg',
    text: 'Evaluăm mecanismul și alegem metoda potrivită pentru accesarea seifului în condiții de siguranță.',
    items: ['Seifuri mecanice și electronice', 'Cod uitat sau cheie pierdută', 'Evaluare înainte de intervenție'],
  },
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
  ['Care sunt zonele în care interveniți?', 'Acoperim Cluj-Napoca și localitățile limitrofe. Sună-ne pentru confirmarea rapidă a disponibilității.'],
  ['Ce metode de plată acceptați?', 'Poți plăti numerar sau cu cardul, la finalul intervenției.'],
];

const reviews = [
  { name: 'Andrei Pop', image: '/images/review-andrei.avif', text: 'Am rămas blocat afară din casă și au ajuns în mai puțin de 20 de minute. Profesioniști și foarte amabili. Recomand cu încredere!' },
  { name: 'Ioana M.', image: '/images/review-ioana.avif', text: 'Serviciu rapid și eficient! Au deschis ușa fără să o deterioreze și prețul a fost corect. Mulțumesc!' },
  { name: 'Mihai D.', image: '/images/review-mihai.avif', text: 'Am avut nevoie de schimbare de yală. Echipa a fost serioasă, lucrarea de calitate și garanție oferită. Super mulțumit!' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);
  const [activeSection, setActiveSection] = useState('acasa');
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const sectionIds = ['acasa', 'servicii', 'despre', 'contact'];
    const updateActiveSection = () => {
      const headerOffset = window.innerWidth <= 980 ? 96 : 112;
      let currentSection = 'acasa';

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= headerOffset) currentSection = id;
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) currentSection = 'contact';
      setActiveSection(currentSection);
    };

    updateActiveSection();
    if (window.location.hash) window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const handleNavClick = (event, section) => {
    event.preventDefault();
    setActiveSection(section);
    closeMenu();
    document.getElementById(section)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
  };

  return <>
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo onNavigate={handleNavClick} />
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Navigație principală">
          <a className={activeSection === 'acasa' ? 'active' : ''} href="#acasa" onClick={(event) => handleNavClick(event, 'acasa')}>Acasă</a>
          <a className={activeSection === 'servicii' ? 'active' : ''} href="#servicii" onClick={(event) => handleNavClick(event, 'servicii')}>Servicii</a>
          <a className={activeSection === 'despre' ? 'active' : ''} href="#despre" onClick={(event) => handleNavClick(event, 'despre')}>Despre noi</a>
          <a className={activeSection === 'contact' ? 'active' : ''} href="#contact" onClick={(event) => handleNavClick(event, 'contact')}>Contact</a>
        </nav>
        <a className="header-phone" href="tel:+40742565046"><Icon className="desktop-phone-icon" name="phone" size={18}/><img className="mobile-phone-icon" src="/images/phone-call.png" alt=""/>{phone}</a>
        <button className={menuOpen ? 'menu-button open' : 'menu-button'} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Închide meniul' : 'Deschide meniul'} aria-expanded={menuOpen}>
          <span className="hamburger-icon" aria-hidden="true"><i></i><i></i><i></i></span>
        </button>
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
              <div><span className="trust-image"><img src="/images/clock.png" alt=""/></span><p><b>Intervenție rapidă</b><small>20–30 minute</small></p></div>
              <div><span className="trust-image"><img src="/images/security.png" alt=""/></span><p><b>Fără deteriorări</b><small>100% siguranță</small></p></div>
              <div><span className="trust-image"><img src="/images/price-tag.png" alt=""/></span><p><b>Prețuri corecte</b><small>Fără costuri ascunse</small></p></div>
            </div>
            <div className="hero-actions">
              <a className="button primary" href="tel:+40742565046"><Icon name="phone" size={19}/> Sună acum</a>
              <a className="button whatsapp" href="https://wa.me/40742565046" target="_blank" rel="noreferrer"><img className="whatsapp-icon" src="/images/whatsapp.png" alt=""/> WhatsApp</a>
            </div>
          </div>
          <div className="hero-media media-slot">
            <img src="/images/hero-locksmith.jpg" alt="Tehnician profesionist la o intervenție de deblocare" width="1080" height="675" fetchPriority="high" onError={(e) => e.currentTarget.classList.add('missing')} />
            <span className="image-hint">Adaugă imaginea ta<br/><small>public/images/hero-locksmith.jpg</small></span>
          </div>
        </div>
      </section>

      <section className="feature-bar" aria-label="Avantaje">
        <div className="container feature-grid">{features.map((f) => <div className="feature-item" key={f.title}><Icon name={f.icon} size={42}/><div><strong>{f.title}</strong><p>{f.text}</p></div></div>)}</div>
      </section>

      <section className="section services" id="servicii">
        <div className="container">
          <div className="section-heading"><span>Serviciile noastre</span><h2>Cu ce te putem ajuta</h2></div>
          <div className="service-grid">{services.map((service) => <article className="service-card" key={service.title}>
            {service.image
              ? <img className="service-photo" src={service.image} alt={`Serviciu ${service.title.toLowerCase()}`} width="480" height="320" loading="lazy"/>
              : <div className="service-photo-placeholder" aria-hidden="true"></div>}
            <div className="service-card-content">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>{service.items.map((item) => <li key={item}><Icon name="check" size={15} strokeWidth={3}/><span>{item}</span></li>)}</ul>
              <a href="tel:+40742565046">Solicită intervenție <Icon name="arrow" size={16}/></a>
            </div>
          </article>)}</div>
        </div>
      </section>

      <section className="about" id="despre">
        <div className="container about-grid">
          <div className="about-copy">
            <span className="section-kicker">Despre noi</span><h2>De ce să ne alegi?</h2>
            <p>Suntem o echipă locală din Cluj-Napoca, cu experiență și mii de intervenții reușite. Punem accent pe seriozitate, promptitudine și respect față de clienții noștri.</p>
            <div className="reasons">{reasons.map(([title, text]) => <div key={title}><span><Icon name="check" size={15} strokeWidth={3}/></span><p><b>{title}</b><small>{text}</small></p></div>)}</div>
          </div>
          <div className="about-media media-slot">
            <img src="/images/cluj-night-optimized.jpg" alt="Panoramă nocturnă a orașului Cluj-Napoca" width="1000" height="664" loading="lazy" onError={(e) => e.currentTarget.classList.add('missing')} />
            <span className="image-hint">Adaugă imaginea ta<br/><small>public/images/cluj-night.jpg</small></span>
          </div>
        </div>
      </section>

      <section className="section reviews-section" aria-labelledby="reviews-title">
        <div className="container">
          <div className="section-heading reviews-heading">
            <span>Ce spun clienții noștri</span>
            <h2 id="reviews-title">Recenzii</h2>
            <div className="overall-stars" aria-label="Evaluare 5 din 5">★★★★★</div>
          </div>
          <div className="reviews-grid">
            {reviews.map((review) => <article className="review-card" key={review.name}>
              <div className="review-top">
                <img className="review-avatar" src={review.image} alt={`Fotografie ${review.name}`} width="48" height="48" loading="lazy" />
                <div className="review-author"><h3>{review.name}</h3><span className="review-stars" aria-label="5 din 5 stele">★★★★★</span></div>
                <img className="google-mark" src="/images/google-logo.png" alt="Google" width="24" height="24" />
              </div>
              <p>{review.text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-heading"><span>Întrebări frecvente</span><h2>Răspunsuri la întrebările tale</h2></div>
          <div className="faq-grid">{faqs.map(([question, answer], i) => <div className={openFaq === i ? 'faq-item expanded' : 'faq-item'} key={question}>
            <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i} aria-controls={`faq-answer-${i}`}>
              <span>{question}</span><Icon className="faq-chevron" name="chevron" size={18} strokeWidth={2.6}/>
            </button>
            <div className="faq-answer" id={`faq-answer-${i}`} role="region" aria-hidden={openFaq !== i}><p>{answer}</p></div>
          </div>)}</div>
        </div>
      </section>

      <section className="location-section" id="contact">
        <div className="container">
          <div className="section-heading"><span>Contact și acoperire</span><h2>Suntem aproape de tine</h2></div>
          <div className="location-grid">
            <div className="location-details">
              <article className="location-card">
                <span className="location-icon"><Icon name="phone" size={22}/></span>
                <div><h3>Telefon non-stop</h3><a href="tel:+40742565046">{phone}</a><p>Disponibili 24/7 pentru urgențe</p></div>
              </article>
              <article className="location-card">
                <span className="location-icon"><Icon name="mail" size={22}/></span>
                <div><h3>Email</h3><a href="mailto:contact@xn--cheie-locuin-9nb330b.ro">contact@cheie-locuință.ro</a><p>Răspundem cât mai rapid solicitărilor</p></div>
              </article>
              <article className="location-card">
                <span className="location-icon"><Icon name="map" size={22}/></span>
                <div><h3>Locație</h3><strong>Cluj-Napoca</strong><p>Acoperim orașul și localitățile învecinate</p></div>
              </article>
              <article className="location-card">
                <span className="location-icon"><Icon name="clock" size={22}/></span>
                <div><h3>Program</h3><strong>24/7 non-stop</strong><p>Inclusiv în weekend și de sărbători</p></div>
              </article>
            </div>
            <div className="map-panel">
              <iframe
                title="Hartă Cluj-Napoca"
                src="https://www.google.com/maps?q=Cluj-Napoca%2C%20Romania&z=11&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
              <div className="coverage-note">
                <span><Icon name="map" size={24}/></span>
                <div><h3>Acoperim întreg orașul</h3><p>Intervenții rapide în oraș și în localitățile din împrejurimi.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div className="container footer-grid">
        <div className="contact-copy">
          <span className="section-kicker">Contact</span><h2>Sună-ne sau scrie-ne!</h2><p>Suntem disponibili 24/7 și gata să te ajutăm.<br/>Contactează-ne și vom ajunge la tine cât mai rapid!</p>
        </div>
        <nav className="footer-links" aria-label="Linkuri rapide">
          <h3>Link-uri rapide</h3>
          <a href="#acasa" onClick={(event) => handleNavClick(event, 'acasa')}>Acasă</a>
          <a href="#servicii" onClick={(event) => handleNavClick(event, 'servicii')}>Servicii</a>
          <a href="#despre" onClick={(event) => handleNavClick(event, 'despre')}>Despre noi</a>
          <a href="#contact" onClick={(event) => handleNavClick(event, 'contact')}>Contact</a>
        </nav>
        <div className="footer-contact">
          <h3>Contact</h3>
          <div className="contact-list">
            <a href="tel:+40742565046"><span><Icon name="phone" size={15}/></span>{phone}</a>
            <a href="mailto:contact@xn--cheie-locuin-9nb330b.ro"><span><Icon name="mail" size={15}/></span>contact@cheie-locuință.ro</a>
            <p><span><Icon name="map" size={15}/></span>Cluj-Napoca și împrejurimi</p>
          </div>
        </div>
      </div>
      <div className="container footer-bottom"><p>© 2026 Deblocări Uși Cluj. Toate drepturile rezervate.</p></div>
    </footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
