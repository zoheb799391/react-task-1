import React, { useState } from 'react'
import { Routes,Route } from "react-router-dom";
import Fetch from './pages/Fetch.js'
import MaterialUITable from './pages/Table.js'
import ResponsiveDialog from './pages/modal.js'
import Proper from './props/props.js';
import Propss from './props/propss.js';
import DataTable from './pages/Datagrid.js';
import { DetailContext, ThemeContext, UserContext } from './Context.js';

const App = () => {
  const [theme, setTheme] = useState('dark');
  return (
    <DetailContext.Provider value={{Data :'hey'}}>
    <UserContext.Provider value={{userName: 'ZOHEB'}}>
      <ThemeContext.Provider value={{theme, setTheme}}>
          <Routes>
            <Route exact path="/" element={<Fetch/>}></Route>
            <Route exact path="/table" element={<MaterialUITable/>}></Route>
            <Route exact path="/props" element={<Proper/>}></Route>
            <Route exact path="/propss" element={<Propss/>}></Route>
            <Route exact path="/data" element={<DataTable/>}></Route>
            <Route exact path="/modal" element={<ResponsiveDialog/>}></Route>
          </Routes>
        </ThemeContext.Provider>
    </UserContext.Provider>
    </DetailContext.Provider>
  )
}

export default App;