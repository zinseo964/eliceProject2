import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import axios from 'axios';
import Header from './_layout/header/Header';
import HamburgerMenu from './_layout/header/HamburgerMenu';
import Main from './pages/Main';
import MapView from './components/map/MapView';
import EditInfo from './components/mypage/EditInfo';
import UserLostList from './components/mypage/LostList';
import ManageUser from './components/admin/ManageUser';
import LostList from './components/admin/LostList';
import LostPost from './components/post/LostPost';
import LostDetail from './components/post/LostDetail';
import ShelterList from './components/shelter/ShelterList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <HamburgerMenu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/lostMap" element={<MapView />} />
          <Route path="/mypage" element={<EditInfo />} />
          <Route path="/mypage/lost-list" element={<UserLostList />} />
          <Route path="/admin" element={<ManageUser />} />
          <Route path="/admin/lost-list" element={<LostList />} />
          <Route path="/lost/post" element={<LostPost />} />
          <Route path="/lost/:id" element={<LostDetail />} />
          <Route path="/shelter/:shelterID" element={<ShelterList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
