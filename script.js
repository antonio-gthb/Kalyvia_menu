let currentLang = null;

function openMenu(lang) {
    currentLang = lang;
    // Save user preference
    localStorage.setItem('preferredLang', lang);

    // Instantly hide the landing screen layout view
    document.getElementById('welcome-screen').style.display = 'none';

    const btn = document.getElementById('language-toggle-btn');
    // Unhide only the section matching the selected language button
    if (lang === 'en') {
        document.getElementById('menu-container-en').style.display = 'block';
        document.getElementById('menu-container-gr').style.display = 'none';
        btn.innerHTML = '<span>🇬🇷</span> Ελληνικά';
    } else {
        document.getElementById('menu-container-gr').style.display = 'block';
        document.getElementById('menu-container-en').style.display = 'none';
        btn.innerHTML = '<span>🇬🇧</span> English';
    }
    btn.classList.add('visible');
}

function toggleLanguage() {
    if (currentLang === 'en') {
        openMenu('gr');
    } else {
        openMenu('en');
    }
}

function goBackToWelcomeScreen() {
    localStorage.removeItem('preferredLang');
    currentLang = null;
    document.getElementById('menu-container-en').style.display = 'none';
    document.getElementById('menu-container-gr').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'flex';
    document.getElementById('language-toggle-btn').classList.remove('visible');
}

// Auto-load preferred language if saved
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang === 'en' || savedLang === 'gr') {
        openMenu(savedLang);
    }
});
