class DOM {
    constructor(sectionClass, divClass, h3, p,pClass, srcElement) {
        this.sectionClass = sectionClass;
        this.divClass = divClass;
        this.h3 = h3;
        this.p = p;
        this.pClass = pClass;
        this.srcElement = srcElement;
    }

    render() {
        const secctionGeneral = document.querySelector('section');
        const mainElement = document.querySelector('main');
        const sectionChild = document.createElement('article');
        sectionChild.classList.add(this.sectionClass);
        sectionChild.innerHTML = `
            <div class=color${this.divClass}></div>
            <div class="information">
                <h3>${this.h3}</h3>
                <p class="${this.pClass}">${this.p}</p>
                <picture>
                    <img src="images/icon-${this.srcElement}.svg" alt="${this.sectionClass}">
                </picture>
            </div>
        `;

        secctionGeneral.appendChild(mainElement);
        mainElement.appendChild(sectionChild);

        return secctionGeneral;
    }
}

const search = new DOM(
    'search',
    'Search',
    'Supervisor',
    'Monitors activity to identify project roadblocks',
    'none',
    'supervisor'
);

const house = new DOM(
    'house',
    'House',
    'Team Builder',
    'Scans our talent network to create the optimal team for your project',
    'none',
    'team-builder'
);

const ligth = new DOM(
    'ligth',
    'Ligth',
    'Karma',
    'Regulary evaluates our talent to ensure quality',
    'width',
    'karma'
);

const calculator = new DOM(
    'calculator',
    'Calculator',
    'Calculator',
    'Uses data from past projects to provide better delivery estimates',
    'width',
    'calculator'
);

let boxex = [
    search.render(),
    house.render(),
    ligth.render(),
    calculator.render(),
]

boxex.forEach(e => {
    document.body.appendChild(e);
})