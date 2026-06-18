'use client';
import { useState } from 'react';

const prompts = [
  {
    title: 'Базовый агент',
    text: 'You are an AI agent that helps users find information about AI agents. Respond concisely and ask clarifying questions when needed.',
  },
  {
    title: 'План проекта',
    text: 'Create a step‑by‑step plan to build a simple AI chatbot using LangChain and OpenAI API. Include setup, code structure, and testing.',
  },
  {
    title: 'Отладка кода',
    text: 'Given the following Python code for an AI agent, identify and fix any bugs, and suggest improvements.',
  },
];

function PromptCard({ title, text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card prompt-card">
      <h2 className="text-h3" style={{ marginBottom: 8 }}>{title}</h2>
      <pre className="text-code">{text}</pre>
      <div className="prompt-actions">
        <button className="btn btn-ghost" onClick={handleCopy}>
          {copied ? '✓ Скопировано' : 'Скопировать'}
        </button>
      </div>
    </div>
  );
}

export default function PromptsPage() {
  return (
    <section className="container" style={{ paddingTop: 'clamp(32px, 5vw, 64px)' }}>
      <h1 className="text-hero" style={{ marginBottom: 16 }}>Промты</h1>
      <p className="text-body" style={{ maxWidth: 480, marginBottom: 'var(--space-xl)' }}>
        Готовые запросы для практических заданий. Скопируйте и используйте в своём проекте.
      </p>
      {prompts.map((p, i) => (
        <PromptCard key={i} {...p} />
      ))}
    </section>
  );
}
