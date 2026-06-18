export default function ProgramPage() {
  const days = [
    { num: 1, title: 'Введение в ИИ‑агенты', desc: 'Архитектура, варианты использования, обзор инструментов.' },
    { num: 2, title: 'Python и окружение', desc: 'Виртуальные окружения, установка библиотек, настройка проекта.' },
    { num: 3, title: 'Docker и контейнеры', desc: 'Как контейнеризировать агента, Docker Compose.' },
    { num: 4, title: 'LangChain и цепочки', desc: 'Построение цепочек запросов, память, интеграция с LLM.' },
    { num: 5, title: 'Проект: свой агент', desc: 'Разработка, тестирование и презентация готового AI‑агента.' },
  ];

  return (
    <section className="container" style={{ paddingTop: 'clamp(32px, 5vw, 64px)' }}>
      <h1 className="text-hero" style={{ marginBottom: 16 }}>Программа</h1>
      <p className="text-body" style={{ maxWidth: 480, marginBottom: 0 }}>Пятидневный интенсив с погружением в тему.</p>
      <div className="schedule-grid">
        {days.map((day) => (
          <div key={day.num} className="card day-card">
            <span className="day-number">{day.num}</span>
            <div>
              <h3 className="text-h4" style={{ marginBottom: 4 }}>{day.title}</h3>
              <p className="text-sm" style={{ margin: 0 }}>{day.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
