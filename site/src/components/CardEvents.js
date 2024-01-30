class CardEvents extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build())
    }

    build() {
        const componentRoot = document.createElement("div"); //section-eventos-colunas
        componentRoot.setAttribute("class", "section-eventos-colunas");
        const cardEventsTitulo = document.createElement("div");

        cardEventsTitulo.setAttribute("class", "section-eventos-card-titulo");
        const h2 = document.createElement("h2");
        h2.setAttribute("innerHTML",'TITULO TESTE');

        const cardEventsLogo = document.createElement("div");
        cardEventsLogo.setAttribute("class", "section-eventos-card-logo");

        const cardEventsInfo = document.createElement("div");
        cardEventsInfo.setAttribute("class", "section-eventos-card-info");

        const cardEventsRodape = document.createElement("div");
        cardEventsRodape.setAttribute("class", "section-eventos-card-rodape");

        componentRoot.appendChild(cardEventsTitulo);
        cardEventsTitulo.appendChild(h2);

        componentRoot.appendChild(cardEventsLogo);

        componentRoot.appendChild(cardEventsInfo);

        componentRoot.appendChild(cardEventsRodape);

        return componentRoot;
    }

    styles() {

    }
}

customElements.define('card-events', CardEvents);