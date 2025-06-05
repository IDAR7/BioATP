/**
 * BioATP - Script moderne et interactif
 * Gestion du menu hamburger, animations et interactions
 */

// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Initialisation des modules
    initHamburgerMenu();
    initAnimations();
    initQuoteSystem();
    initFactSystem();
    initScrollEffects();
    initSubmenuToggle();
    initHeroScroll();
});

/**
 * Initialisation du menu hamburger pour mobile
 */
function initHamburgerMenu() {
    // Créer le bouton hamburger s'il n'existe pas
    if (!document.querySelector('.hamburger-menu')) {
        const header = document.querySelector('.header');
        const navContainer = document.querySelector('.nav-container');
        
        // Créer le bouton hamburger
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger-menu';
        hamburger.innerHTML = '<span></span><span></span><span></span>';
        header.insertBefore(hamburger, navContainer);
        
        // Créer l'overlay pour le menu mobile
        const overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
        
        // Ajouter un bouton de fermeture dans le menu mobile
        const closeButton = document.createElement('div');
        closeButton.className = 'close-menu';
        closeButton.innerHTML = '<i "></i>';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '20px';
        closeButton.style.right = '20px';
        closeButton.style.fontSize = '24px';
        closeButton.style.cursor = 'pointer';
        closeButton.style.color = 'var(--primary)';
        navContainer.prepend(closeButton);
    }
    
    // Gérer l'ouverture/fermeture du menu
    const hamburger = document.querySelector('.hamburger-menu');
    const navContainer = document.querySelector('.nav-container');
    const overlay = document.querySelector('.menu-overlay');
    const closeButton = document.querySelector('.close-menu');
    
    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);
    closeButton.addEventListener('click', closeMenu);
    
    // Fermer le menu lors du clic sur un lien
    const menuLinks = document.querySelectorAll('.main-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Ne pas fermer si c'est un lien parent avec sous-menu
            if (this.nextElementSibling && this.nextElementSibling.classList.contains('submenu')) {
                // Sur mobile, empêcher la navigation et ouvrir le sous-menu
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block';
                }
            } else {
                closeMenu();
            }
        });
    });
    
    // Fonction pour basculer l'état du menu
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navContainer.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = navContainer.classList.contains('active') ? 'hidden' : '';
    }
    
    // Fonction pour fermer le menu
    function closeMenu() {
        hamburger.classList.remove('active');
        navContainer.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Fermer le menu lors du redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navContainer.classList.contains('active')) {
            closeMenu();
        }
    });
}

/**
 * Gestion des sous-menus sur mobile
 */
function initSubmenuToggle() {
    // Ajouter des indicateurs de sous-menu
    const menuItemsWithSubmenu = document.querySelectorAll('.main-menu > li > a + .submenu');
    
    menuItemsWithSubmenu.forEach(submenu => {
        const parentLink = submenu.previousElementSibling;
        
        // Ajouter un indicateur de sous-menu
        const indicator = document.createElement('i');
        indicator.className = 'fas fa-chevron-down submenu-indicator';
        indicator.style.marginLeft = 'auto';
        indicator.style.fontSize = '0.8em';
        indicator.style.transition = 'transform 0.3s ease';
        parentLink.appendChild(indicator);
        
        // Gérer le clic sur mobile
        parentLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                indicator.style.transform = submenu.style.display === 'block' ? 'rotate(180deg)' : '';
            }
        });
    });
}

/**
 * Initialisation des animations AOS
 */
