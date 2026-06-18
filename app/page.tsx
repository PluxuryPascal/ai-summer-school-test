import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <section className="container" style={{ paddingTop: 'clamp(48px, 8vw, 120px)', paddingBottom: 'clamp(48px, 6vw, 80px)', textAlign: 'center' }}>
        <h1 className="text-landing" style={{ marginBottom: 24 }}>
          Летняя школа<br />по ИИ‑агентам
        </h1>
        <p className="text-body" style={{ maxWidth: 560, margin: '0 auto 32px' }}>
          За одну неделю вы научитесь создавать, отлаживать и развёртывать
          интеллектуальных агентов с помощью Python, Docker и LangChain.
        </p>
        <Link href="/program" className="btn">
          Программа курса
        </Link>
      </section>

      <section className="container" style={{ paddingBottom: 'clamp(48px, 6vw, 80px)' }}>
        <div className="features">
          <div className="card">
            <h3 className="text-h4" style={{ marginBottom: 8 }}>Практика</h3>
            <p className="text-sm">80% времени — hands‑on: от настройки окружения до деплоя готового агента.</p>
          </div>
          <div className="card">
            <h3 className="text-h4" style={{ marginBottom: 8 }}>Эксперты</h3>
            <p className="text-sm">Занятия ведут инженеры, ежедневно работающие с AI‑агентами в продакшене.</p>
          </div>
          <div className="card">
            <h3 className="text-h4" style={{ marginBottom: 8 }}>Проект</h3>
            <p className="text-sm">Защитите собственного агента — пополните портфолио реальным проектом.</p>
          </div>
        </div>
      </section>
    </>
  );
}
