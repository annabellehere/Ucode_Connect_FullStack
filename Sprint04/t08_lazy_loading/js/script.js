const ph = document.querySelectorAll("img");
const notif = document.querySelector(".bar");

window.addEventListener("scroll", check);    
check();

function check() {
    ph.forEach(function (image) {
        const imagePosition = image.getBoundingClientRect();
        const src = image.getAttribute("data-src");
        if (imagePosition.top < window.innerHeight && src) {
                image.src = src;
                image.onload = function () {
                    image.removeAttribute("data-src");
                    const loaded = document.querySelectorAll("img:not([data-src])").length;
                    notif.textContent = `${loaded} images loaded from 20`;
                    if (loaded === ph.length) {
                        notif.style.backgroundColor = "lightgreen";
                        setTimeout(function () {
                            notif.style.display = 'none';
                        }, 3000);
                    }
                };
        }
    });
}


