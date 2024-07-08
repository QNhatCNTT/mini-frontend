const dataTab = [
    {
        index: 0,
        label: "Services",
    },
    {
        index: 1,
        label: "About Cesis",
    },
    {
        index: 2,
        label: "Purchase Now",
    },
];

const dataServiceMockup = [
    {
        index: 0,
        serviceName: "branding",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
        <path d="M6 5.88235C6 4 6 4 8 4H16C18 4 18 4 18 5.88235V20L12 14.3529L6 20V5.88235Z" stroke="#817BFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 5.88235C6 4 6 4 8 4H16C18 4 18 4 18 5.88235V20L12 14.3529L6 20V5.88235Z" stroke="url(#paint0_linear_43_4)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear_43_4" x1="16.375" y1="12" x2="7.62504" y2="12" gradientUnits="userSpaceOnUse">
            <stop stop-color="#69D2E7" stop-opacity="0"/>
            <stop offset="0.0001" stop-color="#69D2E7" stop-opacity="0.025"/>
            <stop offset="1" stop-color="#69D2E7"/>
          </linearGradient>
        </defs>
      </svg>`,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        index: 1,
        serviceName: "web design",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
        <path d="M25.7 0C26.3 0 26.8 0.199976 27.3 0.599976C27.7 1.09998 27.9 1.59995 27.9 2.19995V17.2C27.9 17.9 27.7 18.4 27.3 18.8C26.8 19.3 26.3 19.5 25.7 19.5H16.7L17.4 21.8H20.8C21.1 21.8 21.4 21.9 21.6 22.1C21.8 22.3 21.9 22.6 21.9 22.9C21.9 23.2 21.8 23.5 21.6 23.7C21.4 23.9 21.1 24 20.8 24H8C7.7 24 7.50005 23.9 7.30005 23.7C7.00005 23.5 6.90002 23.2 6.90002 22.9C6.90002 22.6 7.00005 22.3 7.30005 22.1C7.50005 21.9 7.7 21.8 8 21.8H11.4L12.2 19.5H3.19995C2.49995 19.5 1.99998 19.3 1.59998 18.8C1.09998 18.4 0.900024 17.9 0.900024 17.2V2.19995C0.900024 1.59995 1.09998 1.09998 1.59998 0.599976C1.99998 0.199976 2.49995 0 3.19995 0H25.7ZM24.9 16.5V3H3.90002V16.5H24.9Z" fill="#69D2E7"/>
        <path d="M25.7 0C26.3 0 26.8 0.199976 27.3 0.599976C27.7 1.09998 27.9 1.59995 27.9 2.19995V17.2C27.9 17.9 27.7 18.4 27.3 18.8C26.8 19.3 26.3 19.5 25.7 19.5H16.7L17.4 21.8H20.8C21.1 21.8 21.4 21.9 21.6 22.1C21.8 22.3 21.9 22.6 21.9 22.9C21.9 23.2 21.8 23.5 21.6 23.7C21.4 23.9 21.1 24 20.8 24H8C7.7 24 7.50005 23.9 7.30005 23.7C7.00005 23.5 6.90002 23.2 6.90002 22.9C6.90002 22.6 7.00005 22.3 7.30005 22.1C7.50005 21.9 7.7 21.8 8 21.8H11.4L12.2 19.5H3.19995C2.49995 19.5 1.99998 19.3 1.59998 18.8C1.09998 18.4 0.900024 17.9 0.900024 17.2V2.19995C0.900024 1.59995 1.09998 1.09998 1.59998 0.599976C1.99998 0.199976 2.49995 0 3.19995 0H25.7ZM24.9 16.5V3H3.90002V16.5H24.9Z" fill="url(#paint0_linear_1_101)"/>
        <defs>
          <linearGradient id="paint0_linear_1_101" x1="0.900024" y1="12" x2="27.9" y2="12" gradientUnits="userSpaceOnUse">
            <stop stop-color="#817BFF" stop-opacity="0"/>
            <stop offset="1" stop-color="#817BFF"/>
          </linearGradient>
        </defs>
      </svg>`,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        index: 2,
        serviceName: "web development",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="27" height="18" viewBox="0 0 27 18" fill="none">
        <path d="M18 0C19.6 0 21.1 0.399951 22.5 1.19995C23.9 1.99995 25 3.1 25.8 4.5C26.6 5.9 27 7.4 27 9C27 10.6 26.6 12.1 25.8 13.5C25 14.9 23.9 16 22.5 16.8C21.1 17.6 19.6 18 18 18H9C7.4 18 5.9 17.6 4.5 16.8C3.1 16 2.10001 14.9 1.20001 13.5C0.400012 12.1 0 10.6 0 9C0 7.4 0.400012 5.9 1.20001 4.5C2.10001 3.1 3.1 1.99995 4.5 1.19995C5.9 0.399951 7.4 0 9 0H18ZM3 9C3 10.1 3.30002 11.1 3.80002 12C4.40002 12.9 5.1 13.7 6 14.2C6.9 14.7 7.9 15 9 15C10.1 15 11.1 14.7 12 14.2C13 13.7 13.7 12.9 14.2 12C14.8 11.1 15 10.1 15 9C15 7.9 14.8 6.9 14.2 6C13.7 5 13 4.30005 12 3.80005C11.1 3.30005 10.1 3 9 3C7.9 3 6.9 3.30005 6 3.80005C5.1 4.30005 4.40002 5 3.80002 6C3.30002 6.9 3 7.9 3 9ZM18 15C19.1 15 20.1 14.7 21 14.2C22 13.7 22.7 12.9 23.2 12C23.8 11.1 24 10.1 24 9C24 7.9 23.8 6.9 23.2 6C22.7 5 22 4.30005 21 3.80005C20.1 3.30005 19.1 3 18 3H15.7C16.7 4.1 17.4 5.40005 17.8 6.80005C18.1 8.30005 18.1 9.69995 17.8 11.2C17.4 12.6 16.7 13.9 15.7 15H18Z" fill="#69D2E7"/>
        <path d="M18 0C19.6 0 21.1 0.399951 22.5 1.19995C23.9 1.99995 25 3.1 25.8 4.5C26.6 5.9 27 7.4 27 9C27 10.6 26.6 12.1 25.8 13.5C25 14.9 23.9 16 22.5 16.8C21.1 17.6 19.6 18 18 18H9C7.4 18 5.9 17.6 4.5 16.8C3.1 16 2.10001 14.9 1.20001 13.5C0.400012 12.1 0 10.6 0 9C0 7.4 0.400012 5.9 1.20001 4.5C2.10001 3.1 3.1 1.99995 4.5 1.19995C5.9 0.399951 7.4 0 9 0H18ZM3 9C3 10.1 3.30002 11.1 3.80002 12C4.40002 12.9 5.1 13.7 6 14.2C6.9 14.7 7.9 15 9 15C10.1 15 11.1 14.7 12 14.2C13 13.7 13.7 12.9 14.2 12C14.8 11.1 15 10.1 15 9C15 7.9 14.8 6.9 14.2 6C13.7 5 13 4.30005 12 3.80005C11.1 3.30005 10.1 3 9 3C7.9 3 6.9 3.30005 6 3.80005C5.1 4.30005 4.40002 5 3.80002 6C3.30002 6.9 3 7.9 3 9ZM18 15C19.1 15 20.1 14.7 21 14.2C22 13.7 22.7 12.9 23.2 12C23.8 11.1 24 10.1 24 9C24 7.9 23.8 6.9 23.2 6C22.7 5 22 4.30005 21 3.80005C20.1 3.30005 19.1 3 18 3H15.7C16.7 4.1 17.4 5.40005 17.8 6.80005C18.1 8.30005 18.1 9.69995 17.8 11.2C17.4 12.6 16.7 13.9 15.7 15H18Z" fill="url(#paint0_linear_1_105)"/>
        <defs>
          <linearGradient id="paint0_linear_1_105" x1="0" y1="9" x2="27" y2="9" gradientUnits="userSpaceOnUse">
            <stop stop-color="#817BFF" stop-opacity="0"/>
            <stop offset="1" stop-color="#817BFF"/>
          </linearGradient>
        </defs>
      </svg>`,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        index: 3,
        serviceName: "online marketing",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
        <path d="M28 1.5C28.2 2.3 28.3 3.10002 28.4 3.90002C28.4 4.40002 28.4 5.19998 28.4 6.09998C28.4 8.69998 27.7 11 26.4 13C25.3 14.6 23.6 16.2 21.4 17.6V23.3C21.4 23.8 21.3 24.3 21 24.7C20.8 25.1 20.4 25.4 19.9 25.7L14.6 28.4C14.1 28.6 13.7 28.5 13.3 28.3C12.9 28 12.6999 27.7 12.6999 27.2V22C11.7999 22.4 11.1 22.7 10.6 23C10.4 23 10.3 23.1 10.1 23C9.89995 23 9.69995 22.9 9.59995 22.8L6.09995 19.3C5.99995 19.2 5.9 19 5.9 18.8C5.9 18.6 5.9 18.5 5.9 18.3C6.2 17.7 6.6 17 6.9 16.2H1.69993C1.29993 16.2 0.899951 16 0.599951 15.6C0.399951 15.2 0.399951 14.8 0.599951 14.3L3.30002 8.90002C3.50002 8.50002 3.79993 8.10002 4.19993 7.90002C4.59993 7.60002 5.09995 7.5 5.59995 7.5H11.3C12.7 5.3 14.3 3.6 15.9 2.5C17.9 1.2 20.2 0.5 22.8 0.5C23.8 0.5 24.5 0.5 25 0.5C25.8 0.6 26.6 0.700024 27.4 0.900024C27.7 0.900024 28 1.2 28 1.5ZM22.3 9.19995C23 9.19995 23.5999 9 24.1999 8.5C24.6999 8 24.9 7.29998 24.9 6.59998C24.9 5.89998 24.6999 5.30005 24.1999 4.80005C23.5999 4.20005 23 4 22.3 4C21.6 4 20.9 4.20005 20.4 4.80005C19.9 5.30005 19.6999 5.89998 19.6999 6.59998C19.6999 7.29998 19.9 8 20.4 8.5C20.9 9 21.6 9.19995 22.3 9.19995Z" fill="url(#paint0_linear_1_110)"/>
        <path d="M28 1.5C28.2 2.3 28.3 3.10002 28.4 3.90002C28.4 4.40002 28.4 5.19998 28.4 6.09998C28.4 8.69998 27.7 11 26.4 13C25.3 14.6 23.6 16.2 21.4 17.6V23.3C21.4 23.8 21.3 24.3 21 24.7C20.8 25.1 20.4 25.4 19.9 25.7L14.6 28.4C14.1 28.6 13.7 28.5 13.3 28.3C12.9 28 12.6999 27.7 12.6999 27.2V22C11.7999 22.4 11.1 22.7 10.6 23C10.4 23 10.3 23.1 10.1 23C9.89995 23 9.69995 22.9 9.59995 22.8L6.09995 19.3C5.99995 19.2 5.9 19 5.9 18.8C5.9 18.6 5.9 18.5 5.9 18.3C6.2 17.7 6.6 17 6.9 16.2H1.69993C1.29993 16.2 0.899951 16 0.599951 15.6C0.399951 15.2 0.399951 14.8 0.599951 14.3L3.30002 8.90002C3.50002 8.50002 3.79993 8.10002 4.19993 7.90002C4.59993 7.60002 5.09995 7.5 5.59995 7.5H11.3C12.7 5.3 14.3 3.6 15.9 2.5C17.9 1.2 20.2 0.5 22.8 0.5C23.8 0.5 24.5 0.5 25 0.5C25.8 0.6 26.6 0.700024 27.4 0.900024C27.7 0.900024 28 1.2 28 1.5ZM22.3 9.19995C23 9.19995 23.5999 9 24.1999 8.5C24.6999 8 24.9 7.29998 24.9 6.59998C24.9 5.89998 24.6999 5.30005 24.1999 4.80005C23.5999 4.20005 23 4 22.3 4C21.6 4 20.9 4.20005 20.4 4.80005C19.9 5.30005 19.6999 5.89998 19.6999 6.59998C19.6999 7.29998 19.9 8 20.4 8.5C20.9 9 21.6 9.19995 22.3 9.19995Z" fill="url(#paint1_linear_1_110)"/>
        <defs>
          <linearGradient id="paint0_linear_1_110" x1="28.4" y1="14.5045" x2="0.449951" y2="14.5045" gradientUnits="userSpaceOnUse">
            <stop stop-color="#69D2E7"/>
            <stop offset="1" stop-color="#3B7581"/>
          </linearGradient>
          <linearGradient id="paint1_linear_1_110" x1="14.425" y1="28.509" x2="14.425" y2="0.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#817BFF" stop-opacity="0"/>
            <stop offset="1" stop-color="#817BFF"/>
          </linearGradient>
        </defs>
      </svg>`,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
];

const aboutUsHTML = `<div class="about-us-container">
        <div class="about-us-title-container">
            <div class="about-us-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="3" viewBox="0 0 65 3" fill="none">
                    <path d="M64 4V6H4V4H64Z" fill="black" stroke="black" stroke-width="7.6" stroke-miterlimit="100" />
                </svg>
                <p>ABOUT US</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="3" viewBox="0 0 65 3" fill="none">
                    <path d="M64 4V6H4V4H64Z" fill="black" stroke="black" stroke-width="7.6" stroke-miterlimit="100" />
                </svg>
            </div>
            <div class="about-us-description">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </div>
        </div>
        <div class="about-us-service">
            <div class="service-list-tab" id="service-list-tab">
            ${dataTab
                .map((item) => {
                    return `<div class="tab-item" data-index=${item.index}>${item.label}</div>`;
                })
                .join("")}
            </div>
            <div class="service-list-content">
                ${dataServiceMockup
                    .map((item) => {
                        return `
                <div key=${item.index} class="service-item">
                    <div class="service-icon">
                        ${item.icon}
                    </div>
                    <div class="service-content">
                        <p>${item.serviceName}</p>
                        <p>${item.description}</p>
                    </div>
                </div>`;
                    })
                    .join("")}
            </div>
        </div>
    </div>`;
class AboutUs extends HTMLElement {
    connectedCallback() {
        this.innerHTML = aboutUsHTML;
    }
}
customElements.define("home-about-us", AboutUs);
