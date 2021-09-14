/**
 * ************************************
 *
 * @module  App.js
 * @author  
 * @date    
 * @description
 *
 * ************************************
 */

import React from 'react';
import MainContainer from './containers/mainContainer';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <MainContainer />
      </BrowserRouter>
    </div>

  )
}

export default App;