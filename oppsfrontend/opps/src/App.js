
import './App.css';
import Sidebar from './component/sidebar';
import Homepage from './pages/homepage';
import { Routes, Route} from "react-router-dom";
import Search from './pages/search';
import Blog from './pages/blog';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
      <Route path="*" element={<Homepage />} />
      <Route path="/search" element={<Search />} />
      
      </Routes>
    </div>
  );
}

export default App;
