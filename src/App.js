import React from 'react';
import PreferencesList from './components/pageSelect/PreferencesList'
import './index.css';
import Router from './components/Router'




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router />
      <PreferencesList/>
        
      </header>
       
        
    </div>
  
  );
}







export default App;
