'use client';
import { useState } from 'react';

const tools = [
  {
    name: 'Python',
    cmd: `python3 -m venv .venv\nsource .venv/bin/activate\npip install -r requirements.txt`,
  },
  {
    name: 'Docker',
    cmd: `docker pull python:3.11-slim\ndocker run -it --rm -v $(pwd):/app python:3.11-slim bash`,
  },
  {
    name: 'LangChain',
    cmd: `pip install langchain openai`,
  },
];

function ToolCard({ name, cmd }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card tool-card">
      <div className="code-header">
        <h3 className="text-h4" style={{ margin: 0 }}>{name}</h3>
        <button className={`copy-btn${copied ? ' copied' : ''}`} onClick={handleCopy}>
          {copied ? '✓ Скопировано' : 'Копировать'}
        </button>
      </div>
      <pre className="text-code">{cmd}</pre>
    </div>
  );
}

export default function ToolsPage() {
  return (
    <section className="container" style={{ paddingTop: 'clamp(32px, 5vw, 64px)' }}>
      <h1 className="text-hero" style={{ marginBottom: 16 }}>Инструменты</h1>
      <p className="text-body" style={{ maxWidth: 480, marginBottom: 0 }}>Установите необходимое окружение перед началом занятий.</p>
      <div className="tools-grid">
        {tools.map((tool) => (
          <ToolCard key={tool.name} {...tool} />
        ))}
      </div>
    </section>
  );
}
