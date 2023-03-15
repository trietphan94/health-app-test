import {Link} from 'react-router-dom'
import ScrollTop from '@/components/scroll-top'

const Challenge = () =>{
  return (
    <div className="relative wrapper-content">
      <div className="grid grid-cols-1 gap-8 my-12 md:grid-cols-4">
        <div className="px-2 py-4 text-center text-white bg-dark-600">
          <h2 className="text-primary-300 text-[22px] uppercase leading-7">RECOMMENDED COLUMN</h2>
          <div className="w-24 mx-auto my-2 border-b border-white" />
          <p className="font-notoSansJP text-[18px]">オススメ</p>
        </div>
        <div className="px-2 py-4 text-center text-white bg-dark-600">
          <h2 className="text-primary-300 text-[22px] uppercase leading-7">RECOMMENDED DIET</h2>
          <div className="w-24 mx-auto my-2 border-b border-white" />
          <p className="font-notoSansJP text-[18px]">ダイエット</p>
        </div>
        <div className="px-2 py-4 text-center text-white bg-dark-600">
          <h2 className="text-primary-300 text-[22px] uppercase leading-7">RECOMMENDED BEAUTIY</h2>
          <div className="w-24 mx-auto my-2 border-b border-white" />
          <p className="font-notoSansJP text-[18px]">美容</p>
        </div>
        <div className="px-2 py-4 text-center text-white bg-dark-600">
          <h2 className="text-primary-300 text-[22px] uppercase leading-7">RECOMMENDED HEALTH</h2>
          <div className="w-24 mx-auto my-2 border-b border-white" />
          <p className="font-notoSansJP text-[18px]">健康</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-12 md:grid-cols-4">
      {Array.from(Array(8).keys()).map(item => (
        <div key={item}>
          <Link to="#">
            <div className="relative">
              <img src={'https://placehold.co/235x145'} alt="" className="w-full" />
              <span className="labelLeft">
                2021.05.17   23:25
              </span>
            </div>
          </Link>
          <p className="text-[15px] leading-6 mt-1.5 mb-1">魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</p>
          <Link className="text-sm text-primary-400" to="#">#魚料理  #和食  #DHA</Link>
        </div>
        ))}
      </div>

      <div className="mb-12 text-center">
        <Link to="#" className="btn">コラムをもっと見る</Link>
      </div>

      <ScrollTop />
    </div>
  );
}

export default Challenge