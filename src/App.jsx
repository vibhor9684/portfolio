import { useEffect } from 'react';
import { ArrowDownRight, ArrowUpRight, Braces, Code2, Database, Layout, Mail, Radar, Server, Wrench } from 'lucide-react';

const Github = ArrowUpRight;
const Linkedin = ArrowUpRight;

const socials = [
  { label: 'GitHub', href: 'https://github.com/vibhor9684', icon: Braces },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vibhor9684/', icon: Layout },
  { label: 'LeetCode', href: 'https://leetcode.com/u/vibhor9684/', icon: Code2 },
];

const skills = [
  ['Languages', 'Java', Code2],
  ['DSA', 'Arrays · Linked Lists · Trees · Graphs · Sorting · Searching · LeetCode', Braces],
  ['Backend', 'Spring Boot · Spring Core · JPA · Hibernate · REST · Security', Server],
  ['Frontend', 'React · HTML/CSS/JS · Tailwind CSS', Layout],
  ['Database', 'MySQL', Database],
  ['Tools', 'Git/GitHub · Maven · Docker · Kubernetes · Postman · IntelliJ IDEA', Wrench],
  ['Exploring', 'Redis · Kafka · AWS · System Design fundamentals', Radar],
];

function SocialLinks() {
  return <div className="social-links" aria-label="Social links">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer"><span className="social-icon"><Icon size={16} /></span><span>{label}</span><ArrowUpRight className="link-arrow" size={14} /></a>)}</div>;
}

function Header() {
  return <header className="topbar"><a className="brand" href="#top" aria-label="Vibhor Patel home"><span className="brand-mark">VP</span><span>Vibhor Patel</span></a><nav aria-label="Main navigation"><a href="#about">About</a><a href="#skills">Skills</a><a href="#education">Education</a></nav><a className="header-cta" href="mailto:vibhor9684@gmail.com">Let's connect <ArrowUpRight size={14} /></a></header>;
}

function ProfileVisual() {
  return <div className="hero-visual" aria-label="Vibhor Pate developer profile"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="profile-core"><div className="core-top"><span>PROFILE / SRM KTR</span><span className="pulse-line" /></div><div className="portrait-placeholder">VP</div><div className="core-bottom"><strong>JAVA</strong><strong>FULL-STACK</strong></div></div><div className="floating-note note-top"><span>01</span><span>build<br />with intent</span></div><div className="floating-note note-bottom"><span>02</span><span>scale<br />with calm</span></div></div>;
}

function Skills() {
  return <section className="stack section-wrap" id="skills"><div className="stack-intro reveal"><p className="eyebrow">The toolkit / always learning</p><h2>Tools for<br /><em>building well.</em></h2><p>I enjoy solving problems from data structures to deployment, with a focus on code that is clear, secure, and ready to grow.</p></div><div className="stack-list reveal">{skills.map(([name, items, Icon], index) => <div className="stack-row" key={name}><span className="stack-number">{String(index + 1).padStart(2, '0')}</span><strong>{name}</strong><span className="stack-items">{items}</span><Icon size={15} /></div>)}</div></section>;
}

function Education() {
  return <section className="education section-wrap" id="education"><div className="education-heading reveal"><p className="eyebrow">Education / 01—02</p><h2>Learning is<br /><em>part of the work.</em></h2></div><div className="education-list reveal"><article><span>01</span><div><p className="project-type">CURRENTLY PURSUING</p><h3>Master of Computer Applications</h3><p>SRM Institute of Science and Technology, Kattankulathur, Chennai</p></div><strong>MCA</strong></article><article><span>02</span><div><p className="project-type">COMPLETED</p><h3>Bachelor of Computer Applications</h3><p>BCA graduate from Barkatullah University with a foundation in programming and software development.</p></div><strong>BCA</strong></article></div></section>;
}

function App() {
  useEffect(() => { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 }); document.querySelectorAll('.reveal').forEach((element) => observer.observe(element)); return () => observer.disconnect(); }, []);

  return <><div className="site-noise" aria-hidden="true" /><Header /><main id="top"><section className="hero section-wrap"><div className="hero-copy reveal"><p className="eyebrow"><span className="status-dot" /> Java Full Stack Developer</p><h1>Building the<br /><em>future</em> with<br />clean code.</h1><p className="hero-intro">I'm Vibhor Patel, a BCA graduate and MCA student at SRM KTR, Chennai, focused on building reliable full-stack applications with Java and Spring Boot.</p><div className="hero-actions"><a className="button button-primary" href="#about">Discover more <ArrowDownRight size={14} /></a><a className="text-link" href="mailto:vibhor9684@gmail.com">Say hello <ArrowUpRight size={14} /></a></div><SocialLinks /></div><ProfileVisual /></section><section className="about section-wrap" id="about"><div className="about-number">01</div><div className="about-copy reveal"><p className="eyebrow">A little context</p><h2>Curious by nature.<br /><em>Focused by practice.</em></h2><p>I'm a BCA graduate currently pursuing my MCA at SRM KTR, Chennai. I'm passionate about Java Full Stack development, problem solving, and learning how reliable software systems are designed. My goal is to grow into a strong software engineer who builds useful products and contributes to thoughtful engineering teams.</p><a className="button button-outline" href="mailto:vibhor9684@gmail.com">Start a conversation <ArrowUpRight size={14} /></a></div><div className="about-stat reveal"><span>01</span><strong>JAVA FIRST</strong><small>Full stack development</small><span>02</span><strong>LEARNING DAILY</strong><small>LeetCode + system design</small><span>03</span><strong>CAREER GOAL</strong><small>Build useful, reliable software</small></div></section><Skills /><Education /><section className="contact section-wrap" id="contact"><div className="contact-top"><p className="eyebrow">Let's connect</p><span className="contact-mark">↘</span></div><h2 className="reveal">Let's build<br /><em>something useful.</em></h2><p className="contact-copy">I am open to conversations about internships, entry-level opportunities, collaborations, and interesting problems.</p><div className="contact-links"><a className="contact-email" href="mailto:vibhor9684@gmail.com"><Mail size={15} /> vibhor9684@gmail.com <ArrowUpRight size={13} /></a><a className="contact-email" href="https://www.linkedin.com/in/vibhor9684/" target="_blank" rel="noreferrer"><Layout size={15} /> LinkedIn <ArrowUpRight size={13} /></a><a className="contact-email" href="https://github.com/vibhor9684" target="_blank" rel="noreferrer"><Braces size={15} /> GitHub <ArrowUpRight size={13} /></a></div></section></main><footer className="footer section-wrap"><span>© 2026 VIBHOR PATEL</span><span>JAVA · REACT · SPRING BOOT</span><div className="footer-links"><a href="https://github.com/vibhor9684" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/in/vibhor9684/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a></div></footer></>;
}

export default App;
