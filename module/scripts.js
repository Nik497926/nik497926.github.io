document.querySelectorAll('.spoiler-button').forEach((button) => {
    button.addEventListener('click', () => {
        const allSpoilers = document.querySelectorAll('.spoiler-content');
        const currentSpoiler = button.nextElementSibling;

        // Скрыть все открытые спойлеры
        allSpoilers.forEach((spoiler) => {
            if (spoiler !== currentSpoiler) {
                spoiler.style.display = 'none';
            }
        });

        // Переключение видимости текущего спойлера
        currentSpoiler.style.display =
            currentSpoiler.style.display === 'block' ? 'none' : 'block';
    });
});
