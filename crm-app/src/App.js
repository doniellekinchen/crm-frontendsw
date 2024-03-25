import './App.css';
import React from 'react';

// import { Entry } from './Pages/entry/Entry.page';
import DefaultLayout from './layout/DefaultLayout';
import { Dashboard } from './Pages/Dashboard/Dashboard.page';


function App() {
  return (
    <div className='App'>
    {/* <Entry/> */}
     <DefaultLayout> 
      <Dashboard/>
      </DefaultLayout>
    </div>
  );
}

export default App;
