// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Active navbar link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Contact form
const form = document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",function(){

alert("Thank you! Your message has been sent successfully.");

});

}

// Hero animation
window.addEventListener("load",()=>{

document.querySelector(".hero-content").style.opacity="1";
document.querySelector(".hero-content").style.transform="translateY(0)";

});
