import React from 'react';
import './App.css';

// import { BrowserRouter} from 'react-router-dom'; 
import { HashRouter} from 'react-router-dom';

import Topbar from './components/toolbar/Topbar.js'
import Footer from './components/Footer.js'


function App() {
  // const classes = useStyles();

  return (
    

    // CHANGE THE CONTENT OF THE ACTUAL PAGE INSTEAD OF CHANGE THE PAGE !
    // Using HashRouter instead of ReacRouter 4 github !

    <HashRouter>
    <div className="App"> 
      <Topbar />
      <Footer />
    </div>


    </HashRouter>
  );
}

export default App;
