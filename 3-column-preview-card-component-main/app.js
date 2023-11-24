class Clone {
    constructor(artClass, title, text) {
        this.artClass = artClass;
        this.title = title;
        this.text = text;
    }

    render() {
        const mainElement = document.querySelector('.div');
        const sectionElement = document.querySelector('section');
        const articleElement = document.createElement('article');
        articleElement.classList.add(this.artClass);
        articleElement.innerHTML = `
            <img src="./images/icon-${this.artClass}.svg" alt="Icon ${this.title}">
            <h1>${this.title}</h1>
            <p class="text">${this.text}</p>
            <button class="${this.artClass}Btn">Learn More</button>
        `;
        sectionElement.appendChild(articleElement);
        mainElement.appendChild(sectionElement);

        return mainElement;
    }
}

const sedan = new Clone(
    'sedans',
    'Sedans',
    'Chose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
);

const suvs = new Clone(
    'suvs',
    'SUVs',
    'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
);

const luxury = new Clone(
    'luxury',
    'Luxury',
    'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
);

let rendering = [
    sedan.render(),
    suvs.render(),
    luxury.render()
];

rendering.forEach(e => {
    document.body.appendChild(e);
});