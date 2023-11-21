class Projects {
    constructor(title, aHref, imgSrc, imgAlt) {
        this.title = title;
        this.aHref = aHref;
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
    }

    render() {
        const mainElement = document.querySelector('main');
        const sectionElement = document.querySelector('section');
        const article = document.querySelector('.subSection');
        const divElement = document.createElement('div');
        divElement.innerHTML=`
            <p>${this.title}</p>
            <a href="${this.aHref}">
                <img src="img-challenges/tarea${this.imgSrc}" alt="${this.imgAlt}">
            </a>
        `;
        article.appendChild(divElement);
        sectionElement.appendChild(article);
        mainElement.appendChild(sectionElement);
        return mainElement;
    }
}

export const project1 = new Projects(
    'Sumary Components',
    'results-summary-component-main',
    '1.png',
    'Sumary Components',
);

export const project2 = new Projects(
    'Preview Card Component',
    'product-preview-card-component-main', 
    '2.png', 
    'Preview Card Component'
);

export const project3 = new Projects(
    'Interactive Rating Component',
    'interactive-rating-component-main',
    '3.png',
    'Interactive Rating Component'
);

export const project4 = new Projects(
    'Qr Code Component',
    'qr-code-component-main',
    '4.png',
    'Qr Code Component'
);

export const project5 = new Projects(
    'NFT Card Component',
    'nft-preview-card-component-main',
    '5.png',
    'NFT Card Component'
);

export const project6 = new Projects(
    'Order Summary Component',
    'order-summary-component-main',
    '6.png',
    'Order Summary Component'
);

export const project7 = new Projects(
    'Stats Preview Card',
    'stats-preview-card-component-main',
    '7.png',
    'Stats Preview Card'
);

export const project8 = new Projects(
    'NFT Card Component',
    'nft-preview-card-component-main',
    '8.png',
    'NFT Card Component'
);

export const project9 = new Projects(
    'NFT Card Component',
    'nft-preview-card-component-main',
    '9.png',
    'NFT Card Component'
);

export const project10 = new Projects(
    'NFT Card Component',
    'nft-preview-card-component-main',
    '10.png',
    'NFT Card Component'
);

export const project11 = new Projects(
    'NFT Card Component',
    'nft-preview-card-component-main',
    '11.png',
    'NFT Card Component'
);

export const project12 = new Projects(
    'NFT Card Component',
    'nft-preview-card-component-main',
    '12.png',
    'NFT Card Component'
);

export const project13 = new Projects(
    'NFT Card Component',
    'nft-preview-card-component-main',
    '13.png',
    'NFT Card Component'
);

export const project14 = new Projects(
    'NFT Card Component',
    'nft-preview-card-component-main',
    '14.png',
    'NFT Card Component'
);

export const project15 = new Projects(
    'NFT Card Component',
    'nft-preview-card-component-main',
    '15.png',
    'NFT Card Component'
);