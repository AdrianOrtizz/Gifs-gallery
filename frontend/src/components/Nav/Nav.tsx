import Title from "../Title/Title";
import SearchBar from "../SearchBar/SearchBar";
import SearchButtons from "../SearchButtons/SearchButtons";

const Nav = () => {
  return (
    <nav className="flex mb-2 flex-col items-center sm:items-start sm:flex-row sm:justify-around w-screen">
      <Title />
      <SearchBar />
      <SearchButtons />
    </nav>
  );
};

export default Nav;
