import Landing from "./Components/landing/landing_page/Landing.js";
import { Route, Routes } from 'react-router-dom';
import ItemList from "./Components/itemList/itemListPage/itemList.js";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/itemList" element={<ItemList />} />
        </Routes>
    </div>
  );
}

export default App;
