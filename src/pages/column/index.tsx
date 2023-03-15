import {Link} from 'react-router-dom'
import ScrollTop from '@/components/scroll-top'
import imgColumn1 from '@/images/column-1.jpg'
import imgColumn2 from '@/images/column-2.jpg'
import imgColumn3 from '@/images/column-3.jpg'
import imgColumn4 from '@/images/column-4.jpg'
import imgColumn5 from '@/images/column-5.jpg'
import imgColumn6 from '@/images/column-6.jpg'
import imgColumn7 from '@/images/column-7.jpg'
import imgColumn8 from '@/images/column-8.jpg'
import {useEffect, useState} from "react";

const Column = () => {
  const imgColumns = [imgColumn1, imgColumn2, imgColumn3, imgColumn4, imgColumn5, imgColumn6, imgColumn7, imgColumn8];

  // Load more button
  const PAGE_SIZE = 4;

  const [index, setIndex] = useState(1);

  const [visibleColumn, setVisibleColumn] = useState<{ date: string; description: string; tag: string; srcImg: string; }[]>([]);

  useEffect(() => {
    const numberOfItems = PAGE_SIZE * (index + 1);

    const newArray = [];
    for (let i = 0; i < numberOfItems; i++) {
      if (i < numberOfItems) {
        newArray.push({
          date: "2021.05.21 23:25",
          description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
          tag: "#魚料理  #和食  #DHA",
          srcImg: imgColumns[Math.floor(Math.random() * imgColumns.length)]
        })
      }
    }

    setVisibleColumn(newArray);

  }, [index])

  const onLoadMore = () => {
    setIndex(index + 1);
  }

  return (
    <div className="relative wrapper-content">
      <div className="grid grid-cols-1 gap-8 my-12 md:grid-cols-4">
        <div className="px-2 py-4 text-center text-white bg-dark-600">
          <h2 className="text-primary-300 text-[22px] uppercase leading-7">RECOMMENDED COLUMN</h2>
          <div className="w-24 mx-auto my-2 border-b border-white"/>
          <p className="font-notoSansJP text-[18px]">オススメ</p>
        </div>
        <div className="px-2 py-4 text-center text-white bg-dark-600">
          <h2 className="text-primary-300 text-[22px] uppercase leading-7">RECOMMENDED DIET</h2>
          <div className="w-24 mx-auto my-2 border-b border-white"/>
          <p className="font-notoSansJP text-[18px]">ダイエット</p>
        </div>
        <div className="px-2 py-4 text-center text-white bg-dark-600">
          <h2 className="text-primary-300 text-[22px] uppercase leading-7">RECOMMENDED BEAUTIY</h2>
          <div className="w-24 mx-auto my-2 border-b border-white"/>
          <p className="font-notoSansJP text-[18px]">美容</p>
        </div>
        <div className="px-2 py-4 text-center text-white bg-dark-600">
          <h2 className="text-primary-300 text-[22px] uppercase leading-7">RECOMMENDED HEALTH</h2>
          <div className="w-24 mx-auto my-2 border-b border-white"/>
          <p className="font-notoSansJP text-[18px]">健康</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-12 md:grid-cols-4">
        {visibleColumn.map((item, index) => (
          <div key={index}>
            <Link to="#">
              <div className="relative">
                <img src={item?.srcImg} alt="" className="w-full"/>
                <span className="labelLeft">
                {item?.date}
              </span>
              </div>
            </Link>
            <p className="text-[15px] leading-6 mt-1.5 mb-1">{item?.description}</p>
            <Link className="text-sm text-primary-400" to="#">{item?.tag}</Link>
          </div>
        ))}
      </div>

      <div className="mb-12 text-center">
        <Link to="#" className="btn" onClick={() => onLoadMore()}>コラムをもっと見る</Link>
      </div>

      <ScrollTop/>
    </div>
  );
}

export default Column