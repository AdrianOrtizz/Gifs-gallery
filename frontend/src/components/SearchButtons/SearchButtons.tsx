import { useNavigate } from "react-router-dom";

const SearchButtons = () => {
  const navigate = useNavigate();

  return (
    <section>
      <button className="h-10 px-4 mt-4" onClick={() => navigate("/random")}>
        ¡Random!
      </button>
      <button className="h-10 px-4 mt-4 ml-1" onClick={() => navigate("/")}>
        Trending
      </button>
    </section>
  );
};

export default SearchButtons;
