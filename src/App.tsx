import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

import Favourites from './components/Favourites-List';
import NotFound from './components/NotFound';
import MoviesInTheaters from './components/MoviesInTheaters';
import TopRatedIndian from './components/TopRatedIndian';
import TopRatedMovies from './components/TopRatedMovies';
import { Login } from './components/Login';
import "bootstrap/dist/css/bootstrap.min.css"
import Background from '../src/public/backgroundimg.jpeg';
import { Home } from './components/Home';

function App() {

  return (

    <div className="App" style={{ backgroundImage: `url(${Background})`, overflow: "scroll" }}>
      <Router>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/movies-in-theaters" element={<MoviesInTheaters />} />
        <Route path="/top-rated-indian" element={<TopRatedIndian />} />
        <Route path="/top-rated-movies" element={<TopRatedMovies />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Router>
      <Outlet/>
    </div>
  );
}

export default App;
