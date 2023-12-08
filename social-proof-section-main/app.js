// star
class Aside {
    constructor(sectionClass, text) {
        this.sectionClass = sectionClass;
        this.text = text;
    }

    render() {
        const mainElement = document.querySelector('main');
        const asideElement = document.querySelector('.stars');
        const sectionElement = document.createElement('section');
        sectionElement.classList.add(this.sectionClass);
        sectionElement.innerHTML = `
                <ul class="star">
                    <li><img src="./images/icon-star.svg" alt="start"></li>
                    <li><img src="./images/icon-star.svg" alt="start"></li>
                    <li><img src="./images/icon-star.svg" alt="start"></li>
                    <li><img src="./images/icon-star.svg" alt="start"></li>
                    <li><img src="./images/icon-star.svg" alt="start"></li>
                </ul>
                <p class="rated">Rated 5 Stars in ${this.text}</p>
        `;
        asideElement.appendChild(sectionElement);
        mainElement.appendChild(asideElement);
        return mainElement;
    }
}

const review = new Aside(
    'review',
    'Reviews'
);
const guru = new Aside(
    'guru',
    'Report Guru'
);
const bestTech = new Aside(
    'bestTech',
    'BestTech'
);

let rendering = [
    review.render(),
    guru.render(),
    bestTech.render(),
];

rendering.forEach(e => {
    document.body.append(e);
});

// card
class Card {
    constructor(cardClass, img, h2, pText) {
        this.cardClass = cardClass;
        this.img = img;
        this.h2 = h2;
        this.pText = pText;
    }
    render() {
        const mainElement = document.querySelector('main');
        const articleElenent = document.querySelector('.cards');
        const section2Element = document.createElement('section');
        section2Element.classList.add(this.cardClass);
        section2Element.innerHTML = `
            <div>
                <picture class="profile">
                    <img src="./images/image-${this.img}.jpg" alt="profile">
                </picture>
                <h2>${this.h2}</h2>
                <h3>Verified Buyer</h3>
            </div>
            <p>${this.pText}</p>
        `;
        articleElenent.appendChild(section2Element);
        mainElement.appendChild(articleElenent);
        return mainElement;
    }
}

const user1 = new Card(
    'first',
    'colton',
    'Colton Smith',
    '"We needed the same printed design as the one we had ordered a week prior.Not only did they find the original order, but we also received it in time. Excellent!"'
);
const user2 = new Card(
    'second',
    'irene',
    'Irene Roberts',
    '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."'
);
const user3 = new Card(
    'third',
    'anne',
    'Anne Wallace',
    '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"'
);

let rendering2 = [
    user1.render(),
    user2.render(),
    user3.render()
];

// rendering2.forEach(e => {
//     document.body.appendChild(e);
// });