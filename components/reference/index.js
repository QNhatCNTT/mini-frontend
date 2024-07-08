const referenceHTML = `<div class="about-us-container">
        <div class="about-us-title-container">
            <div class="about-us-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="3" viewBox="0 0 65 3" fill="none">
                    <path d="M64 4V6H4V4H64Z" fill="black" stroke="black" stroke-width="7.6" stroke-miterlimit="100" />
                </svg>
                <p>reference</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="3" viewBox="0 0 65 3" fill="none">
                    <path d="M64 4V6H4V4H64Z" fill="black" stroke="black" stroke-width="7.6" stroke-miterlimit="100" />
                </svg>
            </div>
            <div class="about-us-description">
                <p class="reference">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p class="reference">Lorem Ipsum has been the industry's standard dummy text</p>
            </div>
        </div>
        <div class="reference-brands">
            <div class="brand-item">
                <img src="images/brands/apple-brand.jpg" alt="apple-brand"></img>
            </div>
            <div class="brand-item">
                <img src="images/brands/aqua-brand.jpg" alt="aqua-brand"></img>
            </div>
            <div class="brand-item">
                <img src="images/brands/beko-brand.jpg" alt="beko-brand"></img>
            </div>
            <div class="brand-item">
                <img src="images/brands/casper-brand.jpg" alt="casper-brand"></img>
            </div>
			<div class="brand-item">
                <img src="images/brands/samsung-brand.jpg" alt="samsung-brand"></img>
            </div>
            <div class="brand-item">
                <img src="images/brands/daikin-brand.jpg" alt="daikin-brand"></img>
            </div>
            <div class="brand-item">
                <img src="images/brands/dell-brand.jpg" alt="dell-brand"></img>
            </div>
			<div class="brand-item">
                <img src="images/brands/LG-brand.jpg" alt="LG-brand"></img>
            </div>
			<div class="brand-item">
                <img src="images/brands/panasonic-brand.jpg" alt="panasonic-brand"></img>
            </div>
            <div class="brand-item">
                <img src="images/brands/sharp-brand.jpg" alt="sharp-brand"></img>
            </div>
        </div>
    </div>`;
class Reference extends HTMLElement {
    connectedCallback() {
        this.innerHTML = referenceHTML;
    }
}
customElements.define("home-reference", Reference);
