import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} AI Agents Summer School</p>
      <p style={{ marginTop: 8 }}>
        <Link href="/">Главная</Link>
        {' · '}
        <Link href="/program">Программа</Link>
        {' · '}
        <Link href="/tools">Инструменты</Link>
        {' · '}
        <Link href="/prompts">Промты</Link>
      </p>
    </footer>
  );
}
