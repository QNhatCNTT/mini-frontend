(function () {
    "use strict";

    //dom loaded
    try {
        document.addEventListener("DOMContentLoaded", function () {
            navHighlighter();
        });
    } catch (error) {
        console.log("Error: ", error);
    }

    try {
        const links = document.querySelectorAll("#navbar a");
        links.forEach((link) => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const targetId = link.getAttribute("data-target");
                functionToggleDrawer();
                document.getElementById(targetId).scrollIntoView({
                    behavior: "smooth",
                });
            });
        });
    } catch (error) {
        console.log("Error: ", error);
    }

    function activeLink(currentPage) {
        const links = document.querySelectorAll("#navbar a");
        links.forEach((link) => {
            const targetId = link.getAttribute("data-target");
            if (currentPage !== targetId) {
                link.classList.remove("active");
            } else {
                link.classList.add("active");
            }
        });
    }

    function navHighlighter() {
        const sections = document.querySelectorAll("section[id]");
        const clientX = window.document.body.clientWidth;
        let scrollY = window.pageYOffset;
        sections.forEach((current, _) => {
            const offsetHeight = current.offsetHeight;
            const temp = clientX <= 1024 ? 60 : 80;
            const offsetTop = current.offsetTop - temp;
            let sectionId = current.id;

            if (scrollY > offsetTop && scrollY <= offsetTop + offsetHeight) {
                activeLink(sectionId);
            }
        });
    }

    try {
        window.addEventListener("scroll", function () {
            navHighlighter();
            const btnBackToTop = document.getElementById("myBtn");
            const scrollY = window.scrollY;

            if (scrollY > 200) {
                btnBackToTop.style.opacity = "1";
                btnBackToTop.style.visibility = "visible";
            } else {
                btnBackToTop.style.opacity = "0";
                btnBackToTop.style.visibility = "hidden";
            }
        });
    } catch (error) {
        console.log("Error: ", error);
    }

    //back to top
    try {
        const btnBackToTop = document.getElementById("myBtn");

        btnBackToTop.addEventListener("click", function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    } catch (error) {
        console.log("Error: ", error);
    }

    //slider

    try {
        const slider = document.querySelector(".slide");
        const slides = document.querySelectorAll(".item");

        let crnSlide = 0;
        const maxSlide = slides.length;

        const activateDot = function (slide) {
            document.querySelectorAll(".dots__dot").forEach((dot) => (dot.style.opacity = ".5"));
            document.querySelector(`.dots__dot[data-slide="${slide}"]`).style.opacity = "1";
        };

        slides.forEach((s, i) => {
            return (s.style.transform = `translateX(${100 * i}%)`);
        });
        // 0%, 100%. 200%. 300%

        const goToSlide = function (slide) {
            slides.forEach((s, i) => {
                if (i - slide === 0) {
                    s.querySelector(".content").style.display = "flex";
                } else {
                    s.querySelector(".content").style.display = "none";
                }
                return (s.style.transform = `translateX(${100 * (i - slide)}%)`);
            });
        };

        goToSlide(0);

        const nextSlide = function () {
            if (crnSlide === maxSlide - 1) {
                crnSlide = 0;
            } else {
                crnSlide++;
            }
            goToSlide(crnSlide);
            activateDot(crnSlide);
        };

        const prevSlide = function () {
            if (crnSlide === 0) {
                crnSlide = maxSlide - 1;
            } else {
                crnSlide--;
            }
            goToSlide(crnSlide);
            activateDot(crnSlide);
        };

        const dotContainer = document.querySelector(".button-dot");
        dotContainer.addEventListener("click", function (e) {
            if (e.target.classList.contains("dots__dot")) {
                const { slide } = e.target.dataset;
                goToSlide(slide);
                activateDot(slide);
            }
        });

        const dots = document.querySelector(".dots__dot");
        dots.style.opacity = "1";

        //phone slider
        let touchstartX = 0;
        let touchendX = 0;

        function handleGesture() {
            if (touchendX + 30 < touchstartX) nextSlide();
            if (touchendX > touchstartX + 30) prevSlide();
        }

        slider.addEventListener("touchstart", (e) => {
            touchstartX = e.changedTouches[0].screenX;
        });

        slider.addEventListener("touchend", (e) => {
            touchendX = e.changedTouches[0].screenX;
            handleGesture();
        });
    } catch (error) {
        console.log("Error: ", error);
    }

    try {
        let indexActive = 0;
        const listTab = document.getElementById("service-list-tab").querySelectorAll(".tab-item");
        listTab[indexActive].classList.add("active");
        listTab.forEach((tab) => {
            tab.addEventListener("click", function () {
                listTab[indexActive].classList.remove("active");
                tab.classList.add("active");
                indexActive = tab.getAttribute("data-index");
            });
        });
    } catch (error) {
        console.log("Error: ", error);
    }

    //submit form
    try {
        const myForm = document.getElementById("form-footer");
        myForm.addEventListener("submit", function (event) {
            event.preventDefault();
        });
    } catch (error) {
        console.log("Error: ", error);
    }

    try {
        const iconButtonHeader = document.getElementById("icon-button-header");
        iconButtonHeader.addEventListener("click", functionToggleDrawer);

        const drawerOverlay = document.getElementById("drawer-overlay");
        drawerOverlay.addEventListener("click", functionToggleDrawer);

        const iconClose = document.getElementById("drawer-close");
        iconClose.addEventListener("click", functionToggleDrawer);
    } catch (error) {
        console.log("Error: ", error);
    }

    function functionToggleDrawer() {
        const body = document.body;
        const drawerNav = document.getElementById("drawer-nav");
        const drawerOverlay = document.getElementById("drawer-overlay");
        const iconButtonHeader = document.getElementById("icon-button-header");
        iconButtonHeader.classList.toggle("rotate");
        drawerNav.classList.toggle("show");
        drawerOverlay.classList.toggle("show");
        const clientX = body.clientWidth;
        if (drawerNav.classList.contains("show") && clientX < 1025) {
            body.classList.add("hidden");
        } else {
            body.classList.remove("hidden");
        }
    }
})();
