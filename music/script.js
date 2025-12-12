// Параллакс эффект для частиц
document.addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    particles.forEach((particle, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed * 20;
        const y = (mouseY - 0.5) * speed * 20;
        particle.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Добавление эффекта ripple для кнопки
document.addEventListener('DOMContentLoaded', () => {
    const yandexBtn = document.querySelector('.yandex-music-btn');
    if (yandexBtn) {
        yandexBtn.addEventListener('click', function(e) {
            const ripple = this.querySelector('.btn-ripple');
            if (ripple) {
                ripple.style.width = '0';
                ripple.style.height = '0';
                setTimeout(() => {
                    ripple.style.width = '300px';
                    ripple.style.height = '300px';
                }, 10);
            }
        });
    }

    // Анимация карточек треков при скролле
    const trackCards = document.querySelectorAll('.track-card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'track-card-appear 0.8s ease-out';
            }
        });
    }, { threshold: 0.1 });

    trackCards.forEach(card => {
        cardObserver.observe(card);
    });

    // Плавное появление элементов при загрузке
    const elements = document.querySelectorAll('.artist-card, .tracks-section');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            el.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Добавление случайных анимаций для частиц
setInterval(() => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        const randomDelay = Math.random() * 2;
        particle.style.animationDelay = `-${randomDelay}s`;
    });
}, 5000);

// Эффект при наведении на карточки треков
document.querySelectorAll('.track-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Эффект частиц при клике
document.addEventListener('click', function(e) {
    if (e.target.closest('.track-card, .yandex-music-btn, .artist-card')) {
        createParticles(e.clientX, e.clientY);
    }
});

function createParticles(x, y) {
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'click-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.setProperty('--random-x', (Math.random() - 0.5) * 200 + 'px');
        particle.style.setProperty('--random-y', (Math.random() - 0.5) * 200 + 'px');
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// Анимация загрузки страницы
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Улучшенная анимация для визуализатора звука
const audioBars = document.querySelectorAll('.audio-bar');
audioBars.forEach((bar, index) => {
    setInterval(() => {
        const randomHeight = 20 + Math.random() * 30;
        bar.style.height = randomHeight + 'px';
    }, 100 + index * 50);
});
