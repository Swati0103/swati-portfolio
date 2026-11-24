import Nav from '@/components/Nav';
import SkyBackground from '@/components/SkyBackground';
import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';
import TypedText from '@/components/TypedText';
import SkillCard from '@/components/SkillCard';
import Projects from '@/components/Projects';
import SwatiBot from '@/components/SwatiBot';
import CopyEmail from '@/components/CopyEmail';
import HeroVisual from '@/components/HeroVisual';
import TechIcon from '@/components/TechIcon';
import {
  aiCards, education, experience, facts, marqueeItems, profile, services, skillGroups, snapshot, stats, typedRoles,
} from '@/lib/data';

/** Renders **bold** segments from the data file. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith('**') ? <b key={i}>{part.slice(2, -2)}</b> : part,
      )}
    </>
  );
}

function SectionHeader({ eyebrow, title, highlight, sub }: { eyebrow: string; title: string; highlight: string; sub?: string }) {
  return (
    <>
      <Reveal className="eyebrow">{eyebrow}</Reveal>
      <Reveal as="h2" className="section-title">{title} <span className="grad-text">{highlight}</span></Reveal>
      {sub && <Reveal as="p" className="section-sub">{sub}</Reveal>}
    </>
  );
}

export default function Home() {
  return (
    <>
      <SkyBackground />
      <Nav />

      <main>
        {/* ================= HERO ================= */}
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div>
              <Reveal className="badge"><span className="pulse" /> Available for Flutter roles · Remote / Relocation</Reveal>
              <Reveal as="h1" delay={80}>
                Hi, I&apos;m <span className="grad-text">{profile.name}</span> <span className="wave">👋</span>
              </Reveal>
              <Reveal as="p" className="hero-title" delay={120}>
                Flutter & FlutterFlow Developer · Android & iOS
              </Reveal>
              <Reveal className="typed-line" delay={160}>I build <TypedText words={typedRoles} /></Reveal>
              <Reveal as="p" className="lead" delay={240}>
                ~3 years shipping production apps for <b>healthcare, ed-tech, food delivery, ride-hailing</b> and
                <b> social</b>, with clean architecture, Riverpod/BLoC state management and secure API integration.
              </Reveal>
              <Reveal className="btn-row" delay={320}>
                <a href={profile.cvUrl} className="btn btn-primary" download={profile.cvFileName}>📄 Download CV</a>
                <a href="#projects" className="btn btn-ghost">🚀 View projects</a>
                <a href="#contact" className="btn btn-ghost">✉️ Contact me</a>
              </Reveal>
              <Reveal className="hero-proof" delay={400}>
                <div><b>3 yrs</b><span>experience</span></div>
                <div><b>8+</b><span>apps built</span></div>
                <div><b>3</b><span>companies</span></div>
                <div><b>2</b><span>platforms</span></div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <HeroVisual />
            </Reveal>
          </div>
          <div className="scroll-hint" />
        </section>

        {/* ================= RECRUITER SNAPSHOT ================= */}
        <section id="snapshot" className="snapshot-section">
          <div className="container">
            <Reveal className="card snapshot">
              <div className="snapshot-head">
                <div>
                  <div className="eyebrow">tl;dr — for recruiters</div>
                  <h2>Profile at a glance</h2>
                </div>
                <a href={profile.cvUrl} download={profile.cvFileName} className="btn btn-primary">⬇ Full CV (PDF)</a>
              </div>
              <div className="snapshot-grid">
                {snapshot.map((s) => (
                  <div key={s.label} className="snap-item">
                    <span className="snap-ico">{s.icon}</span>
                    <div><small>{s.label}</small><b>{s.value}</b></div>
                  </div>
                ))}
              </div>
              <div className="stats">
                {stats.map((s) => (
                  <div key={s.label} className="stat">
                    <div className="num grad-text"><Counter value={s.value} suffix={s.suffix} /></div>
                    <div className="label">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= WHAT I BRING ================= */}
        <section id="services">
          <div className="container">
            <SectionHeader
              eyebrow="value.toTeam()"
              title="What I"
              highlight="bring to your team"
              sub="Four things I can take on from day one."
            />
            <div className="services-grid">
              {services.map((s, i) => (
                <Reveal key={s.title} className="card service" delay={i * 80}>
                  <div className="service-ico"><TechIcon name={s.icon} size={30} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about">
          <div className="container about-grid">
            <Reveal className="about-code">
              <div className="card code-window">
                <div className="code-head">
                  <span className="dot" style={{ background: '#FF5F57' }} />
                  <span className="dot" style={{ background: '#FEBC2E' }} />
                  <span className="dot" style={{ background: '#28C840' }} />
                  <span className="file">lib/developer.dart</span>
                </div>
                <pre className="code">
<span className="k">class</span> <span className="c">SwatiSingh</span> <span className="k">extends</span> <span className="c">StatelessWidget</span> {'{'}{'\n'}
{'  '}<span className="k">final</span> role = <span className="s">&apos;Flutter &amp; FlutterFlow Dev&apos;</span>;{'\n'}
{'  '}<span className="k">final</span> experience = <span className="p">3</span>; <span className="cm">{'// years & growing'}</span>{'\n'}
{'  '}<span className="k">final</span> stack = [<span className="s">&apos;Dart&apos;</span>, <span className="s">&apos;Riverpod&apos;</span>, <span className="s">&apos;BLoC&apos;</span>,{'\n'}
{'                 '}<span className="s">&apos;Firebase&apos;</span>, <span className="s">&apos;Supabase&apos;</span>];{'\n'}
{'\n'}
{'  '}<span className="cm">@override</span>{'\n'}
{'  '}<span className="c">Widget</span> <span className="f">build</span>(<span className="c">BuildContext</span> context) {'{'}{'\n'}
{'    '}<span className="k">return</span> <span className="c">CleanArchitecture</span>({'\n'}
{'      '}ui: <span className="c">PixelPerfect</span>(animated: <span className="k">true</span>),{'\n'}
{'      '}api: <span className="c">Dio</span>(secure: <span className="k">true</span>),{'\n'}
{'      '}shipTo: [<span className="c">Platform</span>.android, <span className="c">Platform</span>.iOS],{'\n'}
{'    '});{'\n'}
{'  }'}{'\n'}
{'}'}
                </pre>
              </div>
            </Reveal>
            <Reveal className="about-text" delay={120}>
              <div className="eyebrow">about_me.dart</div>
              <h2 className="section-title">Turning ideas into <span className="grad-text">smooth, scalable apps</span></h2>
              <p>
                I&apos;m a <strong>Flutter & FlutterFlow developer</strong> and a <strong>B.Tech Computer Science</strong> graduate
                from Government Women&apos;s Engineering College, Ajmer. Since December 2023 I&apos;ve built production apps across{' '}
                <strong>healthcare, ed-tech, food delivery, ride-hailing and dating</strong>.
              </p>
              <p>
                My work centres on <strong>clean architecture</strong> (data → domain → presentation), state management with{' '}
                <strong>Riverpod, BLoC and Provider</strong>, secure REST/GraphQL integration, and animations built with{' '}
                <strong>Rive & Lottie</strong>. At <strong>Arixlabs</strong> I combine FlutterFlow with custom Dart code and a{' '}
                <strong>Supabase</strong> backend, and use <strong>AI-assisted tooling</strong> to ship faster.
              </p>
              <div className="facts">
                {facts.map((f) => (
                  <div key={f.title} className="card fact">
                    <span className="ico">{f.icon}</span>
                    <div><b>{f.title}</b><small>{f.sub}</small></div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section id="experience">
          <div className="container">
            <SectionHeader
              eyebrow="career.timeline()"
              title="Work"
              highlight="Experience"
              sub="Three companies so far, and at each one I've taken on more ownership of the architecture and how the product feels to use."
            />
            <div className="timeline">
              {experience.map((job) => (
                <Reveal key={job.company} className={`card t-item ${job.current ? 'current' : ''}`}>
                  <div className="t-head">
                    <h3>{job.company} {job.current && <span className="now-pill">Current</span>}</h3>
                    <span className="pill-date">{job.period}</span>
                  </div>
                  <div className="t-role">{job.role}</div>
                  <ul>{job.points.map((pt) => <li key={pt}><Rich text={pt} /></li>)}</ul>
                  <div className="chips">{job.stack.map((s) => <span key={s} className="chip">{s}</span>)}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects">
          <div className="container">
            <SectionHeader
              eyebrow="projects.where((p) => p.shipped)"
              title="Featured"
              highlight="Projects"
              sub="Apps across health, education, food, mobility and social, each built with an architecture that can grow with the product."
            />
            <Projects />
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills">
          <div className="container">
            <SectionHeader
              eyebrow="skills.map((s) => s.master())"
              title="Skills &"
              highlight="Toolbox"
              sub="The tools I use to take an app from idea to the Play Store and App Store."
            />
            <div className="skills-grid">
              {skillGroups.map((g, i) => <SkillCard key={g.title} {...g} delay={(i % 3) * 80} />)}
            </div>
            <div className="marquee">
              <div className="marquee-track">
                {[...marqueeItems, ...marqueeItems].map((t, i) => <span key={i}>{t}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* ================= AI ================= */}
        <section id="ai">
          <div className="container">
            <SectionHeader
              eyebrow="ai.assist(developer: swati)"
              title="How I use"
              highlight="AI"
              sub="AI is part of my day-to-day toolkit. It helps me ship faster and catch problems earlier, and I review everything it produces."
            />
            <div className="ai-grid">
              {aiCards.map((c, i) => (
                <Reveal key={c.title} className="card ai-card" delay={i * 80}>
                  <div className="emoji">{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </Reveal>
              ))}
            </div>
            <Reveal><SwatiBot /></Reveal>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}
        <section id="education">
          <div className="container">
            <Reveal className="eyebrow">education.load()</Reveal>
            <Reveal as="h2" className="section-title"><span className="grad-text">Education</span></Reveal>
            <div className="edu-grid">
              {education.map((e, i) => (
                <Reveal key={e.title} className="card edu" delay={i * 100}>
                  <div className="edu-ico">{e.icon}</div>
                  <div>
                    <h3>{e.title}</h3>
                    <p>{e.place}</p>
                    <span className="pill-date">{e.meta}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact">
          <div className="container">
            <Reveal className="card contact-card">
              <div className="eyebrow">contact.send()</div>
              <h2>Let&apos;s build something <span className="grad-text">beautiful</span> together</h2>
              <p>Hiring for a Flutter role, or have a FlutterFlow project? My inbox is always open.</p>
              <div className="contact-links">
                <a className="btn btn-primary" href={`mailto:${profile.email}`}>✉️ {profile.email}</a>
                <a className="btn btn-ghost" href={`tel:${profile.phoneHref}`}>📞 {profile.phone}</a>
                <a className="btn btn-ghost" href={profile.cvUrl} download={profile.cvFileName}>📄 Download CV</a>
                <CopyEmail email={profile.email} />
                {profile.linkedin && <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">💼 LinkedIn</a>}
                {profile.github && <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">🐙 GitHub</a>}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
