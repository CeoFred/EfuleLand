import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faCheckSquare, faCoffee,faStroopwafel ,faArrowDown,faArrowUp, faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons'
import Header from './Components/Header';


library.add(fab, faArrowAltCircleUp,faCheckSquare, faCoffee, faStroopwafel, faArrowDown, faArrowUp)

class App extends Component {
  render() {
    return (
     <div>
<Header/>
     </div>
    );
  }
}

export default App;
