import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white py-14 bg-dark-500 font-notoSansJP">
      <div className="wrapper-content">
        <ul className="space-y-3 text-center md:gap-10 md:flex text-xxs md:text-left md:space-y-0">
          <li><Link to="/">会員登録</Link></li>
          <li><Link to="/">運営会社</Link></li>
          <li><Link to="/">利用規約</Link></li>
          <li><Link to="/">個人情報の取扱について</Link></li>
          <li><Link to="/">特定商取引法に基づく表記</Link></li>
          <li><Link to="/">お問い合わせ</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer