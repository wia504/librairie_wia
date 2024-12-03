// Sélectionner les éléments
let searchForm = document.querySelector(".search-form");
let shoppingCart = document.querySelector(".shopping-cart");
let loginForm = document.querySelector(".login-form");
let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");
let loginBtn = document.querySelector("#login-btn");
let closeBtns = document.querySelectorAll(".close-btn");  // Si vous avez des boutons pour fermer les éléments, comme un bouton de fermeture dans le panier

// Fonction pour ouvrir/fermer le menu (menu mobile)
menuBtn.onclick = () => {
    navbar.classList.toggle("active");  // Ouvre/ferme le menu
    closeAllExcept(navbar);  // Ferme tous les autres éléments
};

// Fonction pour fermer tous les éléments sauf celui passé en paramètre
function closeAllExcept(except) {
    const elements = [searchForm, shoppingCart, loginForm, navbar];
    elements.forEach(element => {
        if (element !== except) {
            element.classList.remove("active");  // Ferme tous les éléments qui ne sont pas celui passé en paramètre
        }
    });
}
loginBtn.onclick = () => {
    loginForm.classList.toggle("active");  // Ouvre/ferme le formulaire de connexion
    closeAllExcept(loginForm);  // Ferme les autres éléments
}

// Fermer tous les éléments quand l'utilisateur fait défiler la page
window.onscroll = () => {
    closeAllExcept(null); // Ferme tous les éléments
};

// Événements pour ouvrir/fermer les éléments
document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");  // Ouvre/ferme la barre de recherche
    shoppingCart.classList.remove("active");  // Ferme le panier
    loginForm.classList.remove("active");  // Ferme le formulaire de connexion
    closeAllExcept(searchForm);  // Ferme les autres éléments
}

document.querySelector("#cart-btn").onclick = () => {
    shoppingCart.classList.toggle("active");  // Ouvre/ferme le panier
    searchForm.classList.remove("active");  // Ferme la barre de recherche
    loginForm.classList.remove("active");  // Ferme le formulaire de connexion
    closeAllExcept(shoppingCart);  // Ferme les autres éléments
}

document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle("active");  // Ouvre/ferme le formulaire de connexion
    searchForm.classList.remove("active");  // Ferme la barre de recherche
    shoppingCart.classList.remove("active");  // Ferme le panier
    closeAllExcept(loginForm);  // Ferme les autres éléments
}

// Fermer le menu mobile si un autre élément est cliqué ou lors du clic sur l'icône de fermeture
closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        navbar.classList.remove("active");  // Ferme le menu mobile
    });
});

// Fermer tous les éléments lorsque l'utilisateur fait défiler la page
window.onscroll = () => {
    closeAllExcept(null);  // Ferme tous les éléments
};

// Initialisation des Swipers (aucun changement)
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});
