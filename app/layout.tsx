import './globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'AI Agents Summer School',
  description: 'Интенсивный курс по созданию ИИ‑агентов за одну неделю',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
