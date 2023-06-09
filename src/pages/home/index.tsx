import {Link} from 'react-router-dom'
import imgPraph from '@/images/graph.png'
import imgMain from '@/images/main_photo.jpg'
import imgCircle from '@/images/circle.png'
import imgHex from '@/images/hex.png'
import imgM01 from '@/images/m01.jpg'
import imgM02 from '@/images/m02.jpg'
import imgM03 from '@/images/m03.jpg'
import imgL01 from '@/images/l01.jpg'
import imgL02 from '@/images/l02.jpg'
import imgL03 from '@/images/l03.jpg'
import imgD01 from '@/images/d01.jpg'
import imgD02 from '@/images/d02.jpg'
import imgS01 from '@/images/s01.jpg'
import ScrollTop from '@/components/scroll-top'
import {useEffect, useState} from "react";

const Home = () => {

  const dishes = [{
    name: '05.20.Morning',
    srcImg: imgM01,
    type: 'morning',
    sort: '201'
  }, {
    name: '05.21.Morning',
    srcImg: imgM02,
    type: 'morning',
    sort: '211'
  }, {
    name: '05.22.Morning',
    srcImg: imgM03,
    type: 'morning',
    sort: '221'
  }, {
    name: '05.20.Lunch',
    srcImg: imgL01,
    type: 'lunch',
    sort: '202'
  }, {
    name: '05.21.Lunch',
    srcImg: imgL02,
    type: 'lunch',
    sort: '212'
  }, {
    name: '05.22.Lunch',
    srcImg: imgL03,
    type: 'lunch',
    sort: '222'
  }, {
    name: '05.20.Dinner',
    srcImg: imgD01,
    type: 'dinner',
    sort: '203'
  }, {
    name: '05.21.Dinner',
    srcImg: imgD02,
    type: 'dinner',
    sort: '213'
  }, {
    name: '05.22.Dinner',
    srcImg: imgD02,
    type: 'dinner',
    sort: '223'
  }, {
    name: '05.20.Snack',
    srcImg: imgS01,
    type: 'snack',
    sort: '204'
  }, {
    name: '05.21.Snack',
    srcImg: imgS01,
    type: 'snack',
    sort: '214'
  }, {
    name: '05.22.Snack',
    srcImg: imgS01,
    type: 'snack',
    sort: '224'
  }];

  // Filter by dish type
  const [dishType, setDishType] = useState('');

  // Load more button
  const PAGE_SIZE = 8;

  const [index, setIndex] = useState(0);

  const [visibleDishes, setVisibleDishes] = useState<{ name: string; srcImg: string; type: string; sort: string; }[]>([]);

  useEffect(() => {
    const numberOfItems = PAGE_SIZE * (index + 1);

    const newArray = [];
    let sortedDishes = [];
    if (dishType) {
      sortedDishes = dishes.filter(dish => dish.type === dishType).sort((a, b) => (a.sort < b.sort ? -1 : 1));
    } else {
      sortedDishes = dishes.sort((a, b) => (a.sort < b.sort ? -1 : 1));
    }
    for (let i = 0; i < sortedDishes.length; i++) {
      if (i < numberOfItems)
        newArray.push(sortedDishes[i])
    }

    setVisibleDishes(newArray);

  }, [index, dishType])

  const onFilter = (type: string) => {
    setDishType(type);
  }

  const onLoadMore = () => {
    setIndex(index + 1);
  }

  return (
    <>
      <div className="md:grid md:grid-cols-5">
        <div className="relative bg-cover md:col-span-2" style={{backgroundImage: `url(${imgMain})`}}>
          <div className="relative flex items-center justify-center h-full">
            <div
              className="text-white flex items-center justify-center w-[181px] h-[181px] bg-cover shadow my-6 md:py-0"
              style={{backgroundImage: `url(${imgCircle})`}}>
              <span className="mr-2 text-lg">05/21</span>
              <span className="text-[25px]">75%</span>
            </div>
          </div>
        </div>
        <div className="px-8 py-2 text-center md:text-left md:col-span-3 bg-dark-600">
          <img src={imgPraph} alt="" className="inline-block"/>
        </div>
      </div>
      <div className="wrapper-content">
        <div className="grid grid-cols-2 gap-6 my-5 md:gap-3 md:grid-cols-4 place-items-center">
          <Link to="#" className="hex-box" style={{backgroundImage: `url(${imgHex})`}}
                onClick={() => onFilter('morning')}>
            <IconFolk/>
            <span>Morning</span>
          </Link>
          <Link to="#" className="hex-box" style={{backgroundImage: `url(${imgHex})`}}
                onClick={() => onFilter('lunch')}>
            <IconFolk/>
            <span>Lunch</span>
          </Link>
          <Link to="#" className="hex-box" style={{backgroundImage: `url(${imgHex})`}}
                onClick={() => onFilter('dinner')}>
            <IconFolk/>
            <span>Dinner</span>
          </Link>
          <Link to="#" className="hex-box" style={{backgroundImage: `url(${imgHex})`}}
                onClick={() => onFilter('snack')}>
            <IconCup/>
            <span>Snack</span>
          </Link>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-5 mt-3 mb-10 md:grid-cols-4 md:gap-3">
            {visibleDishes.map((dish, index) => {
              return (<div className="relative" key={index}>
                <Link to="#">
                  <img src={dish.srcImg} className="object-cover w-full h-full lg:w-[234px] lg:h-[234px]" alt=""/>
                  <span className="labelLeft">
                  {dish.name}
                </span>
                </Link>
              </div>)
            })}
          </div>

          <ScrollTop/>
        </div>

        <div className="mb-12 text-center">
          <Link to="#" className="btn" onClick={() => onLoadMore()}>記録をもっと見る</Link>
        </div>
      </div>
    </>
  )
}

