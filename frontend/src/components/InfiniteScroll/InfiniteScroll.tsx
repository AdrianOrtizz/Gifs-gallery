import { useRef, useEffect } from "react";

interface Props {
  onLoadMore: () => void;
  isLoading: boolean;
}

const InfiniteScroll: React.FC<Props> = ({ onLoadMore, isLoading }) => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];

        if (target.isIntersecting && !isLoading) {
          onLoadMore();
        }
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 1.0,
      }
    );

    const currentLoader = loaderRef.current;

    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [isLoading, onLoadMore]);

  return (
    <div>
      <div ref={loaderRef} style={{ height: "1px" }} />

      {isLoading && <p style={{ textAlign: "center" }}>Cargando más...</p>}
    </div>
  );
};

export default InfiniteScroll;
