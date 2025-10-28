import Nav from "./components/Nav/Nav";
import TrendingGIFs from "./components/GifLists/TrendingGifs";
import GifSerched from "./components/GifLists/GifSearched";
import RandomGif from "./components/GifLists/RandomGif";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <Nav />

      <Routes>
        <Route path="/" element={<TrendingGIFs />} />
        <Route path="/search" element={<GifSerched />} />
        <Route path="/random" element={<RandomGif />} />
      </Routes>
    </main>
  );
}

export default App;
