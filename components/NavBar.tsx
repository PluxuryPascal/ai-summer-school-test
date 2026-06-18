'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: 'Главная' },
    { href: '/program', label: 'Программа' },
    { href: '/tools', label: 'Инструменты' },
    { href: '/prompts', label: 'Промты' },
  ];

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-brand">AI School</Link>
      <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Меню">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {open ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>
      <ul className={`navbar-links${open ? ' open' : ''}`}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={pathname === href ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
