import { useEffect } from "react";
import { useGifsStore } from "../../store/useGifsStore";

import GIF from "../Gif/Gif";

const RandomGif = () => {
  const { randomGif, GIFs } = useGifsStore();

  let count = 0;
  useEffect(() => {
    if (count === 0) randomGif();
    count++;
  }, []);

  return (
    <section>
      <h2 className="text-2xl my-2">GIF random:</h2>
      {GIFs.length !== 0 && (
        <article>
          <GIF url={GIFs[0].images.original.url} alt={GIFs[0].title} />
        </article>
      )}
    </section>
  );
};

export default RandomGif;
