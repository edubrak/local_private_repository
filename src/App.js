import HomePage from "./components/home/HomePage";
import SearchPage from "./components/search/SearchPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search-page/:meal_id" element={<SearchPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
