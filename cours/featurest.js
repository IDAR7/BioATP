/**
 * BioATP - Script JavaScript Futuriste
 * Version: 3.1 (Futuristic - Fixed)
 * Date: 21/05/2025
 * Auteur: Manus
 * Description: Script JavaScript modulaire et avancé pour LMD1.html avec fonction de recherche corrigée
 */

// Structure modulaire avec IIFE pour éviter la pollution du scope global
const BioATP = (function() {
  'use strict';
  
  // Configuration globale
  const CONFIG = {
    animations: {
      enabled: true,
      duration: {
        fast: 300,
        normal: 600,
        slow: 1000
      },
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    },
    particles: {
      enabled: true,
      density: 50,
      color: '#00f2ff',
      size: {
        min: 1,
        max: 3
      },
      speed: {
        min: 0.5,
        max: 1.5
      }
    },
    search: {
      minChars: 2,
      debounceTime: 300
    },
    darkMode: {
      auto: true,
      storageKey: 'bioatp-theme'
    }
  };
  
  // Cache des éléments DOM fréquemment utilisés
  const DOM = {};
  
  // État de l'application
  const state = {
    isMenuOpen: false,
    activeCategory: null,
    searchQuery: '',
    isDarkMode: false,
    isScrolled: false,
    isInitialized: false
  };
  
  /**
   * Module d'initialisation
   */
  const init = {
    /**
     * Point d'entrée principal
     */
    app: function() {
      if (state.isInitialized) return;
      
      // Initialiser le cache DOM
      this.cacheDom();
      
      // Créer le footer s'il n'existe pas
      this.createFooterIfNotExists();
      
      // Initialiser les modules
      ui.setupTheme();
      ui.setupHeader();
      ui.setupCategories();
      ui.setupStatCounters();
      
      events.bindGlobal();
      search.init();
      animations.init();
      accessibility.init();
      
      if (CONFIG.particles.enabled) {
        effects.initParticles();
      }
      
      state.isInitialized = true;
      
      // Déclencher l'animation d'entrée
      setTimeout(() => {
        animations.pageEntrance();
      }, 100);
      
      console.log('BioATP App initialized successfully! 🧬');
    },
    
    /**
     * Cache des éléments DOM fréquemment utilisés
     */
    cacheDom: function() {
      DOM.body = document.body;
      DOM.header = document.querySelector('.header');
      DOM.searchInput = document.getElementById('search-input');
      DOM.categories = document.querySelectorAll('.category');
      DOM.categoryTitles = document.querySelectorAll('.category-title');
      DOM.statCards = document.querySelectorAll('.stat-card');
      DOM.statNumbers = document.querySelectorAll('.stat-card h3');
      DOM.chapterItems = document.querySelectorAll('.chapter-list li');
      DOM.navMenu = document.querySelector('.nav-menu');
      DOM.container = document.querySelector('.container');
    },
    
    /**
     * Crée le footer s'il n'existe pas
     */
    createFooterIfNotExists: function() {
      if (!document.querySelector('.footer')) {
        const footer = document.createElement('footer');
        footer.className = 'footer';
        
        footer.innerHTML = `
          <div class="footer-container">
            <div class="footer-section">
              <h3>À propos de BioATP</h3>
              <p>BioATP est une plateforme éducative dédiée aux sciences biologiques, offrant des ressources pédagogiques de qualité pour les étudiants du collège à l'université.</p>
              <div class="social-icons">
                <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            
            <div class="footer-section">
              <h3>Liens rapides</h3>
              <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="LMD1.html">Licence</a></li>
                <li><a href="lycee.html">Lycée</a></li>
                <li><a href="college.html">Collège</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h3>Ressources</h3>
              <ul>
                <li><a href="#">Bibliothèque</a></li>
                <li><a href="#">Quiz</a></li>
                <li><a href="#">Vidéos</a></li>
                <li><a href="#">Glossaire</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h3>Newsletter</h3>
              <p>Abonnez-vous pour recevoir nos dernières mises à jour et ressources.</p>
              <form class="newsletter-form">
                <input type="email" placeholder="Votre email" required>
                <button type="submit"><i class="fas fa-paper-plane"></i></button>
              </form>
            </div>
          </div>
          
          <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} BioATP. Tous droits réservés.</p>
            <div class="footer-links">
              <a href="#">Politique de confidentialité</a>
              <a href="#">Conditions d'utilisation</a>
              <a href="#">Mentions légales</a>
            </div>
          </div>
        `;
        
        document.body.appendChild(footer);
      }
    }
  };
  
  /**
   * Module d'interface utilisateur
   */
  const ui = {
    /**
     * Configure le thème de l'application
     */
    setupTheme: function() {
      // Vérifier les préférences de l'utilisateur
      const savedTheme = localStorage.getItem(CONFIG.darkMode.storageKey);
      
      // Vérifier les préférences système si aucune préférence utilisateur
      if (savedTheme === null && CONFIG.darkMode.auto) {
        state.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      } else {
        state.isDarkMode = savedTheme === 'dark';
      }
      
      // Appliquer le thème
      this.applyTheme();
      
      // Créer le bouton de toggle du thème
      this.createThemeToggle();
      
      // Écouter les changements de préférence système
      if (CONFIG.darkMode.auto) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
          if (localStorage.getItem(CONFIG.darkMode.storageKey) === null) {
            state.isDarkMode = e.matches;
            this.applyTheme();
            this.updateThemeToggleIcon();
          }
        });
      }
    },
    
    /**
     * Applique le thème actuel
     */
    applyTheme: function() {
      if (state.isDarkMode) {
        DOM.body.classList.add('dark-mode');
      } else {
        DOM.body.classList.remove('dark-mode');
      }
    },
    
    /**
     * Bascule entre les thèmes clair et sombre
     */
    toggleTheme: function() {
      state.isDarkMode = !state.isDarkMode;
      
      // Sauvegarder la préférence
      localStorage.setItem(CONFIG.darkMode.storageKey, state.isDarkMode ? 'dark' : 'light');
      
      // Appliquer le thème
      this.applyTheme();
      
      // Mettre à jour l'icône
      this.updateThemeToggleIcon();
      
      // Effet de transition
      effects.themeTransitionEffect();
    },
    
    /**
     * Crée le bouton de toggle du thème
     */
    createThemeToggle: function() {
      const themeToggle = document.createElement('button');
      themeToggle.id = 'theme-toggle';
      themeToggle.setAttribute('aria-label', 'Changer de thème');
      themeToggle.classList.add('theme-toggle');
      
      // Styles du bouton
      Object.assign(themeToggle.style, {
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: '100',
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        backdropFilter: 'blur(10px)',
        color: 'var(--primary-glow)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 10px rgba(0, 242, 255, 0.3)',
        transition: 'all 0.3s ease'
      });
      
      // Événement de clic
      themeToggle.addEventListener('click', () => this.toggleTheme());
      
      // Ajouter au DOM
      DOM.body.appendChild(themeToggle);
      
      // Mettre à jour l'icône
      this.updateThemeToggleIcon();
      
      // Ajouter des effets hover
      themeToggle.addEventListener('mouseenter', () => {
        themeToggle.style.transform = 'scale(1.1)';
        themeToggle.style.boxShadow = 'var(--shadow-glow-primary)';
      });
      
      themeToggle.addEventListener('mouseleave', () => {
        themeToggle.style.transform = 'scale(1)';
        themeToggle.style.boxShadow = '0 0 10px rgba(0, 242, 255, 0.3)';
      });
    },
    
    /**
     * Met à jour l'icône du bouton de thème
     */
    updateThemeToggleIcon: function() {
      const themeToggle = document.getElementById('theme-toggle');
      if (!themeToggle) return;
      
      themeToggle.innerHTML = state.isDarkMode 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
    },
    
    /**
     * Configure le comportement du header
     */
    setupHeader: function() {
      // Créer le bouton de menu mobile s'il n'existe pas
      if (window.innerWidth <= 768 && !document.querySelector('.menu-toggle')) {
        this.createMobileMenu();
      }
      
      // Créer le bouton de retour en haut
      this.createBackToTopButton();
    },
    
    /**
     * Crée le menu mobile
     */
    createMobileMenu: function() {
      const menuToggle = document.createElement('div');
      menuToggle.className = 'menu-toggle';
      menuToggle.setAttribute('aria-label', 'Menu principal');
      menuToggle.setAttribute('role', 'button');
      menuToggle.setAttribute('tabindex', '0');
      
      // Créer les barres du hamburger
      for (let i = 0; i < 3; i++) {
        const bar = document.createElement('span');
        Object.assign(bar.style, {
          display: 'block',
          width: '100%',
          height: '2px',
          background: 'var(--primary-glow)',
          borderRadius: '1px',
          transition: 'all 0.3s ease',
          boxShadow: '0 0 5px var(--primary-glow)'
        });
        menuToggle.appendChild(bar);
      }
      
      // Styles du bouton
      Object.assign(menuToggle.style, {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '30px',
        height: '22px',
        cursor: 'pointer',
        zIndex: '101',
        position: 'relative'
      });
      
      // Événements
      menuToggle.addEventListener('click', () => this.toggleMobileMenu());
      menuToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleMobileMenu();
        }
      });
      
      // Ajouter au DOM
      if (DOM.header) {
        DOM.header.appendChild(menuToggle);
      }
      
      // Ajouter la classe mobile-nav au menu
      if (DOM.navMenu) {
        DOM.navMenu.classList.add('mobile-nav');
        
        // Styles pour le menu mobile
        Object.assign(DOM.navMenu.style, {
          position: 'fixed',
          top: '85px',
          left: '0',
          width: '100%',
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(15px)',
          padding: '1rem',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
          borderBottom: '1px solid var(--glass-border)',
          transform: 'translateY(-100%)',
          opacity: '0',
          transition: 'transform 0.4s ease, opacity 0.4s ease',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          zIndex: '100'
        });
        
        // Styles pour les liens du menu mobile
        DOM.navMenu.querySelectorAll('a').forEach(link => {
          Object.assign(link.style, {
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            width: '100%',
            textAlign: 'left'
          });
        });
      }
    },
    
    /**
     * Bascule l'affichage du menu mobile
     */
    toggleMobileMenu: function() {
      state.isMenuOpen = !state.isMenuOpen;
      
      const menuToggle = document.querySelector('.menu-toggle');
      const bars = menuToggle ? menuToggle.querySelectorAll('span') : [];
      
      if (state.isMenuOpen) {
        // Animer les barres du hamburger
        if (bars.length === 3) {
          bars[0].style.transform = 'translateY(10px) rotate(45deg)';
          bars[1].style.opacity = '0';
          bars[2].style.transform = 'translateY(-10px) rotate(-45deg)';
        }
        
        // Afficher le menu
        if (DOM.navMenu) {
          DOM.navMenu.style.transform = 'translateY(0)';
          DOM.navMenu.style.opacity = '1';
        }
      } else {
        // Réinitialiser les barres du hamburger
        if (bars.length === 3) {
          bars[0].style.transform = 'none';
          bars[1].style.opacity = '1';
          bars[2].style.transform = 'none';
        }
        
        // Masquer le menu
        if (DOM.navMenu) {
          DOM.navMenu.style.transform = 'translateY(-100%)';
          DOM.navMenu.style.opacity = '0';
        }
      }
    },
    
    /**
     * Crée le bouton de retour en haut
     */
    createBackToTopButton: function() {
      const backToTop = document.createElement('button');
      backToTop.id = 'back-to-top';
      backToTop.setAttribute('aria-label', 'Retour en haut de page');
      backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
      
      // Styles du bouton
      Object.assign(backToTop.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '100',
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        background: 'var(--primary-glow)',
        border: 'none',
        color: 'var(--bg-dark-1)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 15px rgba(0, 242, 255, 0.5)',
        opacity: '0',
        transform: 'translateY(20px) scale(0.8)',
        transition: 'all 0.3s ease',
        pointerEvents: 'none'
      });
      
      // Événement de clic
      backToTop.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
      
      // Ajouter au DOM
      DOM.body.appendChild(backToTop);
    },
    
    /**
     * Configure les catégories
     */
    setupCategories: function() {
      DOM.categoryTitles.forEach(title => {
        // Ajouter des attributs ARIA
        title.setAttribute('role', 'button');
        title.setAttribute('aria-expanded', 'false');
        title.setAttribute('tabindex', '0');
        
        // Ajouter des événements clavier
        title.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.toggleCategory(title);
          }
        });
      });
    },
    
    /**
     * Bascule l'affichage d'une catégorie
     * @param {HTMLElement} titleElement - L'élément titre de la catégorie
     */
    toggleCategory: function(titleElement) {
      // Si l'élément est un événement, récupérer la cible
      if (titleElement.target) {
        titleElement = titleElement.target.closest('.category-title');
      }
      
      if (!titleElement) return;
      
      const coursesElement = titleElement.nextElementSibling;
      const isActive = titleElement.classList.contains('active');
      
      // Mettre à jour l'état
      if (isActive) {
        titleElement.classList.remove('active');
        titleElement.setAttribute('aria-expanded', 'false');
        
        // Animation de fermeture
        animations.closeCategory(coursesElement);
      } else {
        titleElement.classList.add('active');
        titleElement.setAttribute('aria-expanded', 'true');
        
        // Animation d'ouverture
        animations.openCategory(coursesElement);
      }
    },
    
    /**
     * Configure les compteurs de statistiques
     */
    setupStatCounters: function() {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const target = entry.target;
              const finalValue = parseInt(target.textContent, 10);
              
              animations.animateCounter(target, 0, finalValue, 2000);
              observer.unobserve(target);
            }
          });
        }, { threshold: 0.5 });
        
        DOM.statNumbers.forEach(el => {
          observer.observe(el);
        });
      }
    },
    
    /**
     * Met à jour l'affichage du header lors du défilement
     */
    updateHeaderOnScroll: function() {
      const scrollY = window.scrollY;
      
      if (scrollY > 50 && !state.isScrolled) {
        state.isScrolled = true;
        DOM.header.classList.add('scrolled');
      } else if (scrollY <= 50 && state.isScrolled) {
        state.isScrolled = false;
        DOM.header.classList.remove('scrolled');
      }
      
      // Mettre à jour le bouton de retour en haut
      const backToTop = document.getElementById('back-to-top');
      if (backToTop) {
        if (scrollY > 300) {
          backToTop.style.opacity = '1';
          backToTop.style.transform = 'translateY(0) scale(1)';
          backToTop.style.pointerEvents = 'auto';
        } else {
          backToTop.style.opacity = '0';
          backToTop.style.transform = 'translateY(20px) scale(0.8)';
          backToTop.style.pointerEvents = 'none';
        }
      }
    }
  };
  
  /**
   * Module de recherche
   */
  const search = {
    /**
     * Initialise le module de recherche
     */
    init: function() {
      if (!DOM.searchInput) return;
      
      // Ajouter l'événement d'input avec debounce
      DOM.searchInput.addEventListener('input', this.debounce(() => {
        const query = DOM.searchInput.value.toLowerCase().trim();
        state.searchQuery = query;
        
        if (query.length < CONFIG.search.minChars) {
          this.resetSearch();
          return;
        }
        
        this.performSearch(query);
      }, CONFIG.search.debounceTime));
      
      // Réinitialiser la recherche lorsque l'utilisateur efface le champ
      DOM.searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Escape' || DOM.searchInput.value === '') {
          DOM.searchInput.value = '';
          this.resetSearch();
        }
      });
      
      // Ajouter des effets visuels au champ de recherche
      this.enhanceSearchField();
    },
    
    /**
     * Ajoute des effets visuels au champ de recherche
     */
    enhanceSearchField: function() {
      if (!DOM.searchInput) return;
      
      // Effet de focus
      DOM.searchInput.addEventListener('focus', () => {
        effects.searchFieldFocusEffect(true);
      });
      
      DOM.searchInput.addEventListener('blur', () => {
        effects.searchFieldFocusEffect(false);
      });
    },
    
    /**
     * Effectue la recherche
     * @param {string} query - La requête de recherche
     */
    performSearch: function(query) {
      let resultsFound = false;
      
      // Correction: Vérifier que les catégories existent
      if (!DOM.categories || DOM.categories.length === 0) {
        console.error('Aucune catégorie trouvée pour la recherche');
        return;
      }
      
      // Parcourir toutes les catégories
      DOM.categories.forEach(category => {
        // Correction: Vérifier que les éléments existent avant d'y accéder
        const categoryTitleElement = category.querySelector('.category-title span');
        if (!categoryTitleElement) return;
        
        const categoryTitle = categoryTitleElement.textContent.toLowerCase();
        const chapters = category.querySelectorAll('.chapter-list li');
        let categoryHasResults = false;
        
        // Recherche dans les chapitres
        chapters.forEach(chapter => {
          // Correction: Vérifier que l'élément p existe
          const pElement = chapter.querySelector('.chapter-header p');
          if (!pElement) return;
          
          const chapterText = pElement.textContent.toLowerCase();
          
          if (chapterText.includes(query) || categoryTitle.includes(query)) {
            chapter.style.display = 'flex'; // Correction: Utiliser flex au lieu de block
            
            // Mettre en évidence les résultats
            this.highlightSearchResults(chapter, query);
            
            categoryHasResults = true;
            resultsFound = true;
          } else {
            chapter.style.display = 'none';
            this.removeHighlights(chapter);
          }
        });
        
        // Afficher/masquer la catégorie selon les résultats
        if (categoryHasResults) {
          category.style.display = 'block';
          
          // Ouvrir la catégorie si elle est fermée
          const categoryTitle = category.querySelector('.category-title');
          if (categoryTitle && !categoryTitle.classList.contains('active')) {
            // Correction: Utiliser la méthode toggleCategory pour ouvrir la catégorie
            categoryTitle.classList.add('active');
            const coursesElement = categoryTitle.nextElementSibling;
            if (coursesElement) {
              coursesElement.style.display = 'block';
              coursesElement.style.maxHeight = 'none';
              coursesElement.style.opacity = '1';
            }
          }
        } else {
          category.style.display = 'none';
        }
      });
      
      // Afficher un message si aucun résultat
      if (!resultsFound) {
        this.showNoResultsMessage();
      } else {
        this.hideNoResultsMessage();
      }
      
      // Effet visuel pour indiquer que la recherche est terminée
      effects.searchCompletedEffect();
    },
    
    /**
     * Met en évidence les résultats de recherche
     * @param {HTMLElement} element - L'élément contenant le texte
     * @param {string} query - La requête de recherche
     */
    highlightSearchResults: function(element, query) {
      const p = element.querySelector('.chapter-header p');
      if (!p) return;
      
      // Sauvegarder le texte original si ce n'est pas déjà fait
      if (!p.dataset.originalText) {
        p.dataset.originalText = p.textContent;
      }
      
      const text = p.dataset.originalText;
      const regex = new RegExp(`(${query})`, 'gi');
      p.innerHTML = text.replace(regex, '<span class="search-highlight">$1</span>');
      
      // Ajouter des styles pour la mise en évidence
      const highlights = element.querySelectorAll('.search-highlight');
      highlights.forEach(highlight => {
        Object.assign(highlight.style, {
          backgroundColor: 'rgba(0, 242, 255, 0.2)',
          color: 'var(--primary-glow)',
          padding: '0 2px',
          borderRadius: '3px',
          fontWeight: 'bold',
          boxShadow: '0 0 5px rgba(0, 242, 255, 0.3)',
          textShadow: '0 0 3px rgba(0, 242, 255, 0.5)'
        });
      });
      
      // Ajouter un effet de pulsation à l'élément
      element.classList.add('search-result');
      element.style.animation = 'pulseGlow 2s infinite';
    },
    
    /**
     * Supprime les mises en évidence
     * @param {HTMLElement} element - L'élément contenant le texte
     */
    removeHighlights: function(element) {
      const p = element.querySelector('.chapter-header p');
      if (!p || !p.dataset.originalText) return;
      
      p.textContent = p.dataset.originalText;
      element.classList.remove('search-result');
      element.style.animation = '';
    },
    
    /**
     * Réinitialise la recherche
     */
    resetSearch: function() {
      // Correction: Vérifier que les catégories existent
      if (!DOM.categories) return;
      
      DOM.categories.forEach(category => {
        category.style.display = 'block';
        
        const chapters = category.querySelectorAll('.chapter-list li');
        chapters.forEach(chapter => {
          chapter.style.display = 'flex'; // Correction: Utiliser flex au lieu de block
          this.removeHighlights(chapter);
        });
        
        // Correction: Remettre les catégories dans leur état initial
        const categoryTitle = category.querySelector('.category-title');
        if (categoryTitle && categoryTitle.classList.contains('active')) {
          const coursesElement = categoryTitle.nextElementSibling;
          if (coursesElement) {
            coursesElement.style.display = 'block';
          }
        } else if (categoryTitle) {
          const coursesElement = categoryTitle.nextElementSibling;
          if (coursesElement) {
            coursesElement.style.display = 'none';
          }
        }
      });
      
      this.hideNoResultsMessage();
    },
    
    /**
     * Affiche un message quand aucun résultat n'est trouvé
     */
    showNoResultsMessage: function() {
      let noResultsMsg = document.getElementById('no-results-message');
      
      if (!noResultsMsg) {
        noResultsMsg = document.createElement('div');
        noResultsMsg.id = 'no-results-message';
        
        // Styles du message
        Object.assign(noResultsMsg.style, {
          padding: '2rem',
          textAlign: 'center',
          color: 'var(--text-light-2)',
          background: 'var(--glass-bg)',
          borderRadius: 'var(--radius-lg)',
          backdropFilter: 'blur(10px)',
          border: '1px solid var(--glass-border)',
          margin: '2rem 0',
          animation: 'fadeIn 0.5s ease'
        });
        
        noResultsMsg.innerHTML = `
          <i class="fas fa-search" style="font-size: 3rem; color: var(--primary-glow); margin-bottom: 1rem; display: block;"></i>
          <h3 style="margin-bottom: 0.5rem; color: var(--text-light-1);">Aucun résultat trouvé</h3>
          <p>Essayez avec d'autres termes ou vérifiez l'orthographe.</p>
        `;
        
        // Correction: Vérifier que le conteneur existe
        if (DOM.container) {
          DOM.container.insertBefore(noResultsMsg, DOM.container.firstChild);
        } else {
          document.body.appendChild(noResultsMsg);
        }
      }
      
      noResultsMsg.style.display = 'block';
    },
    
    /**
     * Cache le message de "aucun résultat"
     */
    hideNoResultsMessage: function() {
      const noResultsMsg = document.getElementById('no-results-message');
      if (noResultsMsg) {
        noResultsMsg.style.display = 'none';
      }
    },
    
    /**
     * Fonction utilitaire pour limiter la fréquence d'exécution d'une fonction
     * @param {Function} func - La fonction à exécuter
     * @param {number} wait - Le délai d'attente en ms
     * @returns {Function} - La fonction avec délai
     */
    debounce: function(func, wait) {
      let timeout;
      return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          func.apply(context, args);
        }, wait);
      };
    }
  };
  
  /**
   * Module d'animations
   */
  const animations = {
    /**
     * Initialise le module d'animations
     */
    init: function() {
      // Initialiser les animations au défilement
      this.initScrollAnimations();
      
      // Initialiser les animations au survol
      this.initHoverAnimations();
    },
    
    /**
     * Animation d'entrée de la page
     */
    pageEntrance: function() {
      if (!CONFIG.animations.enabled) return;
      
      // Animer le header
      if (DOM.header) {
        DOM.header.style.opacity = '0';
        DOM.header.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
          DOM.header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          DOM.header.style.opacity = '1';
          DOM.header.style.transform = 'translateY(0)';
        }, 100);
      }
      
      // Animer la navbar
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        navbar.style.opacity = '0';
        navbar.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
          navbar.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          navbar.style.opacity = '1';
          navbar.style.transform = 'translateY(0)';
        }, 300);
      }
      
      // Animer les statistiques
      DOM.statCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
          card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 500 + index * 150);
      });
      
      // Animer les catégories
      DOM.categories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
          category.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          category.style.opacity = '1';
          category.style.transform = 'translateY(0)';
        }, 800 + index * 150);
      });
    },
    
    /**
     * Initialise les animations au défilement
     */
    initScrollAnimations: function() {
      if (!CONFIG.animations.enabled || !('IntersectionObserver' in window)) return;
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      // Observer les éléments
      DOM.chapterItems.forEach(el => {
        observer.observe(el);
      });
    },
    
    /**
     * Initialise les animations au survol
     */
    initHoverAnimations: function() {
      if (!CONFIG.animations.enabled) return;
      
      // Animation des boutons
      document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
          effects.buttonHoverEffect(btn, true);
        });
        
        btn.addEventListener('mouseleave', () => {
          effects.buttonHoverEffect(btn, false);
        });
      });
      
      // Animation des chapitres
      DOM.chapterItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
          effects.chapterHoverEffect(item, true);
        });
        
        item.addEventListener('mouseleave', () => {
          effects.chapterHoverEffect(item, false);
        });
      });
    },
    
    /**
     * Anime un compteur de 0 à une valeur finale
     * @param {HTMLElement} element - L'élément à animer
     * @param {number} start - Valeur de départ
     * @param {number} end - Valeur finale
     * @param {number} duration - Durée de l'animation en ms
     */
    animateCounter: function(element, start, end, duration) {
      if (!CONFIG.animations.enabled) {
        element.textContent = end;
        return;
      }
      
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        
        element.textContent = value;
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          // Ajouter un effet de pulsation à la fin
          element.style.animation = 'pulseGlow 2s';
          setTimeout(() => {
            element.style.animation = '';
          }, 2000);
        }
      };
      
      window.requestAnimationFrame(step);
    },
    
    /**
     * Anime l'ouverture d'une catégorie
     * @param {HTMLElement} element - L'élément à animer
     */
    openCategory: function(element) {
      if (!element) return;
      
      if (!CONFIG.animations.enabled) {
        element.style.display = 'block';
        return;
      }
      
      // Sauvegarder la hauteur
      element.style.display = 'block';
      const height = element.scrollHeight;
      
      // Configurer l'animation
      element.style.overflow = 'hidden';
      element.style.height = '0';
      element.style.opacity = '0';
      element.style.transition = `height ${CONFIG.animations.duration.normal}ms ${CONFIG.animations.easing}, opacity ${CONFIG.animations.duration.normal}ms ${CONFIG.animations.easing}`;
      
      // Déclencher l'animation
      setTimeout(() => {
        element.style.height = height + 'px';
        element.style.opacity = '1';
        
        // Nettoyer après l'animation
        setTimeout(() => {
          element.style.height = '';
          element.style.overflow = '';
        }, CONFIG.animations.duration.normal);
      }, 10);
      
      // Effet de particules
      effects.categoryOpenEffect(element);
    },
    
    /**
     * Anime la fermeture d'une catégorie
     * @param {HTMLElement} element - L'élément à animer
     */
    closeCategory: function(element) {
      if (!element) return;
      
      if (!CONFIG.animations.enabled) {
        element.style.display = 'none';
        return;
      }
      
      // Sauvegarder la hauteur
      const height = element.scrollHeight;
      element.style.height = height + 'px';
      element.style.overflow = 'hidden';
      
      // Configurer l'animation
      element.style.transition = `height ${CONFIG.animations.duration.normal}ms ${CONFIG.animations.easing}, opacity ${CONFIG.animations.duration.normal}ms ${CONFIG.animations.easing}`;
      
      // Déclencher l'animation
      setTimeout(() => {
        element.style.height = '0';
        element.style.opacity = '0';
        
        // Masquer après l'animation
        setTimeout(() => {
          element.style.display = 'none';
          element.style.height = '';
          element.style.overflow = '';
        }, CONFIG.animations.duration.normal);
      }, 10);
    }
  };
  
  /**
   * Module d'effets visuels
   */
  const effects = {
    /**
     * Initialise les particules
     */
    initParticles: function() {
      if (!CONFIG.particles.enabled) return;
      
      // Créer le canvas
      const canvas = document.createElement('canvas');
      canvas.id = 'particles-canvas';
      
      // Styles du canvas
      Object.assign(canvas.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: '-1'
      });
      
      // Ajouter au DOM
      document.body.appendChild(canvas);
      
      // Initialiser les particules
      this.setupParticles(canvas);
    },
    
    /**
     * Configure les particules
     * @param {HTMLCanvasElement} canvas - L'élément canvas
     */
    setupParticles: function(canvas) {
      const ctx = canvas.getContext('2d');
      const particles = [];
      
      // Redimensionner le canvas
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      // Créer les particules
      const createParticles = () => {
        const particleCount = Math.floor(CONFIG.particles.density * (window.innerWidth / 1920));
        
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * (CONFIG.particles.size.max - CONFIG.particles.size.min) + CONFIG.particles.size.min,
            speedX: (Math.random() - 0.5) * CONFIG.particles.speed.max,
            speedY: (Math.random() - 0.5) * CONFIG.particles.speed.max,
            opacity: Math.random() * 0.5 + 0.2
          });
        }
      };
      
      // Animer les particules
      const animateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
          // Mettre à jour la position
          p.x += p.speedX;
          p.y += p.speedY;
          
          // Rebondir sur les bords
          if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
          if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
          
          // Dessiner la particule
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 242, 255, ${p.opacity})`;
          ctx.fill();
          
          // Ajouter un halo
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 242, 255, ${p.opacity * 0.2})`;
          ctx.fill();
        });
        
        requestAnimationFrame(animateParticles);
      };
      
      // Initialiser
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      createParticles();
      animateParticles();
    },
    
    /**
     * Effet de focus sur le champ de recherche
     * @param {boolean} isFocused - Si le champ est en focus
     */
    searchFieldFocusEffect: function(isFocused) {
      if (!DOM.searchInput) return;
      
      const container = DOM.searchInput.closest('.search-container');
      if (!container) return;
      
      if (isFocused) {
        // Ajouter un halo lumineux
        container.style.boxShadow = 'var(--shadow-glow-primary)';
        
        // Ajouter un effet de particules autour du champ
        this.createParticleEffect(container, 10, 'var(--primary-glow)');
      } else {
        // Supprimer le halo
        container.style.boxShadow = '';
      }
    },
    
    /**
     * Effet de fin de recherche
     */
    searchCompletedEffect: function() {
      if (!DOM.searchInput) return;
      
      // Créer un flash lumineux autour du champ
      const container = DOM.searchInput.closest('.search-container');
      if (!container) return;
      
      container.style.boxShadow = 'var(--shadow-glow-primary)';
      
      setTimeout(() => {
        container.style.boxShadow = '';
      }, 500);
    },
    
    /**
     * Effet d'ouverture de catégorie
     * @param {HTMLElement} element - L'élément catégorie
     */
    categoryOpenEffect: function(element) {
      if (!element) return;
      
      // Créer un effet de particules
      this.createParticleEffect(element, 20, 'var(--primary-glow)');
    },
    
    /**
     * Effet de transition de thème
     */
    themeTransitionEffect: function() {
      // Créer un flash lumineux
      const overlay = document.createElement('div');
      
      // Styles de l'overlay
      Object.assign(overlay.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: state.isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        zIndex: '9999',
        pointerEvents: 'none',
        opacity: '0',
        transition: 'opacity 0.5s ease'
      });
      
      // Ajouter au DOM
      document.body.appendChild(overlay);
      
      // Animer
      setTimeout(() => {
        overlay.style.opacity = '1';
        
        setTimeout(() => {
          overlay.style.opacity = '0';
          
          setTimeout(() => {
            document.body.removeChild(overlay);
          }, 500);
        }, 200);
      }, 10);
    },
    
    /**
     * Effet de survol de bouton
     * @param {HTMLElement} button - Le bouton
     * @param {boolean} isHovered - Si le bouton est survolé
     */
    buttonHoverEffect: function(button, isHovered) {
      if (!button) return;
      
      if (isHovered) {
        // Ajouter un halo lumineux
        if (button.classList.contains('download-btn')) {
          button.style.boxShadow = 'var(--shadow-glow-primary)';
        } else {
          button.style.boxShadow = '0 0 10px rgba(0, 242, 255, 0.3)';
        }
        
        // Ajouter un effet de particules
        if (button.classList.contains('download-btn')) {
          this.createParticleEffect(button, 5, 'var(--primary-glow)');
        }
      } else {
        // Supprimer le halo
        button.style.boxShadow = '';
      }
    },
    
    /**
     * Effet de survol de chapitre
     * @param {HTMLElement} item - L'élément chapitre
     * @param {boolean} isHovered - Si l'élément est survolé
     */
    chapterHoverEffect: function(item, isHovered) {
      if (!item) return;
      
      if (isHovered) {
        // Ajouter un halo lumineux
        item.style.boxShadow = '0 0 15px rgba(0, 242, 255, 0.2)';
        
        // Mettre en évidence l'icône
        const icon = item.querySelector('i.fa-file-pdf');
        if (icon) {
          icon.style.transform = 'scale(1.2)';
          icon.style.filter = 'drop-shadow(0 0 8px var(--accent-glow))';
        }
      } else {
        // Supprimer le halo
        item.style.boxShadow = '';
        
        // Réinitialiser l'icône
        const icon = item.querySelector('i.fa-file-pdf');
        if (icon) {
          icon.style.transform = '';
          icon.style.filter = 'drop-shadow(0 0 5px var(--accent-glow))';
        }
      }
    },
    
    /**
     * Crée un effet de particules autour d'un élément
     * @param {HTMLElement} element - L'élément
     * @param {number} count - Le nombre de particules
     * @param {string} color - La couleur des particules
     */
    createParticleEffect: function(element, count, color) {
      if (!element || !CONFIG.animations.enabled) return;
      
      const rect = element.getBoundingClientRect();
      
      for (let i = 0; i < count; i++) {
        // Créer une particule
        const particle = document.createElement('div');
        
        // Position aléatoire autour de l'élément
        const x = rect.left + Math.random() * rect.width;
        const y = rect.top + Math.random() * rect.height;
        
        // Styles de la particule
        Object.assign(particle.style, {
          position: 'fixed',
          top: y + 'px',
          left: x + 'px',
          width: Math.random() * 4 + 2 + 'px',
          height: Math.random() * 4 + 2 + 'px',
          backgroundColor: color,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: '9999',
          opacity: Math.random() * 0.5 + 0.5,
          boxShadow: `0 0 10px ${color}`
        });
        
        // Ajouter au DOM
        document.body.appendChild(particle);
        
        // Animer
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 60 + 30;
        const startTime = Date.now();
        const duration = Math.random() * 1000 + 500;
        
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = elapsed / duration;
          
          if (progress >= 1) {
            document.body.removeChild(particle);
            return;
          }
          
          const distance = speed * progress;
          const currentX = x + Math.cos(angle) * distance;
          const currentY = y + Math.sin(angle) * distance;
          
          particle.style.left = currentX + 'px';
          particle.style.top = currentY + 'px';
          particle.style.opacity = 1 - progress;
          
          requestAnimationFrame(animate);
        };
        
        requestAnimationFrame(animate);
      }
    }
  };
  
  /**
   * Module d'accessibilité
   */
  const accessibility = {
    /**
     * Initialise le module d'accessibilité
     */
    init: function() {
      this.setupKeyboardNavigation();
      this.setupFocusStyles();
      this.setupARIA();
    },
    
    /**
     * Configure la navigation au clavier
     */
    setupKeyboardNavigation: function() {
      // Navigation avec les touches Tab et Shift+Tab
      document.addEventListener('keydown', (e) => {
        // Échap pour fermer le menu mobile
        if (e.key === 'Escape' && state.isMenuOpen) {
          ui.toggleMobileMenu();
        }
      });
    },
    
    /**
     * Configure les styles de focus
     */
    setupFocusStyles: function() {
      // Ajouter une classe pour le focus clavier
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });
      
      // Supprimer la classe lors du clic
      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
      
      // Ajouter des styles pour le focus clavier
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation :focus {
          outline: 2px solid var(--primary-glow) !important;
          outline-offset: 2px !important;
          box-shadow: 0 0 0 4px rgba(0, 242, 255, 0.2) !important;
        }
      `;
      document.head.appendChild(style);
    },
    
    /**
     * Configure les attributs ARIA
     */
    setupARIA: function() {
      // Ajouter des attributs ARIA aux éléments interactifs
      document.querySelectorAll('button, a').forEach(el => {
        if (!el.getAttribute('aria-label') && !el.textContent.trim()) {
          const icon = el.querySelector('i');
          if (icon) {
            const iconClass = Array.from(icon.classList).find(cls => cls.startsWith('fa-'));
            if (iconClass) {
              const label = iconClass.replace('fa-', '').replace(/-/g, ' ');
              el.setAttribute('aria-label', label);
            }
          }
        }
      });
    }
  };
  
  /**
   * Module d'événements
   */
  const events = {
    /**
     * Lie les événements globaux
     */
    bindGlobal: function() {
      // Événement de défilement
      window.addEventListener('scroll', this.throttle(() => {
        ui.updateHeaderOnScroll();
      }, 100));
      
      // Événement de redimensionnement
      window.addEventListener('resize', this.throttle(() => {
        // Créer le menu mobile si nécessaire
        if (window.innerWidth <= 768 && !document.querySelector('.menu-toggle')) {
          ui.createMobileMenu();
        }
      }, 200));
      
      // Événement de clic sur les titres de catégorie
      DOM.categoryTitles.forEach(title => {
        title.addEventListener('click', (e) => {
          ui.toggleCategory(e.currentTarget);
        });
      });
    },
    
    /**
     * Fonction utilitaire pour limiter la fréquence d'exécution d'une fonction
     * @param {Function} func - La fonction à exécuter
     * @param {number} limit - La limite de temps en ms
     * @returns {Function} - La fonction avec limite
     */
    throttle: function(func, limit) {
      let inThrottle;
      return function() {
        const context = this;
        const args = arguments;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    }
  };
  
  // API publique
  return {
    init: init.app,
    toggleCategory: ui.toggleCategory,
    toggleTheme: ui.toggleTheme
  };
})();

// Initialiser l'application lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', BioATP.init);

// Exposer l'API globalement pour les appels depuis le HTML
window.toggleCategory = BioATP.toggleCategory;
