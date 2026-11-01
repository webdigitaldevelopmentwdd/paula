'use client';

import { useState } from 'react';
import { chatReplies } from '@/lib/translations';

// Guided enquiry assistant (front-end demo; no live AI backend)
const OPTIONS: { key: string; label: string }[] = [
  { key: 'destination', label: 'Wedding destinations' },
  { key: 'style', label: 'Creative direction & style' },
  { key: 'date', label: 'Dates, guests & planning' },
  { key: 'contact', label: 'Speak with the team' },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState('');

  return (
    <>
      <button
        className="chat-launch chat-icon-only"
        id="chatLaunch"
        aria-label="Open wedding assistant"
        aria-expanded={open}
        title="Chat with Eclesare"
        onClick={() => setOpen((o) => !o)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l-2 2v-5.5A7.5 7.5 0 1 1 20 11.5Z" />
          <path d="M8 10h8M8 13.5h5" />
        </svg>
      </button>
      <div className={`chat-panel${open ? ' open' : ''}`} id="chatPanel" role="dialog" aria-label="Wedding enquiry assistant">
        <div className="chat-head">
          <strong>Eclesare Assistant</strong>
          <button id="chatClose" aria-label="Close chat" onClick={() => setOpen(false)}>×</button>
        </div>
        <div className="chat-body">
          <p id="chatPrompt">Welcome. What would you like to explore first?</p>
          <div className="chat-options">
            {OPTIONS.map((o) => (
              <button key={o.key} onClick={() => setResponse(chatReplies[o.key])}>{o.label}</button>
            ))}
          </div>
          <div className="chat-response" id="chatResponse" aria-live="polite">{response}</div>
        </div>
      </div>
    </>
  );
}
