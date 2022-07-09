import React from 'react';
import Filtering from '../components/main/Filtering';
import RescueList from '../components/main/RescueList';
// import Header from '../_layout/header/Header';
// import HamburgerMenu from '../_layout/header/HamburgerMenu';

function Main() {
  return (
    <>
      {/* <Header /> */}
      {/* <HamburgerMenu /> */}
      <Filtering />
      <RescueList />
    </>
  );
}

export default Main;
