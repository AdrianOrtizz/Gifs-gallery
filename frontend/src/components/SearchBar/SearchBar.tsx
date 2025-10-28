import { useState } from "react";

import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input) {
      navigate(`/search?q=${input}`);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex m-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-1 rounded-lg mr-4 h-10"
      />
      <button type="submit" className="h-10 px-4">
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
