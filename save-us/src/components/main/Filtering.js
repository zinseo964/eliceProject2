import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Filtering() {
  const [toggleList, setToggleList] = useState(true);
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '50px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '150px',
        }}
      >
        <button type="button">전체</button>
        <button type="button">구조</button>
        <button type="button">목격</button>
      </div>
      <button
        type="button"
        style={{ height: '40px' }}
        onClick={() => {
          if (toggleList) {
            navigate('/lostMap');
          } else {
            navigate('/');
          }
          setToggleList((toggle) => !toggle);
        }}
      >
        {toggleList ? 'true' : 'false'}
      </button>
      <div>필터</div>
    </div>
  );
}

export default Filtering;
