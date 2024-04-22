import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CreateService from './pages/CreateService/CreateService';
import TablesService from './pages/TablesService/TablesService';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import ViewServices from './pages/ViewServices/ViewServices';
import EditService from './pages/EditService/EditService';
import { DataProvider } from './services/DataContext';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <DataProvider>
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/createService" element={<CreateService />} />
      <Route path="/tables" element={<TablesService />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/viewServices/:id" element={<ViewServices />} />
      <Route path="/editService/:id" element={<EditService />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </DataProvider>
  );
};

export default App;