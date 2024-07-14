// Components
import { Component } from "react";

// types

interface Image {
  title: string;
  aHref: string;
  imgSrc: string;
  imgAlt: string;
}

class Projects extends Component<Image> {
  constructor(props: Image) {
    super(props);
  }
  render() {
    const { title, aHref, imgSrc, imgAlt } = this.props;
    return (
      <div>
        <p>{title}</p>
        <a href={aHref}>
          <img
            src={`img-challenges/tarea${imgSrc}`}
            alt={imgAlt}
            className="w-[95%] h-[90%] object-contain"
          />
        </a>
      </div>
    );
  }
}

const projectData = [
  {
    title: "Sumary Components",
    aHref: "results-summary-component-main",
    imgSrc: "1.webp",
    imgAlt: "Sumary Components",
  },
  {
    title: "Preview Card Component",
    aHref: "product-preview-card-component-main",
    imgSrc: "2.webp",
    imgAlt: "Preview Card Component",
  },
  {
    title: "Interactive Rating Component",
    aHref: "interactive-rating-component-main",
    imgSrc: "3.webp",
    imgAlt: "Interactive Rating Component",
  },
  {
    title: "Qr Code Component",
    aHref: "qr-code-component-main",
    imgSrc: "4.webp",
    imgAlt: "Qr Code Component",
  },
  {
    title: "NFT Card Component",
    aHref: "nft-preview-card-component-main",
    imgSrc: "5.webp",
    imgAlt: "NFT Card Component",
  },
  {
    title: "Order Summary Component",
    aHref: "order-summary-component-main",
    imgSrc: "6.webp",
    imgAlt: "Order Summary Component",
  },
  {
    title: "Stats Preview Card",
    aHref: "stats-preview-card-component-main",
    imgSrc: "7.webp",
    imgAlt: "Stats Preview Card",
  },
  {
    title: "3-Column Card Component",
    aHref: "3-column-preview-card-component-main",
    imgSrc: "8.webp",
    imgAlt: "3-Column Card Component",
  },
  {
    title: "Profile card component",
    aHref: "profile-card-component-main",
    imgSrc: "9.webp",
    imgAlt: "Profile card component",
  },
  {
    title: "Social proof section",
    aHref: "social-proof-section-main",
    imgSrc: "10.webp",
    imgAlt: "Social proof section",
  },
  {
    title: "Article previw component",
    aHref: "article-preview-component-main",
    imgSrc: "11.webp",
    imgAlt: "Article previw component",
  },
  {
    title: "Four card feature section",
    aHref: "four-card-feature-section-main",
    imgSrc: "12.webp",
    imgAlt: "Four card feature section",
  },
  // {
  //   title: "NFT Card Component",
  //   aHref: "nft-preview-card-component-main",
  //   imgSrc: "13.webp",
  //   imgAlt: "NFT Card Component",
  // },
  // {
  //   title: "NFT Card Component",
  //   aHref: "nft-preview-card-component-main",
  //   imgSrc: "14.webp",
  //   imgAlt: "NFT Card Component",
  // },
  // {
  //   title: "NFT Card Component",
  //   aHref: "nft-preview-card-component-main",
  //   imgSrc: "15.webp",
  //   imgAlt: "NFT Card Component",
  // },
];

const App = () => {
  return (
    <div>
      {projectData.map((project, index) => (
        <Projects
          key={index}
          title={project.title}
          aHref={project.aHref}
          imgSrc={project.imgSrc}
          imgAlt={project.imgAlt}
        />
      ))}
    </div>
  );
};

export default App;
