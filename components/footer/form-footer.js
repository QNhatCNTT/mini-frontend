const formFooterHTML = `<form class="form-footer" id="form-footer">
    <div class="form-footer-input">
        <input placeholder="Dwayne Johnson"></input>
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M7.30011 4.10027C4.80011 9.80027 9.60003 14.1003 9.60003 14.1003C9.60003 14.1003 10.6 15.2 9.70001 15.8C9.60001 15.7 10.1001 17.6003 6.50006 18.1003C2.90006 18.7003 2.20006 19.8002 1.50006 20.5002C0.800059 21.1002 0.900083 24.1003 0.900083 24.1003H24.0001C24.0001 24.1003 23.9 21.1002 23.2 20.5002C22.5 19.8002 21.8 18.7003 18.2 18.1003C14.6 17.6003 15.2 15.8004 15.2 15.7004C14.5 15.0004 15.3001 14.2004 15.3001 14.2004C15.3001 14.2004 20.1 9.70027 18.1 4.10027C16.2 -1.09973 9.50011 -0.89973 7.30011 4.10027Z" fill="#555555"/>
            </svg>
        </div>
    </div>
    <div class="form-footer-input">
        <input placeholder="example@gmail.com"></input>
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="19" viewBox="0 0 29 19" fill="none">
                <path d="M2.80005 0.100098C1.00005 0.100098 1 2 1 2L13.1 12C15.3 14.3 17 12 17 12L29 2.1001C29 0.100098 27.1 0.100098 27.1 0.100098H2.80005ZM0.900024 3.1001L6.90002 8.2002L8 9.1001L11.9 12.5C11.9 12.5 13.1 14.1001 14.9 14.1001C14.9 14.1001 16.4 14.4 18 12.5L21.9 9.1001L23.2 8L28.9 3.1001V16.1001C28.9 16.1001 28.8 18.1001 26.9 18.1001H2.80005C2.80005 18.1001 0.900024 18.1001 0.900024 16.1001V3.1001Z" fill="#555555"/>
            </svg>
        </div>
    </div>
    <div class="form-footer-input">
        <textarea placeholder="Your Message"></textarea>
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewBox="0 0 29 26" fill="none">
                <path d="M15.8 0C24 0 29 4.8002 29 10.7002C29 16.7002 24 21.2998 15.8 21.2998C14.8 21.2998 13.8 21.2334 12.8 21.1001C9.00005 25.9001 2.69995 25.1001 2.69995 25.1001C6.99995 23.1001 7.10002 19.5001 6.40002 19.1001C3.00002 17.1001 0.900024 14.1002 0.900024 10.7002C0.900024 4.8002 7.50005 0 15.8 0Z" fill="#555555"/>
            </svg>
        </div>
    </div>
    <button type="submit">SUBMIT</button>
</form>`;
class FormFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = formFooterHTML;
    }
}
customElements.define("form-footer", FormFooter);
