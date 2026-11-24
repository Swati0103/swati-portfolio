'use client';

import { useState } from 'react';

export default function CopyEmail({ email }: { email: string }) {
  const [show, setShow] = useState(false);

  const copy = async () => {
    try { await navigator.clipboard.writeText(email); } catch {}
    setShow(true);
    setTimeout(() => setShow(false), 1800);
  };

  return (
    <>
      <button className="btn btn-ghost" onClick={copy}>📋 Copy email</button>
      <div className={`toast ${show ? 'show' : ''}`} role="status">Email copied! ✨</div>
    </>
  );
}
