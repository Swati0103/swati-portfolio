'use client';

import { useEffect, useState } from 'react';

/** Typewriter that types, pauses, deletes and cycles through `words`. */
export default function TypedText({ words }: { words: string[] }) {
  const [text, setText] = useState('');

  useEffect(() => {
    let i = 0, j = 0, deleting = false;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[i];
      setText(word.slice(0, j));
      if (!deleting && j === word.length) { deleting = true; timer = setTimeout(tick, 1600); return; }
      if (deleting && j === 0) { deleting = false; i = (i + 1) % words.length; }
      j += deleting ? -1 : 1;
      timer = setTimeout(tick, deleting ? 35 : 70);
    };
    tick();
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <>
      <span className="typed">{text}</span>
      <span className="caret" />
    </>
  );
}
