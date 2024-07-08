const buttonBackToTopHTML = `<div class="button-icon" id="myBtn">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15.7131L18.01 9.70309L16.597 8.28809L12 12.8881L7.40399 8.28809L5.98999 9.70209L12 15.7131Z" fill="#fff"></path>
        </svg>
    </div>`;

class ButtonBackToTop extends HTMLElement {
    connectedCallback() {
        this.innerHTML = buttonBackToTopHTML;
    }
}
customElements.define("btn-back-to-top", ButtonBackToTop);