function initAnimations() {
    // Vérifier si AOS est disponible
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: 'ease-out'
        });
    } else {
        // Fallback pour les animations si AOS n'est pas disponible
        const animatedElements = document.querySelectorAll('[data-aos]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
}

/**
 * Système de citation rotative
 */
function initQuoteSystem() {
    const quotes = [
        { text: "La science est une histoire sans fin", author: "Max Planck" },
        { text: "Dans la vie, rien n'est à craindre, tout est à comprendre", author: "Marie Curie" },
        { text: "La logique vous conduira d'un point A à un point B. L'imagination vous conduira partout", author: "Albert Einstein" },
        { text: "La science n'a pas de patrie, parce que le savoir est le patrimoine de l'humanité", author: "Louis Pasteur" },
        { text: "La science est l'asymptote de la vérité. Elle approche sans cesse et ne touche jamais", author: "Victor Hugo" }
    ];
    
    const quoteElement = document.getElementById('daily-quote');
    const authorElement = document.getElementById('quote-author');
    const timerElement = document.getElementById('quote-timer');
    
    if (quoteElement && authorElement) {
        let currentQuoteIndex = 0;
        let timerWidth = 0;
        let timerInterval;
        
        // Fonction pour afficher une nouvelle citation
        function displayQuote(index) {
            // Animation de sortie
            quoteElement.style.opacity = 0;
            authorElement.style.opacity = 0;
            
            setTimeout(() => {
                quoteElement.textContent = `"${quotes[index].text}"`;
                authorElement.textContent = `- ${quotes[index].author}`;
                
                // Animation d'entrée
                quoteElement.style.opacity = 1;
                authorElement.style.opacity = 1;
            }, 500);
            
            // Réinitialiser le timer
            timerWidth = 0;
            if (timerElement) {
                timerElement.style.width = '0%';
            }
        }
        
        // Fonction pour passer à la citation suivante
        function nextQuote() {
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            displayQuote(currentQuoteIndex);
        }
        
        // Exposer la fonction nextQuote globalement
        window.nextQuote = nextQuote;
        
        // Démarrer le timer
        if (timerElement) {
            timerInterval = setInterval(() => {
                timerWidth += 1;
                timerElement.style.width = `${timerWidth}%`;
                
                if (timerWidth >= 100) {
                    nextQuote();
                    timerWidth = 0;
                }
            }, 100); // 10 secondes au total (100 * 100ms)
        }
        
        // Afficher la première citation
        displayQuote(currentQuoteIndex);
    }
}

/**
 * Système de faits scientifiques rotatifs
 */
function initFactSystem() {
    const facts = [
        "Le corps humain contient assez de carbone pour remplir 900 crayons",
        "L'ADN humain déroulé mesurerait environ 2 mètres de long",
        "Le cerveau humain génère suffisamment d'électricité pour alimenter une petite ampoule",
        "Les mitochondries produisent 90% de l'énergie dont notre corps a besoin",
        "Un seul gramme d'ADN peut stocker jusqu'à 700 téraoctets de données",
        "Les cellules de la peau se renouvellent entièrement tous les 27 jours",
        "Le corps humain contient environ 60 000 kilomètres de vaisseaux sanguins"
    ];
    
    const factElement = document.getElementById('fact-text');
    const timerElement = document.getElementById('fact-timer');
    
    if (factElement) {
        let currentFactIndex = 0;
        let timerWidth = 0;
        let timerInterval;
        
        // Fonction pour afficher un nouveau fait
        function displayFact(index) {
            // Animation de sortie
            factElement.style.opacity = 0;
            
            setTimeout(() => {
                factElement.textContent = facts[index];
                
                // Animation d'entrée
                factElement.style.opacity = 1;
            }, 500);
            
            // Réinitialiser le timer
            timerWidth = 0;
            if (timerElement) {
                timerElement.style.width = '0%';
            }
        }
        
        // Fonction pour passer au fait suivant
        function nextFact() {
            currentFactIndex = (currentFactIndex + 1) % facts.length;
            displayFact(currentFactIndex);
        }
        
        // Exposer la fonction nextFact globalement
        window.nextFact = nextFact;
        
        // Démarrer le timer
        if (timerElement) {
            timerInterval = setInterval(() => {
                timerWidth += 1;
                timerElement.style.width = `${timerWidth}%`;
                
                if (timerWidth >= 100) {
                    nextFact();
                    timerWidth = 0;
                }
            }, 100); // 10 secondes au total (100 * 100ms)
        }
        
        // Afficher le premier fait
        displayFact(currentFactIndex);
    }
}

/**
 * Effets de défilement et animations au scroll
 */
function initScrollEffects() {
    // Effet de parallaxe pour le hero
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            if (scrollPosition < heroSection.offsetHeight) {
                heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
            }
        });
    }
    
    // Animation des cartes au défilement
    const cards = document.querySelectorAll('.news-card, .page-card, .timeline-item, .timeline-event');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
    
    // Effet de flottement pour certains éléments
    const floatingElements = document.querySelectorAll('.hero-scroll-indicator, .fact-content i, .quote-content i');
    
    floatingElements.forEach(element => {
        element.style.animation = 'float 3s ease-in-out infinite';
    });
}