export default Home


const IconCup = () => (
  <svg className="inline" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect opacity="0.01" width="56" height="56" fill="white"/>
    <g clipPath="url(#clip0_0_102)">
      <path fillRule="evenodd" clipRule="evenodd"
            d="M45 12.0464C42.7853 12.0464 40.9036 10.3071 40.9036 8H15.1486C15.1486 10.304 13.2163 12.0464 11 12.0464V14.6671H45V12.0464ZM12.7004 17.9999L17.9067 48H38.2008L43.3013 17.9999H12.7004ZM39.2861 21.3264L38.1519 28H17.954L16.8198 21.3264H39.2861ZM20.7872 44.6672L19.6532 38.0001H36.4528L35.3203 44.6672H20.7872Z"
            fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_0_102">
        <rect width="34" height="40" fill="white" transform="translate(11 8)"/>
      </clipPath>
    </defs>
  </svg>
)

const IconFolk = () => (
  <svg className="inline" width="53" height="45" viewBox="0 0 53 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M52.2807 7.37263L44.4311 15.2493L43.1201 13.9338L50.7092 5.79414L49.9738 5.05622L41.807 12.6162L40.494 11.3004L48.1175 3.19507L47.3244 2.39758L39.1828 9.98285L37.8698 8.6651L45.7191 0.78833L44.9351 0C44.9351 0 37.5451 5.81378 33.8966 8.81451C32.6176 9.86383 32.103 11.6404 32.2822 13.2911C32.528 15.523 32.7987 16.3888 31.895 17.2959L24.239 24.9764C14.4183 15.1179 3.66828 4.32897 2.56159 3.23455C1.91059 2.59014 0.977608 2.59014 0.393128 3.17699C-1.64435 5.22173 4.50775 17.4365 12.612 27.6746C14.3017 25.97 15.839 24.4364 15.839 24.4364L35.5219 44.1858C36.7396 45.4082 38.5119 45.1255 39.4466 44.1858H39.4483C40.5317 43.0988 40.5317 41.333 39.4483 40.2457C37.3655 38.156 33.0964 33.8683 28.1764 28.9273L35.8245 21.2522C36.7432 20.3307 37.5915 20.6134 39.8161 20.8742C41.4858 21.0705 43.3137 20.5666 44.3668 19.2544C47.3334 15.5481 53.0001 8.09276 53.0001 8.09276L52.2807 7.37263Z"
      fill="white"/>
  </svg>
)