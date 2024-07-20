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
        <a href={`/challenges/${aHref}-component`}>
          <img
            src={`cover-pages/tarea${imgSrc}`}
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
    aHref: "sumary",
    imgSrc: "1.webp",
    imgAlt: "Sumary Components",
  },
  {
    title: "Preview Card Component",
    aHref: "preview-card",
    imgSrc: "2.webp",
    imgAlt: "Preview Card Component",
  },
  {
    title: "Interactive Rating Component",
    aHref: "interactive-rating",
    imgSrc: "3.webp",
    imgAlt: "Interactive Rating Component",
  },
  {
    title: "Qr Code Component",
    aHref: "qr-code",
    imgSrc: "4.webp",
    imgAlt: "Qr Code Component",
  },
  {
    title: "NFT Card Component",
    aHref: "nft-preview-card",
    imgSrc: "5.webp",
    imgAlt: "NFT Card Component",
  },
  {
    title: "Order Summary Component",
    aHref: "order-summary",
    imgSrc: "6.webp",
    imgAlt: "Order Summary Component",
  },
  {
    title: "Stats Preview Card",
    aHref: "stats-preview-card",
    imgSrc: "7.webp",
    imgAlt: "Stats Preview Card",
  },
  {
    title: "3-Column Card Component",
    aHref: "3-column-preview-card",
    imgSrc: "8.webp",
    imgAlt: "3-Column Card Component",
  },
  {
    title: "Profile card component",
    aHref: "profile-card",
    imgSrc: "9.webp",
    imgAlt: "Profile card component",
  },
  {
    title: "Social proof section",
    aHref: "social-proof-section",
    imgSrc: "10.webp",
    imgAlt: "Social proof section",
  },
  {
    title: "Article previw component",
    aHref: "article-preview",
    imgSrc: "11.webp",
    imgAlt: "Article previw component",
  },
  {
    title: "Four card feature section",
    aHref: "four-card-feature-section",
    imgSrc: "12.webp",
    imgAlt: "Four card feature section",
  },
  // {
  //   title: "NFT Card Component",
  //   aHref: "nft-preview-card",
  //   imgSrc: "13.webp",
  //   imgAlt: "NFT Card Component",
  // },
  // {
  //   title: "NFT Card Component",
  //   aHref: "nft-preview-card",
  //   imgSrc: "14.webp",
  //   imgAlt: "NFT Card Component",
  // },
  // {
  //   title: "NFT Card Component",
  //   aHref: "nft-preview-card",
  //   imgSrc: "15.webp",
  //   imgAlt: "NFT Card Component",
  // },
];

const App = () => {
  return projectData.map((project, index) => (
    <Projects
      key={index}
      title={project.title}
      aHref={project.aHref}
      imgSrc={project.imgSrc}
      imgAlt={project.imgAlt}
    />
  ));
};

export default App;
