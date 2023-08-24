//App component is used as landing component.The compiler first goes to index.js
// and checks for the app component and then landed here

import './App.css';


//components
import  Home from './pages/Home';
import CategoryMovies from './pages/CategoryMovies';
import {routePath} from './constants/route'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
   
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home/>}/>
        <Route path={routePath.landingPage} element={<Home/>}/>
        <Route path={routePath.categories} element={<CategoryMovies />} />
        <Route path={routePath.invalid} element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
