function showSection(id) {
    // Ховаємо всі секції
    document.querySelectorAll('.content section').forEach(section => {
      section.style.display = 'none';
    });

    // Знімаємо клас active з усіх кнопок
    document.querySelectorAll('.btn-list .btn').forEach(btn => {
      btn.classList.remove('active');
    });

    // Показуємо потрібну секцію
    const section = document.getElementById(id);
    if (section) {
      section.style.display = 'block';
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // Виділяємо активну кнопку
    const button = Array.from(document.querySelectorAll('.btn-list .btn')).find(btn => btn.textContent.includes(section.querySelector('h1')?.textContent?.split(' ')[0]));
    if (button) button.classList.add('active');
}