const featureWorkHTML = `<div class="feature-work-container">
        <div class="feature-work-content" style="background-image: url(images/background-feauture.png);">
            <div class="feature-work-image">
                <img src="images/feature-work/image-1.png" alt="logo-1"></img>
                <img src="images/feature-work/image-2.png" alt="logo-2"></img>
            </div>
            <div class="feature-work-info">
                <p class="title">FEATURED WORK</p>
                <p class="name">KILALA Classic Demo</p>
                <p class="des">Print this page to PDF for the complete set of vectors. Or to use on the desktop, install FontAwesome.</p>
                <p class="des2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim:</p>
                <div class="content">
                    <div class="content-item">
                        <img src="images/feature-work/image-3.png" alt="logo-3"></img>
                        <div class="content-text">
                            <p>Beautiful Typography.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                    <div class="content-item">
                        <img src="images/feature-work/image-4.png" alt="logo-4"></img>
                        <div class="content-text">
                            <p>Layered PSD Files.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="feature-work-banner">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M15 11H25V6V1H15V11Z" stroke="black" stroke-width="2"/>
                <path d="M1 11H11V6V1H1V11Z" stroke="black" stroke-width="2"/>
                <path d="M15 25H25V20V15H15V25Z" stroke="black" stroke-width="2"/>
                <path d="M1 25H11V20V15H1V25Z" stroke="black" stroke-width="2"/>
            </svg>
            check all recent works</div>
    </div>`;
class FeatureWork extends HTMLElement {
    connectedCallback() {
        this.innerHTML = featureWorkHTML;
    }
}
customElements.define("home-feature-work", FeatureWork);
