document.querySelectorAll('.spoiler-button').forEach((button) => {
    button.addEventListener('click', () => {
        const allSpoilers = document.querySelectorAll('.spoiler-content');
        const currentSpoiler = button.nextElementSibling;

        // Скрыть все другие спойлеры
        allSpoilers.forEach((spoiler) => {
            if (spoiler !== currentSpoiler) {
                spoiler.style.display = 'none';
            }
        });

        // Проверка на наличие скриншотов
        if (currentSpoiler.getAttribute('data-has-screenshots') === 'false') {
            currentSpoiler.innerHTML = '<p>Без скринов</p>';
        }

        // Переключение видимости текущего спойлера
        currentSpoiler.style.display =
            currentSpoiler.style.display === 'block' ? 'none' : 'block';
    });
});
