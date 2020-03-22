import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './css/App.css';

import Home from './components/home';
import Navbar from './components/navbar';
import News from './components/news';
import GlobalStats from './components/global-stats';
import Quote from './components/quote';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch> {/* allows Only One Route to be displayed  */}
          <Route exact path='/' component={Home} />
          <Route exact path='/quote-of-the-day' component={Quote} />
          <Route exact path='/news' component={News} />
          <Route exact path='/stats' component={GlobalStats} />
          {/*<Route path='/login' component={Login} />*/}
          {/*<Route path='/signup' component={Signup} />*/}
          {/*<Route path='/quote' component={Quote} />*/}
          {/*<Route path='/memories' component={Memories} />*/}
          {/*<Route path='/save-memory' component={SaveMemory} />*/}
          {/*<Route path='/memory/:id' component={Memory} />*/}
          {/*<Route path='/edit-memory/:id' component={EditMemory} />*/}
          <Route path='/*' component={Home} /> {/* handles unknown urls */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
