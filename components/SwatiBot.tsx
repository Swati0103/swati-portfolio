'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { botKnowledge, botSuggestions } from '@/lib/data';

type Msg = { id: number; who: 'bot' | 'user'; html: string; typing?: boolean };

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Scores each intent by keyword hits; short keys must match a whole word. */
function answer(q: string) {
  const s = q.toLowerCase();
  let best: string | null = null, score = 0;
  for (const item of botKnowledge) {
    const sc = item.keys.reduce(
      (n, k) => n + (k.length <= 3 ? Number(new RegExp(`\\b${k}\\b`).test(s)) : Number(s.includes(k))),
      0,
    );
    if (sc > score) { score = sc; best = item.answer; }
  }
  return best ?? "Good question! 🤔 I'm a small assistant, so try asking about <b>skills</b>, <b>projects</b>, <b>experience</b>, <b>AI</b> or <b>contact</b>, or email Swati directly.";
}

export default function SwatiBot() {
  const [msgs, setMsgs] = useState<Msg[]>([
    { id: 0, who: 'bot', html: "Hi! 🐦 I'm <b>SwatiBot</b>. Ask me anything about Swati's Flutter journey." },
  ]);
  const [input, setInput] = useState('');
  const logRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(1);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: 'smooth' });
  }, [msgs]);

  const ask = (q: string) => {
    if (!q.trim()) return;
    const userId = idRef.current++, botId = idRef.current++;
    setMsgs((m) => [...m, { id: userId, who: 'user', html: escapeHtml(q) }, { id: botId, who: 'bot', html: '', typing: true }]);
    setTimeout(() => {
      setMsgs((m) => m.map((x) => (x.id === botId ? { ...x, html: answer(q), typing: false } : x)));
    }, 700 + Math.random() * 500);
  };

  const onSubmit = (e: FormEvent) => { e.preventDefault(); ask(input); setInput(''); };

  return (
    <div className="card chatbot">
      <div className="chat-intro">
        <h3>🐦 Ask <span className="grad-text">SwatiBot</span></h3>
        <p>A small assistant built into this page. It answers questions about my experience and skills from my CV, entirely in your browser.</p>
        <div className="suggest">
          {botSuggestions.map((s) => <button key={s} onClick={() => ask(s)}>{s}</button>)}
        </div>
      </div>
      <div className="chat-box">
        <div className="chat-log" ref={logRef}>
          {msgs.map((m) =>
            m.typing ? (
              <div key={m.id} className="msg bot"><span className="typing"><span /><span /><span /></span></div>
            ) : (
              <div key={m.id} className={`msg ${m.who}`} dangerouslySetInnerHTML={{ __html: m.html }} />
            ),
          )}
        </div>
        <form className="chat-input" onSubmit={onSubmit}>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about skills, projects, experience…" autoComplete="off" />
          <button className="btn btn-primary" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
