import {Link} from 'react-router-dom';
import ScrollTop from '@/components/scroll-top'
import imgChart from '@/images/record-chart.png'
import imgMyRecommend1 from '@/images/MyRecommend-1.jpg'
import imgMyRecommend2 from '@/images/MyRecommend-2.jpg'
import imgMyRecommend3 from '@/images/MyRecommend-3.jpg'
import {useEffect, useState} from "react";

const MyRecord = () => {

  // Load more button
  const PAGE_SIZE = 4;

  const [index, setIndex] = useState(1);

  const [visibleDialy, setVisibleDialy] = useState<{ date: string; text: string; }[]>([]);

  useEffect(() => {
    const dialy = {
      date: "2021.05.21 23:25",
      text: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"
    }
    const numberOfItems = PAGE_SIZE * (index + 1);

    const newArray = [];
    for (let i = 0; i < numberOfItems; i++) {
      if (i < numberOfItems)
        newArray.push(dialy)
    }

    setVisibleDialy(newArray);

  }, [index])

  const onLoadMore = () => {
    setIndex(index + 1);
  }

  return (
    <div className="relative wrapper-content">

      <div className="grid grid-cols-1 gap-10 my-12 sm:grid-cols-3">
        <div className="yellow-box">
          <div className="">
            <img src={imgMyRecommend1} alt="" className="object-cover w-full h-full lg:w-[234px] lg:h-[234px]"/>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div>
              <h2 className="mb-2 text-[25px]] text-center uppercase text-primary-300">Body Record</h2>
              <Link className="btn-orange" to="#">自分のカラダの記録</Link>
            </div>
          </div>
        </div>
        <div className="yellow-box">
          <img src={imgMyRecommend2} alt="" className="object-cover w-full h-full lg:w-[234px] lg:h-[234px]"/>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div>
              <h2 className="mb-2 text-[25px]] text-center uppercase text-primary-300">MY EXERCISE</h2>
              <Link className="btn-orange" to="#">自分の運動の記録</Link>
            </div>
          </div>
        </div>
        <div className="yellow-box">
          <img src={imgMyRecommend3} alt="" className="object-cover w-full h-full lg:w-[234px] lg:h-[234px]"/>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div>
              <h2 className="mb-2 text-[25px]] text-center uppercase text-primary-300">MY DIARY</h2>
              <Link className="btn-orange" to="#">自分の日記</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <img src={imgChart} alt=""/>
      </div>

      <div className="p-5 mb-12 text-white bg-dark-500">
        <div className="flex mb-3 align-top">
          <span className="text-[15px] mr-4 leading-5 w-20 inline-block">MY EXERCISE</span>
          <span className="text-[22px]">2021.05.21</span>
        </div>
        <div className="overflow-y-auto max-h-52">
          <ul className='grid grid-cols-1 md:grid-cols-2 md:gap-x-6'>
            {Array.from(Array(10).keys()).map(item => (
              <li key={item}
                  className="relative pl-5 mb-2 pb-1 border-b border-gray-400 before:content[''] before:top-2 before:absolute before:left-0 before:inline-block before:w-1.5 before:h-1.5 before:rounded-full before:bg-white">
                <p className="font-notoSansJP">家事全般（立位・軽い）</p>
                <p className="text-primary-300 text-[15px] mb-2">26kcal</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-[22px] text-dark-500 mb-2">MY DIARY</h2>
        <div className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-4">
          {visibleDialy.map((item, index) => (
            <div key={index} className="p-4 border-2 border-[#707070]">
              <div className="mb-2">
                <div>{item?.date?.split(" ")?.[0]}</div>
                <div>{item?.date?.split(" ")?.[1]}</div>
              </div>
              <p
                className="text-xs">{item?.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12 text-center">
        <Link to="#" className="btn" onClick={() => onLoadMore()}>自分の日記をもっと見る</Link>
      </div>


      <ScrollTop/>
    </div>
  );
}

export default MyRecord