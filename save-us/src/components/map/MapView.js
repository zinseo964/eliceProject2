/*eslint-disable */
import { React, useEffect, useState } from 'react';
import { Map, MapMarker, useMap } from 'react-kakao-maps-sdk';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function InfoWindowContent({ data }) {
  return (
    <InfoWindowDiv>
      <div style={{ color: '#000' }}>
        <span className="notranslate">
          <ul>
            <img src={data.filename}></img>
            <li>
              성별 :{' '}
              {data.sexCd === 'M'
                ? '수컷'
                : data.sexCd === 'F'
                ? '암컷'
                : '미상'}
              {data.neuterYn === 'Y' ? '(중성화)' : ''}
            </li>
            <li>특징 : {data.specialMark}</li>
          </ul>
        </span>
      </div>
    </InfoWindowDiv>
  );
}

function getInfoWindowData(data) {
  return data.map((obj) => {
    return {
      content: <InfoWindowContent data={obj}></InfoWindowContent>,
      latlng: { lat: obj.lat, lng: obj.lng },
    };
  });
}

function EventMarkerContainer({ position, content }) {
  const map = useMap();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <MapMarker
      position={position}
      onClick={(marker) => map.panTo(marker.getPosition())}
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
      image={{
        src: 'https://i.ibb.co/MsqtRCN/pin.png',
        size: {
          width: 64,
          height: 69,
        },
        options: {
          offset: {
            x: 27,
            y: 69,
          },
        },
      }}
    >
      {isVisible && content}
    </MapMarker>
  );
}

function MapView() {
  const [toggleMap, setToggleMap] = useState(true);
  const navigate = useNavigate();

  const _data = [
    {
      id: 1,
      filename:
        'http://www.animal.go.kr/files/shelter/2022/04/202207080907808_s.jpg',
      sexCd: 'M',
      neuterYn: 'N',
      happenPlace: '대전 동구 가양1동',
      specialMark: '경계심/넥카라착용중-넥카라 없으면, 앞발을 물어뜯음.',
      kindCd: 'test1 key',
      lat: 36.343024529567934,
      lng: 127.4415250548001,
    },
    {
      id: 2,
      filename:
        'http://www.animal.go.kr/files/shelter/2022/04/202207080907808_s.jpg',
      sexCd: 'M',
      neuterYn: 'N',
      happenPlace: '대전 동구 가양2동',
      specialMark: '경계심/넥카라착용중-넥카라 없으면, 앞발을 물어뜯음.',
      kindCd: 'test2 key',
      lat: 36.3482200788126,
      lng: 127.45463973689542,
    },
    {
      id: 3,
      filename:
        'http://www.animal.go.kr/files/shelter/2022/04/202207080907808_s.jpg',
      sexCd: 'M',
      neuterYn: 'N',
      happenPlace: '대전 동구 자양동',
      specialMark: '경계심/넥카라착용중-넥카라 없으면, 앞발을 물어뜯음.',
      kindCd: 'test3 key',
      lat: 36.33689689105572,
      lng: 127.4495082397018,
    },
  ];

  // happenPlace는 백엔드에서 위경도 좌표로 변환해야 함
  // const [rescueList, setRescueList] = useState([]);

  // async function getRescue() {
  //   const res = await fetch('/MockData.json', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //   });
  //   const data = await res.json();
  //   return data;
  // }
  // useEffect(() => {
  //   const getRescueFunc = async () => {
  //     setRescueList(await getRescue());
  //   };
  //   getRescueFunc();
  // }, []);

  const rescueList = getInfoWindowData(_data);

  // const _rescueList = rescueList.map(async (rescue) => {
  //   const { lat, lng } = await SearchPlace(rescue.happenPlace);
  //   return { ...rescue, latlng: { lat, lng } };
  // });
  // console.log(_rescueList);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '50px',
        }}
      >
        <button
          type="button"
          style={{ height: '40px' }}
          onClick={() => {
            if (toggleMap) {
              navigate('/');
            } else {
              navigate('/lostMap');
            }
            setToggleMap((toggle) => !toggle);
          }}
        >
          {toggleMap ? '리스트 보기' : '지도 보기'}
        </button>
      </div>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 36.33689689105572,
          lng: 127.4495082397018,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '100vh',
        }}
        level={3} // 지도의 확대 레벨
      >
        {rescueList.map((rescue) => (
          <EventMarkerContainer
            key={`EventMarkerContainer-${rescue.latlng.lat}-${rescue.latlng.lng}`}
            position={rescue.latlng}
            content={rescue.content}
          />
        ))}
      </Map>
    </>
  );
}

export default MapView;

const InfoWindowDiv = styled.div`
  padding: 15px 20px;
  width: 350px;
  text-align: left;
  font-family: notosanskr, Malgun Gothic, 맑은 고딕, Dotum, 돋움, sans-serif;
`;
