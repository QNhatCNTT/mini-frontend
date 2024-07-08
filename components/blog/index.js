const blogHTML = `<div class="blog-container">
        <div class="blog-image-left" style="background-image: url(images/blogs/example-1.png);">
            <div class="blog-smark">Feature post</div>
            <div class="blog-content">
                <p class="blog-date">march 27, 2024</p>
                <p class="blog-title">How to improve your designs?</p>
                <p class="blog-des">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit...
                </p>
                <button class="read-more">read more</button>
            </div>
        </div>
        <div class="blog-image-right">
            <div class="blog-top" style="background-image: url(images/blogs/example-2.png);">
                <div class="blog-smark">popular</div>
                <div class="blog-content">
                    <p class="blog-date">march 27, 2023</p>
                    <p class="blog-title">How to make your design better?</p>
                </div>
            </div>
            <div class="blog-bottom">
                <p class="title">KILALA Resource</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="1" viewBox="0 0 100 1" fill="none">
                    <path d="M0 0H100V1H0V0Z" fill="#D70152" />
                </svg>
                <p class="des">
                    From nationally recognized brands to your favorite local shops, Kilala is trusted by many brands you
                    know and love.
                </p>
                <button>
                    ALL ARTCILES
                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                        <path
                            d="M0.866211 6.69559C0.866211 6.9216 0.964146 7.1476 1.13742 7.31334L6.10951 12.2779C6.29032 12.4512 6.48619 12.534 6.70466 12.534C7.17927 12.534 7.52581 12.195 7.52581 11.7355C7.52581 11.4944 7.43541 11.291 7.2772 11.1403L5.58217 9.42271L3.39746 7.42634L5.15276 7.53181H14.2833C14.7806 7.53181 15.1271 7.18527 15.1271 6.69559C15.1271 6.19838 14.7806 5.85184 14.2833 5.85184H5.15276L3.40499 5.95731L5.58217 3.96094L7.2772 2.2433C7.43541 2.09263 7.52581 1.88923 7.52581 1.64816C7.52581 1.18862 7.17927 0.849609 6.70466 0.849609C6.48619 0.849609 6.28278 0.932478 6.08691 1.12081L1.13742 6.07031C0.964146 6.23605 0.866211 6.46205 0.866211 6.69559Z"
                            fill="#757688"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>`;
class Blog extends HTMLElement {
    connectedCallback() {
        this.innerHTML = blogHTML;
    }
}
customElements.define("home-blog", Blog);