/**
 * Gestion du défilement depuis le hero
 */
function initHeroScroll() {
    const scrollIndicator = document.querySelector('.hero-scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const heroSection = document.querySelector('.hero-section');
            const nextSection = heroSection.nextElementSibling;
            
            if (nextSection) {
                window.scrollTo({
                    top: nextSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
}

/**
 * Amélioration de l'accessibilité
 */
function enhanceAccessibility() {
    // Ajouter des attributs ARIA pour le menu
    const menuItems = document.querySelectorAll('.main-menu > li');
    
    menuItems.forEach(item => {
        const link = item.querySelector('a');
        const submenu = item.querySelector('.submenu');
        
        if (submenu) {
            link.setAttribute('aria-haspopup', 'true');
            link.setAttribute('aria-expanded', 'false');
            
            link.addEventListener('click', function() {
                const expanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !expanded);
            });
        }
    });
    
    // Améliorer la navigation au clavier
    const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary)';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
        });
    });
}

// Appeler la fonction d'accessibilité après le chargement complet
window.addEventListener('load', enhanceAccessibility);

// Gestion du chargement des polices
document.fonts.ready.then(function() {
    document.body.classList.add('fonts-loaded');
});

// Gestion du mode sombre
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}

// Écouter les changements de préférence de thème
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});
 document.getElementById('learnMoreBtn').addEventListener('click', function () {
      alert("Les recherches montrent que certaines modifications épigénétiques peuvent être transmises aux générations futures.");
    });
    document.getElementById('pollutionFact').addEventListener('click', function () {
    alert("Chaque année, plus de 8 millions de tonnes de plastique finissent dans les océans, soit l’équivalent d’un camion-poubelle chaque minute.");
  });
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mainMenu = document.querySelector(".main-menu");
  const submenuToggles = document.querySelectorAll(".submenu-toggle");

  // Toggle menu principal mobile
  menuToggle.addEventListener("click", () => {
    mainMenu.classList.toggle("show");
  });

  // Toggle sous-menu mobile
  submenuToggles.forEach(toggle => {
    toggle.addEventListener("click", e => {
      if(window.innerWidth <= 768) {
        e.preventDefault(); // bloquer lien
        const parentLi = toggle.parentElement;
        parentLi.classList.toggle("submenu-open");
      }
    });
  });

  // Fermer menu si clic en dehors (optionnel)
  document.addEventListener("click", e => {
    if (!mainMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      mainMenu.classList.remove("show");
      submenuToggles.forEach(toggle => {
        toggle.parentElement.classList.remove("submenu-open");
      });
    }
  });
});
document.querySelectorAll('.has-submenu > a').forEach(menuLink => {
  menuLink.addEventListener('click', function(e) {
    e.preventDefault(); // éviter le comportement par défaut du lien

    const submenu = this.nextElementSibling;
    if (!submenu) return;

    // basculer l'affichage du sous-menu
    if (submenu.style.display === 'block') {
      submenu.style.display = 'none';
    } else {
      submenu.style.display = 'block';
    }
  });
});
