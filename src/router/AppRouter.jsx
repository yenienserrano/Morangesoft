import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Menu } from "../components/Menu";
import { Navbar } from "../components/Navbar";
import { AboutPage } from "../pages/AboutPage";
import { EmpleoPage } from "../pages/EmpleoPage";
import { LiderazgoPage } from "../pages/LiderazgoPage";
import { VideosPage } from "../pages/VideosPage";


export const AppRouter = () => {

  const [menu, setMenu] = useState(false)


  return (
      <Router>
        <Navbar setMenu={setMenu} menu={menu}/>
        <div className='container'>

        {
          (menu) && <Menu />
        }

          <Switch>
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/empleo" component={EmpleoPage} />
            <Route exact path="/Liderazgo" component={LiderazgoPage} />
            <Route exact path="/home" component={VideosPage} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </Router>
  );
}