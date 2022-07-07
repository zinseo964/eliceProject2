import React from 'react';

function Filtering() {
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

      <button type="button" style={{ height: '40px' }}>
        지도 보기
      </button>

      <div>필터</div>
    </div>
  );
}

export default Filtering;
