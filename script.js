/* ============================================================
   CV Web — Lógica de interacción
   Autor: BeyondGabriel
   Funciones: cambio de idioma (ES/EN), tema claro/oscuro,
              descarga en PDF (impresión nativa del navegador)
   ============================================================ */

(function () {
    'use strict';

    // ==================== ESTADO ====================
    const state = {
        lang: 'es',
        theme: 'light'
    };

    const STORAGE_KEYS = {
        lang: 'cv_lang',
        theme: 'cv_theme'
    };

    // ==================== ELEMENTOS ====================
    const langToggle = document.getElementById('langToggle');
    const langLabel = langToggle ? langToggle.querySelector('.lang-label') : null;
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const printBtn = document.getElementById('printBtn');

    // ==================== IDIOMA ====================
    function applyLanguage(lang) {
        state.lang = lang;
        document.documentElement.lang = lang;

        const elements = document.querySelectorAll('[data-es][data-en]');
        elements.forEach(function (el) {
            const text = el.getAttribute('data-' + lang);
            if (text) {
                el.textContent = text;
            }
        });

        if (langLabel) {
            langLabel.textContent = lang === 'es' ? 'EN' : 'ES';
        }

        try {
            localStorage.setItem(STORAGE_KEYS.lang, lang);
        } catch (e) { /* almacenamiento no disponible */ }
    }

    function toggleLanguage() {
        const newLang = state.lang === 'es' ? 'en' : 'es';
        applyLanguage(newLang);
    }

    // ==================== TEMA ====================
    function applyTheme(theme) {
        state.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);

        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? '☀' : '🌙';
        }

        try {
            localStorage.setItem(STORAGE_KEYS.theme, theme);
        } catch (e) { /* almacenamiento no disponible */ }
    }

    function toggleTheme() {
        const newTheme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    }

    // ==================== PDF ====================
    function downloadPDF() {
        window.print();
    }

    // ==================== INICIALIZACIÓN ====================
    function init() {
        // Recuperar preferencias guardadas
        let savedLang = 'es';
        let savedTheme = 'light';

        try {
            savedLang = localStorage.getItem(STORAGE_KEYS.lang) || 'es';
            savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || 'light';
        } catch (e) { /* almacenamiento no disponible */ }

        // Detectar preferencia del sistema para el tema
        if (!localStorage.getItem(STORAGE_KEYS.theme) &&
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches) {
            savedTheme = 'dark';
        }

        applyLanguage(savedLang);
        applyTheme(savedTheme);

        // Event listeners
        if (langToggle) {
            langToggle.addEventListener('click', toggleLanguage);
        }

        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }

        if (printBtn) {
            printBtn.addEventListener('click', downloadPDF);
        }
    }

    // Ejecutar al cargar el DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
