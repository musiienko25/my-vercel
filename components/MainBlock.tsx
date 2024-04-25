import React from "react";
import { useState } from "react";

interface Block {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  text: string;
  link: string;
}

const blocksData: Block[] = [
  {
    id: 1,
    title: "Amplify",
    imageUrl:
      "https://ej2uh7skei8.exactdn.com/wp-content/uploads/2022/02/kids-learning.png?strip=all&lossy=1&quality=92&webp=90&sharp=1&ssl=1",
    text: "Stack of technologies: React, JS, CSS",
    description:
      "Amplify is an educational platform for elementary and middle grades",
    link: "https://amplify.com/",
  },
  {
    id: 2,
    title: "Nivea",
    imageUrl:
      "https://images-eu.nivea.com/-/media/nivea/local/ua/luminous/new/luminous630_banner_3600x1400.jpg?rx=7&ry=0&rw=3584&rh=1400&mw=3080&hash=762AF7F011976EB45686E19A321B48B6",
    text: "Stack of technologies: React, JS, CSS",
    description: "An online application store of care products. ",
    link: "https://www.nivea.ua/",
  },
  {
    id: 3,
    title: "Rakwireless",
    imageUrl:
      "https://res.rakwireless.com/tracked/home/new/png/homepage-section3_what%20we%20offer@2x.png?fm=webp",
    text: "Stack of technologies: React, Node.js, JS, CSS",
    description:
      "Development of a desktop application that was supposed to control a real device",
    link: "https://www.rakwireless.com/en-us",
  },
  {
    id: 4,
    title: "Sparkpaws",
    imageUrl:
      "https://www.sparkpaws.com/cdn/shop/files/RED_02_1000x.jpg?v=1698343688",
    text: "Stack of technologies: Shopify, JS, CSS",
    description: "Сlothing and accessories for animals",
    link: "https://www.sparkpaws.com/",
  },
  {
    id: 5,
    title: "Eucerin",
    imageUrl:
      "https://images-1.eucerin.com/~/media/eucerin/international/skin-concerns/uneven-skin/eucerin-sc-uneven-skin-hyperpigmentation-in-general-00header.webp?rx=0&ry=60&rw=1440&rh=487&mw=1440&hash=3E34C55381B9BBEC2EC166B98A323B93",
    text: "React, JS, Node.js, Express, PostgreSQL",
    description:
      "Eucerin is a producer and main supplier of professional cosmetics",
    link: "https://www.ua.eucerin.ua/",
  },
  {
    id: 6,
    title: "Workant",
    imageUrl: "https://workant.io/_next/static/media/main-image.3e04d8f4.png",
    text: "React, Redux, Redux Saga, Node.js, Express",
    description: "Workant is an all-in-one HR-software solution",
    link: "https://workant.io/",
  },
];

const Block: React.FC<Block> = ({
  id,
  title,
  imageUrl,
  text,
  link,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      {" "}
      <div
        className="relative overflow-hidden rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "220px",
          transition: "transform 0.3s, opacity 0.3s", // Додано анімацію для зміни масштабу та прозорості
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          opacity: isHovered ? 0.9 : 1,
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        {!isHovered && (
          <div className="">
            {" "}
            <h1 className="text-black text-center text-2xl flex items-center justify-center h-full backdrop-blur-[3px]">
              {title}
            </h1>
          </div>
        )}
        {isHovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 px-2 py-2">
            <p className="text-white text-center mb-1">{text}</p>
            <p className="text-white text-center mb-1">{description}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline inline-block py-2 px-4 bg-transparent rounded transition-colors duration-300 hover:bg-purple-500 hover:text-white"
            >
              Visit website
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const MainBlock: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
      {blocksData.map((block) => (
        <Block
          key={block.id}
          id={block.id}
          imageUrl={block.imageUrl}
          text={block.text}
          link={block.link}
          description={block.description}
          title={block.title}
        />
      ))}
    </div>
  );
};

export default MainBlock;
