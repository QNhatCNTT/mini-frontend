const dataSlide = [
    {
        index: 0,
        image: "images/carouses/example-1.jpg",
    },
    {
        index: 1,
        image: "images/carouses/example-2.jpg",
    },
    {
        index: 2,
        image: "images/carouses/example-3.jpg",
    },
    {
        index: 3,
        image: "images/carouses/example-4.jpg",
    },
];

const bannerCarouseHTML = `<div class="slide-container">
        <div class="slide">
        ${dataSlide
            .map((slide) => {
                return `
            <div key=${slide.index} class="item" data-index=${slide.index} style="background-image: url(${slide.image});">
                <div class="content">
                    <div class="title">
                        <p class="name">WE ARE KILALA DESIGN</p>
                        <p class="des">SUPER EASY TO BUILD YOUR DESIGN</p>
                    </div>
                    <button>PURCHASE NOW</button>
                </div>
            </div>`;
            })
            .join("")}
        </div>

        <div class="button-dot">
            ${dataSlide
                .map((slide) => {
                    return `<div key=${slide.index} data-slide=${slide.index} class="dots__dot"></div>`;
                })
                .join("")}
        </div>
    </div>`;
class BannerCarouse extends HTMLElement {
    connectedCallback() {
        this.innerHTML = bannerCarouseHTML;
    }
}
customElements.define("home-carouse", BannerCarouse);
