import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LOGO from './MainLogo.png';
import ModalButton from '../../components/modal/ModalButton';
import LoginContent from '../../components/main/LoginContent';
import RegisterContent from '../../components/main/RegisterContent';

function Header() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [didLogin, setDidLogin] = useState(sessionStorage.getItem('token'));

  const getUserInfo = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/api/user`,
        {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        },
      );
      setUserInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  function handleLogout() {
    sessionStorage.removeItem('token');
    setDidLogin(null);
    alert('로그아웃 되었습니다.');
    window.location.replace('/');
  }

  function handleMypage() {
    if (userInfo.role === 'admin-user') {
      navigate('/admin');
    } else navigate('/mypage');
  }

  useEffect(() => {
    if (didLogin) getUserInfo();
  }, [didLogin]);

  return (
    <header
      className="header-container"
      style={{
        backgroundColor: '#FFD149',
        height: '15vh',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'sticky',
        paddingTop: '5vh',
        top: '-5vh',
      }}
    >
      <div style={{ width: '125px' }} />
      <Link
        to="/"
        style={{ display: 'flex', justifyContent: 'center', width: '150px' }}
      >
        <img
          className="main-LOGO"
          src={LOGO}
          alt="Main LOGO that has a cat and a dog in a box"
          style={{ maxWidth: '100%', objectFit: 'scale-down' }}
        />
      </Link>
      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          {didLogin ? (
            <button type="button" onClick={handleLogout}>
              로그아웃
            </button>
          ) : (
            <ModalButton
              buttonName="로그인"
              title="로그인"
              content={<LoginContent />}
            />
          )}
          {didLogin ? (
            <button type="button" onClick={handleMypage}>
              마이페이지
            </button>
          ) : (
            <ModalButton
              buttonName="회원가입"
              title="회원가입"
              content={<RegisterContent />}
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
