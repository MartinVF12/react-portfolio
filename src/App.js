import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/sections/AboutMe';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Resume from './components/sections/Resume';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/" component={AboutMe} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/resume" component={Resume} />
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
