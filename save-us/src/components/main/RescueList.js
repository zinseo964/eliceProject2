/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useData from '../../hook/useData';

export default async function RescueList() {
  const [rescueList, setRescueList] = useState([]);
  const [target, setTarget] = useState(null);

  const data = await useData('api/rescue/rescues');
  useEffect(() => {
    setRescueList(() => data.post);
  }, []);

  console.log(data);

  // 체크박스 품목 구성을 위해 종류 추출
  // const getSpecies = (animalList) => {
  //   const species = [];
  //   animalList.forEach((animal) => {
  //     // [개]믹스견, [고양이]한국고양이라고 들어오는 데이터에서 개 or 고양이 추출
  //     const extractedSpecies = animal.kindCode.slice(1, 4).split(']')[0];
  //     if (species.indexOf(extractedSpecies) === -1) {
  //       species.push(extractedSpecies);
  //     }
  //   });
  //   return species;
  // };
  // getSpecies(rescueList);

  // const getBreed = (animalList) => {
  //   const breed = [];
  //   animalList.forEach((animal) => {
  //     // [개]믹스견, [고양이]한국고양이라고 들어오는 데이터에서 믹스견 or 한국고양이 추출
  //     const extractedBreed = animal.kindCode.slice(3).split(' ')[1];
  //     if (breed.indexOf(extractedBreed) === -1) {
  //       breed.push(extractedBreed);
  //     }
  //   });
  //   return breed;
  // };
  // getSpecies(rescueList);

  // const [checked, setChecked] = useState([]);

  // const checkboxLists = () =>
  //   gender.map((value, index) => (
  //     <div key={index}>
  //       <span>{value}</span>
  //       <input
  //         type="checkbox"
  //         onChange={() => handleToggle(value)}
  //         checked={checked.indexOf(value) !== -1}
  //         value={value}
  //       />
  //     </div>
  //   ));

  return (
    <main
      style={{
        display: 'inline-flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: '20px',
        padding: '20px',
      }}
    >
      {/* {rescueList.map((rescue) => {
        const {
          happenDate,
          happenPlace,
          kindCode,
          imgUrl,
          sexCd,
          neuterYn,
          desertionNo,
        } = rescue;

        let sex;
        if (sexCd === 'M') {
          sex = '수컷';
        } else if (sexCd === 'F') {
          sex = '암컷';
        } else {
          sex = '미상';
        }
        let neutralization;
        if (neuterYn === 'Y') {
          neutralization = '완료';
        } else if (neuterYn === 'N') {
          neutralization = '미완료';
        } else {
          neutralization = '미상';
        }
        return (
          <article key={desertionNo}>
            <Link
              to={`/rescue/${desertionNo}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '350px',
                height: '400px',
              }}
            >
              <img
                src={imgUrl}
                alt="rescued animal"
                style={{
                  width: '350px',
                  height: '270px',
                  objectFit: 'cover',
                }}
              />
              <section
                style={{
                  backgroundColor: '#ffd149',
                  fontStyle: 'none',
                  height: '130px',
                }}
              >
                <div>접수일: {happenDate}</div>
                <div>발견장소: {happenPlace}</div>
                <div>품종: {kindCode}</div>
                <div>성별: {sex}</div>
                <div>중성화 여부: {neutralization}</div>
              </section>
            </Link>
          </article>
        );
      })} */}
      <div ref={setTarget} />
    </main>
  );
}
