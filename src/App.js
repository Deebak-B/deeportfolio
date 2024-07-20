import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
// import Body from "./components/body";
import Profile from "./components/Profile";
import Interests from "./components/Interests";
import About from "./components/About";
import Quote from "./components/Quote";
import ContactDetails from "./components/contactLast";

// Bootstrap
import { Row, Col } from "react-bootstrap";
// React Router Dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DesingProjects from "./components/designProjects";
import Daprojects from "./components/daProjects";
// backup
// <Header />
// <Profile />
// <Interests />
// <Quote />
// <ContactDetails />

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Profile />

                {/* <About /> */}

                <Interests />
                {/* <Quote /> */}
                <ContactDetails />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Profile />
                <Interests />
                {/* <Quote /> */}
                <ContactDetails />
              </>
            }
          />
          {/* Portfolio */}
          <Route
            path="/portfolio"
            element={
              <>
                <Interests />
                <ContactDetails />
              </>
            }
          />
          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Design Projects  */}
          <Route path="/designprojects" element={<DesingProjects />} />

          {/* DA Projects */}
          <Route path="/dataanalytics_projects" element={<Daprojects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
