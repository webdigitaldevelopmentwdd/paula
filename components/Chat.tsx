'use client';

import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react';
import { CONFIG, waLink } from '@/lib/config';
import { prefersReducedMotion, useLang } from '@/lib/lang';
import type { ChatAnswers } from './useEnquiry';

const STEPS = ['dest', 'date', 'guests', 'contact'] as const;

type Msg = { from: 'bot' | 'me'; text: string };

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  bubbleHidden: boolean;
  hideBubble: () => void;
  onPrefill: (answers: ChatAnswers, summary: string) => void;
};

/* Guided enquiry: a scripted four-question form in a chat window — not an AI. */
export function Chat({ open, setOpen, bubbleHidden, hideBubble, onPrefill }: Props) {
  const { t, ta, lang } = useLang();
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [step, setStep] = useState(0);
  const [busy, setBusy] = useState(false);
  const [draft, setDraft] = useState('');
  const answers = useRef<ChatAnswers>({});
  const timer = useRef<number | null>(null);
  const log = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const launcher = useRef<HTMLButtonElement>(null);
  const first = useRef(true);

  const stepText = (n: number) =>
    n === 0 ? t('bot.greet') : n === 1 ? t('bot.q.date') : n === 2 ? t('bot.q.guests') : t('bot.q.name');

  const summary = useCallback(
    () =>
      [
        t('bot.l.dest') + ': ' + (answers.current.dest || '—'),
        t('bot.l.date') + ': ' + (answers.current.date || '—'),
        t('bot.l.guests') + ': ' + (answers.current.guests || '—'),
        t('bot.l.contact') + ': ' + (answers.current.contact || '—'),
      ].join('\n'),
    [t],
  );

  /* start (and restart on a language change) with the greeting */
  const reset = useCallback(() => {
    if (timer.current) window.clearTimeout(timer.current);
    answers.current = {};
    setStep(0);
    setBusy(false);
    setMsgs([{ from: 'bot', text: t('bot.greet') }]);
  }, [t]);

  useEffect(() => {
    reset();
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => () => { if (timer.current) window.clearTimeout(timer.current); }, []);

  useEffect(() => {
    if (log.current) log.current.scrollTop = log.current.scrollHeight;
  }, [msgs, busy]);

  /* focus: into the field on open, back to the launcher on close */
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    if (open) {
      const id = window.setTimeout(() => input.current?.focus(), 180);
      return () => window.clearTimeout(id);
    }
    launcher.current?.focus();
  }, [open]);

  const answer = (value: string) => {
    const text = value.trim();
    if (!text || busy || step >= STEPS.length) return;
    setMsgs((m) => [...m, { from: 'me', text }]);
    answers.current = { ...answers.current, [STEPS[step]]: text };
    const next = step + 1;
    setStep(next);
    setBusy(true);
    timer.current = window.setTimeout(() => {
      setBusy(false);
      if (next < STEPS.length) {
        setMsgs((m) => [...m, { from: 'bot', text: stepText(next) }]);
      } else {
        setMsgs((m) => [...m, { from: 'bot', text: t('bot.done') }, { from: 'bot', text: summary() }, { from: 'bot', text: t('bot.hand') }]);
      }
    }, prefersReducedMotion() ? 0 : 520);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const v = draft.trim();
    if (!v) return;
    setDraft('');
    answer(v);
  };

  const finished = step >= STEPS.length && !busy;
  const options = step === 0 ? ta('bot.a.dest') : step === 1 ? ta('bot.a.date') : step === 2 ? ta('bot.a.guests') : [];

  return (
    <>
      <div className="bubble" hidden={bubbleHidden}>
        <span>{t('bot.bubble')}</span>
        <button type="button" className="bubble-x" aria-label="Dismiss" onClick={hideBubble}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
      </div>

      <button ref={launcher} type="button" className={`launcher${open ? ' is-off' : ''}`} aria-expanded={open ? 'true' : 'false'} aria-controls="chat" onClick={() => setOpen(true)}>
        <span className="avatar" aria-hidden="true">
          <svg viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="24" fill="#EFE2D2" />
            <path d="M24 9c6 0 10 4 10 10 0 1.6-.3 3.3-.8 4.7l1.3.7c.7.4.9 1.3.4 1.9l-2.3 3a11 11 0 0 1-17.2 0l-2.3-3c-.5-.6-.3-1.5.4-1.9l1.3-.7A14 14 0 0 1 14 19c0-6 4-10 10-10Z" fill="#49302C" opacity=".12" />
            <path d="M14.5 20.5c0-5.8 4-9.5 9.5-9.5s9.5 3.7 9.5 9.5v3.2c0 5.2-4.3 9.3-9.5 9.3s-9.5-4.1-9.5-9.3v-3.2Z" fill="#F6E7D7" />
            <path d="M14 21c0-6 4.4-10 10-10s10 4 10 10c0 .9-.1 1.8-.3 2.6-.6-3-1.6-4.9-3-5.9-1.6 1.6-4.6 2.4-9 2.4-1.9 0-3.3.6-4.2 1.9-.6.9-1 2-1.2 3.3-.2-1.3-.3-2.8-.3-4.3Z" fill="#49302C" />
            <circle cx="20.3" cy="23.2" r="1.05" fill="#49302C" />
            <circle cx="27.7" cy="23.2" r="1.05" fill="#49302C" />
            <path d="M21.6 27.3c1.4 1.1 3.4 1.1 4.8 0" fill="none" stroke="#49302C" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M8 48c1.4-7.6 7.8-11.8 16-11.8S38.6 40.4 40 48H8Z" fill="#9A6B66" />
            <path d="M20.6 36.6h6.8l-3.4 5-3.4-5Z" fill="#F6E7D7" />
          </svg>
        </span>
        <span className="launcher-text">{t('bot.launch')}</span>
      </button>

      <div className="chat" id="chat" role="dialog" aria-modal="false" aria-labelledby="chatTitle" hidden={!open}>
        <div className="chat-head">
          <div>
            <p className="chat-title" id="chatTitle">{t('bot.title')}</p>
            <p className="chat-sub">{t('bot.sub')}</p>
          </div>
          <button type="button" className="x" aria-label="Close" onClick={() => setOpen(false)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="chat-log" ref={log}>
          {msgs.map((m, i) => (
            <p key={i} className={`msg msg--${m.from}`}>{m.text}</p>
          ))}
          {busy && (
            <div className="msg msg--bot dots3"><i></i><i></i><i></i></div>
          )}
        </div>

        <div className="chat-quick">
          {finished ? (
            <>
              {CONFIG.whatsapp && (
                <button type="button" onClick={() => window.open(waLink('Eclesare enquiry\n' + summary()), '_blank', 'noopener')}>{t('bot.wa')}</button>
              )}
              {CONFIG.email && (
                <button
                  type="button"
                  onClick={() => {
                    window.location.href = 'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent('Eclesare enquiry') + '&body=' + encodeURIComponent(summary());
                  }}
                >
                  {t('bot.mail')}
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  onPrefill(answers.current, summary());
                  setOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
                }}
              >
                {t('bot.form')}
              </button>
              <button type="button" onClick={reset}>{t('bot.restart')}</button>
            </>
          ) : (
            options.map((label) => (
              <button key={label} type="button" onClick={() => answer(label)}>{label}</button>
            ))
          )}
        </div>

        <form className="chat-form" onSubmit={onSubmit}>
          <input ref={input} type="text" placeholder={t('bot.ph')} autoComplete="off" aria-label="Your answer" value={draft} onChange={(e) => setDraft(e.target.value)} />
          <button type="submit" aria-label="Send">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
          </button>
        </form>
      </div>
    </>
  );
}
