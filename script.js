// =========================
// DZDT Landing Page Script
// =========================

// Copy Contract
function copyContract() {

    const contract =
        "CiAHefHCYdNrj9ne9JrSDpNr684YKaH58p5b9HvBpump";

    navigator.clipboard.writeText(contract);

    alert("Contract copied!");
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

question.addEventListener("click",()=>{

item.classList.toggle("active");

});

});
// =========================
// FAQ Accordion
// =========================

const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const answer = button.nextElementSibling;

        const icon = button.querySelector("i");

        if (answer.style.display === "block") {

            answer.style.display = "none";

            icon.classList.remove("fa-minus");

            icon.classList.add("fa-plus");

        } else {

            document.querySelectorAll(".faq-answer").forEach((item) => {

                item.style.display = "none";

            });

            document.querySelectorAll(".faq-question i").forEach((i) => {

                i.classList.remove("fa-minus");

                i.classList.add("fa-plus");

            });

            answer.style.display = "block";

            icon.classList.remove("fa-plus");

            icon.classList.add("fa-minus");

        }

    });

});


// =========================
// Navbar Background
// =========================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.background = "rgba(5,12,25,.95)";

        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    } else {

        nav.style.background = "rgba(7,17,31,.70)";

        nav.style.boxShadow = "none";

    }

});


// =========================
// Particles
// =========================

particlesJS("particles-js", {

    particles: {

        number: {

            value: 70,

            density: {

                enable: true,

                value_area: 800

            }

        },

        color: {

            value: "#00ff88"

        },

        shape: {

            type: "circle"

        },

        opacity: {

            value: 0.25

        },

        size: {

            value: 3

        },

        line_linked: {

            enable: true,

            distance: 170,

            color: "#00ff88",

            opacity: 0.18,

            width: 1

        },

        move: {

            enable: true,

            speed: 2

        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {

                enable: true,

                mode: "grab"

            },

            onclick: {

                enable: true,

                mode: "push"

            }

        },

        modes: {

            grab: {

                distance: 180,

                line_linked: {

                    opacity: 0.5

                }

            },

            push: {

                particles_nb: 4

            }

        }

    },

    retina_detect: true

});
