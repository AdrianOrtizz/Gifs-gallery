import { useEffect } from "react";
import { useGifsStore } from "../../store/useGifsStore";

import Loading from "../Loading/Loading";
import GIF from "../Gif/Gif";
import InfiniteScroll from "../InfiniteScroll/InfiniteScroll";

const TrendingGIFs = () => {
  const { GIFs, loading, error, trendingGIFs, offset, reset } = useGifsStore();

  let count = 0;
  useEffect(() => {
    reset();
    if (count === 0) trendingGIFs(0);
    count++;
  }, []);

  return (
    <section>
      {loading && <Loading />}
      {error && <h2>{error}</h2>}

      {GIFs.length > 0 && (
        <section className="columns-2 sm:columns-3 lg:columns-4 gap-0">
          <div>
            {GIFs.map((gif) => (
              <GIF url={gif.images.original.url} alt={gif.title} key={gif.id} />
            ))}
          </div>

          <InfiniteScroll
            onLoadMore={() => trendingGIFs(offset)}
            isLoading={loading}
          />
        </section>
      )}
    </section>
  );
};

export default TrendingGIFs;
