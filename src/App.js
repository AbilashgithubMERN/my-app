import { Nav, Navbar, NavLink } from 'react-bootstrap';
import './App.css';
import CAGRCalculator from './components/CAGR_calculator';
import EBITDA from './components/EBITDACalculator';
import FVCalculator from './components/FutureValueCalculator';
import GoldRateCalculator from './components/GoldRateCalculator';
import SimpleInterest from './components/SimpleInterestCalculator';
import LumpSumCalculator from './components/lumbsumCalculator';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <div className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <Navbar className="Navbar" fixed="top" expand="lg">
              <Navbar.Brand href="/"><b className='NavLink'>Finance Calculator</b></Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="end"
                className="canvas-color"
                style={{ backgroundColor: '#343a40' }}
              >
                <Nav className="Nav">
                  <NavLink href="/cagr"><b className='NavLink'>CAGR</b></NavLink>
                  <NavLink href="/simpInterest"><b className='NavLink'>Simple/Compound</b></NavLink>
                  <NavLink href="/ebitda"><b className='NavLink'>EBITDA</b></NavLink>
                  <NavLink href="/futurevalue"><b className='NavLink'>Future Value</b></NavLink>
                  <NavLink href="/goldrate"><b className='NavLink'>Gold Rate</b></NavLink>
                  <NavLink href="/lumbsum"><b className='NavLink'>LumpSum</b></NavLink>
                  <NavLink href="/about"><b className='NavLink'>About</b></NavLink>
                </Nav>
              </Navbar.Offcanvas>
            </Navbar>


            <Router>
              <Routes>
                <Route path="/cagr" Component={CAGRCalculator}></Route>
                <Route path="/simpInterest" Component={SimpleInterest}></Route>
                <Route path="/ebitda" Component={EBITDA}></Route>
                <Route path="/futurevalue" Component={FVCalculator}></Route>
                <Route path="/goldrate" Component={GoldRateCalculator}></Route>
                <Route path="/lumbsum" Component={LumpSumCalculator}></Route>
                <Route path="/about" Component={About}></Route>
                <Route path="/" Component={Home}></Route>
              </Routes>
            </Router>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
