import DownloadIco from "./DownloadIco";
import { useState } from "react";

const GIF = ({ url, alt }: { url: string; alt: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <article onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isHovered && <DownloadIco url={url} />}
      <img className="object-cover w-full h-auto" src={url} alt={alt} />
    </article>
  );
};

export default GIF;
