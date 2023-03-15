import {useRef, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useOnClickOutside} from 'usehooks-ts'

const Header = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const refMenuToggle = useRef(null)

  useOnClickOutside(refMenuToggle, () => {
    setIsMenuOpen(false)
  })


  return (
    <header className="py-3 text-white bg-dark-500 font-notoSansJP">
      <div className="wrapper-content">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/">
              <Logo/>
            </Link>
          </div>
          <ul className="flex justify-center gap-10">
            <li className={`hidden md:block ${location.pathname.indexOf('my-record') >= 0 ? "text-primary-400" : ''}`}>
              <Link to="/my-record">
                <IconChallenge/>
                <span className="ml-1">
                  自分の記録
                </span>
              </Link>
            </li>
            <li className={`hidden md:block ${location.pathname.indexOf('column') >= 0 ? "text-primary-400" : ''}`}>
              <Link to="#">
                <IconMemo/>
                <span className="ml-1">
                  チャレンジ
                </span>
              </Link>
            </li>
            <li className={`hidden md:block ${location.pathname.indexOf('notice') >= 0 ? "text-primary-400" : ''}`}>
              <Link to="#">
                <span className="relative">
                  <IconInfo/>
                  <span
                    className="absolute block w-4 h-4 text-center text-[10px] text-white rounded-full -right-1 -top-1 bg-primary-500">1</span>
                </span>
                <span className="ml-1">
                  お知らせ
                </span>
              </Link>
            </li>
            <li className="relative" ref={refMenuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="cursor-pointer">
                {!isMenuOpen ?
                  <IconMenu/> : <IconMenuCollapse/>
                }
              </span>
              {isMenuOpen &&
                <ul className="absolute z-20 right-0 w-64 text-lg text-white top-[47px] bg-gray-400 font-notoSansJP">
                  <li className="p-4 border-b border-b-[#2E2E2E] border-opacity-50" onClick={() => console.log(123123)}>
                    <Link to="/my-record">自分の記録</Link>
                  </li>
                  <li
                    className="block md:hidden p-4 border-t border-b border-b-[#2E2E2E] border-opacity-50 border-t-white">
                    <Link to="#">チャレンジ</Link>
                  </li>
                  <li
                    className="block md:hidden p-4 border-t border-b border-b-[#2E2E2E] border-opacity-50 border-t-white">
                    <Link to="#">お知らせ</Link>
                  </li>

                  <li className="p-4 border-t border-b border-b-[#2E2E2E] border-opacity-50 border-t-white">
                    <Link to="#">体重グラフ</Link>
                  </li>
                  <li className="p-4 border-t border-b border-b-[#2E2E2E] border-opacity-50 border-t-white">
                    <Link to="#">目標</Link>
                  </li>
                  <li className="p-4 border-t border-b border-b-[#2E2E2E] border-opacity-50 border-t-white">
                    <Link to="#">選択中のコース</Link>
                  </li>
                  <li className="p-4 border-t border-b border-b-[#2E2E2E] border-opacity-50 border-t-white">
                    <Link to="/column">コラム一覧</Link>
                  </li>
                  <li className="p-4 border-t border-opacity-50 border-t-white">
                    <Link to="#">設定</Link>
                  </li>
                </ul>
              }
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header


const IconChallenge = () => (
  <svg className="inline-flex" width="32" height="32" viewBox="0 0 32 32" fill="none"
       xmlns="http://www.w3.org/2000/svg">
    <rect opacity="0.01" width="32" height="32" fill="#FF963C"/>
    <g clipPath="url(#clip0_24150_901)">
      <path
        d="M11.2523 14.468L10.44 15.0223C10.9593 15.7839 11.6219 16.4266 12.3809 16.9232L12.919 16.0994C12.2667 15.6732 11.6983 15.1201 11.2523 14.468Z"
        fill="#FF963C"/>
      <path
        d="M14.7857 5.71515C15.1977 5.62921 15.6062 5.58795 16.01 5.58795C16.3806 5.58795 16.7466 5.62213 17.1032 5.68915L17.2845 4.7229C16.8679 4.64532 16.4419 4.604 16.01 4.604C15.5402 4.604 15.0623 4.65228 14.5858 4.75116L14.567 4.75592L14.7695 5.71747L14.7857 5.71515Z"
        fill="#FF963C"/>
      <path
        d="M12.8181 6.46692L12.2625 5.65601C11.5022 6.17615 10.8596 6.83887 10.364 7.59803L11.188 8.13587C11.6128 7.48377 12.166 6.91297 12.8181 6.46692Z"
        fill="#FF963C"/>
      <path
        d="M10.2739 11.2434C10.2739 10.8715 10.3091 10.5043 10.3762 10.1453L9.41013 9.96411C9.33103 10.3819 9.29001 10.8092 9.29001 11.2434C9.29001 11.7142 9.33811 12.1909 9.4382 12.6687L9.44064 12.6805L10.4033 12.4792L10.4008 12.4687C10.3149 12.0568 10.2739 11.6472 10.2739 11.2434V11.2434Z"
        fill="#FF963C"/>
      <path
        d="M17.2145 16.8911C16.8024 16.977 16.3939 17.0182 15.9904 17.0182C15.6161 17.0182 15.2465 16.983 14.8864 16.9146L14.704 17.8809C15.123 17.9598 15.5539 18.001 15.9904 18.001C16.4599 18.001 16.9367 17.9527 17.4145 17.8539L17.4203 17.8526L17.2201 16.8899L17.2145 16.8911Z"
        fill="#FF963C"/>
      <path
        d="M22.5614 9.83667L22.5568 9.81299L21.594 10.0166L21.5986 10.0378C21.6846 10.4486 21.7258 10.8581 21.7258 11.2618C21.7258 11.6385 21.6893 12.0093 21.621 12.3706L22.5874 12.5542C22.6674 12.1328 22.7085 11.7008 22.7085 11.2618C22.7085 10.7922 22.6616 10.3144 22.5614 9.83666V9.83667Z"
        fill="#FF963C"/>
      <path
        d="M19.173 16.0415L19.7273 16.8536C20.4888 16.3346 21.1326 15.672 21.6292 14.9139L20.8066 14.375C20.3793 15.027 19.8262 15.5956 19.173 16.0415L19.173 16.0415Z"
        fill="#FF963C"/>
      <path
        d="M20.742 8.02496L21.5531 7.46936C21.0317 6.70905 20.3678 6.06641 19.6086 5.57202L19.072 6.39593C19.7252 6.82086 20.2949 7.3728 20.742 8.02496Z"
        fill="#FF963C"/>
      <path
        d="M19.3721 10.1399L17.0416 9.80139L15.9996 7.68994L14.9576 9.80139L12.627 10.1399L14.3133 11.7837L13.9153 14.1044L15.9996 13.0087L18.0838 14.1044L17.6859 11.7837L19.3721 10.1399Z"
        fill="#FF963C"/>
      <path fillRule="evenodd" clipRule="evenodd"
            d="M26.1129 11.5726C26.1129 8.65613 24.9791 6.00561 23.1522 4.09534C22.1625 3.06079 20.9658 2.23926 19.634 1.70374C18.5047 1.2483 17.2798 1 16.001 1C14.712 1 13.4747 1.25293 12.3388 1.71558C11.0172 2.2522 9.83173 3.06787 8.84894 4.09534C7.02179 6.00562 5.888 8.65613 5.888 11.5726C5.888 14.4879 7.02179 17.1361 8.84894 19.0463C10.6761 20.9589 13.2112 22.144 16.001 22.144C18.7896 22.144 21.3249 20.9589 23.1522 19.0463C24.9791 17.1361 26.1129 14.4879 26.1129 11.5726ZM16.001 20.1774C13.7247 20.1774 11.6735 19.217 10.1796 17.6575C8.68902 16.0957 7.76934 13.9524 7.76934 11.5726C7.76934 9.19287 8.68902 7.04602 10.1796 5.48767C11.1534 4.47192 12.3624 3.70935 13.7191 3.3009C14.4417 3.08557 15.2084 2.96789 16.001 2.96789C16.7812 2.96789 17.5366 3.07958 18.2514 3.29382C19.6193 3.69751 20.8406 4.46496 21.8214 5.48767C23.312 7.04602 24.2316 9.19287 24.2316 11.5726C24.2316 13.9524 23.312 16.0957 21.8214 17.6575C20.3273 19.217 18.2774 20.1774 16.001 20.1774H16.001Z"
            fill="#FF963C"/>
      <path
        d="M8.73693 20.2417C8.5841 20.118 8.42992 19.9956 8.28161 19.8638L8.28051 19.8674L8.26867 19.8579L4.60461 27.7047L4.5 27.986L4.63892 28.206C4.73902 28.3591 4.90125 28.4498 5.08265 28.4498H5.16847L8.67006 27.3611L10.0552 30.6754C10.1413 30.8707 10.327 31.0002 10.5426 31.0002C10.7473 31.0002 10.9334 30.8802 11.0192 30.6942L13.8534 24.6258L14.6901 22.8428L14.6867 22.8415L14.6925 22.8274C12.4611 22.5096 10.4225 21.5869 8.73695 20.2417L8.73693 20.2417Z"
        fill="#FF963C"/>
      <path
        d="M24.5542 21.6375L23.7315 19.8685L23.7281 19.8709L23.7222 19.8579C22.0745 21.3091 20.0335 22.3248 17.7903 22.7356C17.6324 22.7639 17.4761 22.7957 17.3159 22.8168L17.3172 22.8203L17.303 22.8239L20.9763 30.6942C21.062 30.8814 21.2481 31.0002 21.4529 31.0002C21.6685 31.0002 21.8543 30.8707 21.9402 30.6754L23.3255 27.3611L26.7598 28.4262L26.8408 28.4498H26.9129C27.094 28.4498 27.2564 28.3591 27.3565 28.2061L27.5003 27.939L24.5542 21.6375Z"
        fill="#FF963C"/>
    </g>
    <defs>
      <clipPath id="clip0_24150_901">
        <rect width="23.0002" height="30.0003" fill="white" transform="translate(4.5 1)"/>
      </clipPath>
    </defs>
  </svg>
)

const IconMemo = () => (
  <svg className="inline-flex" width="32" height="32" viewBox="0 0 32 32" fill="none"
       xmlns="http://www.w3.org/2000/svg">
    <rect opacity="0.01" width="32" height="32" fill="#FF963C"/>
    <path
      d="M29.549 10.665L28.5569 9.67389C27.9561 9.07196 26.9812 9.07318 26.3792 9.67389L25.452 10.6024L28.6208 13.7711L29.549 12.8437C30.1499 12.2419 30.1499 11.2669 29.549 10.665H29.549Z"
      fill="#FF963C"/>
    <path d="M16.76 19.2868V22.4561H19.9294L27.7571 14.6284L24.5879 11.459L16.76 19.2868Z" fill="#FF963C"/>
    <rect x="9.34717" y="9.93433" width="8.9516" height="1.49193" fill="#FF963C"/>
    <rect x="9.34717" y="15.3984" width="8.9516" height="1.49193" fill="#FF963C"/>
    <rect x="9.36633" y="20.8625" width="5.47042" height="1.49193" fill="#FF963C"/>
    <path
      d="M22.5858 26.5985C22.5858 26.826 22.4027 27.0117 22.1775 27.0129H5.36658C5.14148 27.0117 4.9596 26.826 4.95838 26.5985V5.40259C4.9596 5.17407 5.14149 4.98828 5.36658 4.98718H22.1775C22.4027 4.98828 22.5858 5.17407 22.5858 5.40259V11.3897L24.5441 9.40253V5.40259C24.543 4.07593 23.4861 3.0011 22.1775 3H5.36658C4.05933 3.0011 3.00147 4.07593 3 5.40259V26.5985C3.00146 27.9252 4.05933 28.9989 5.36658 29H22.1775C23.4861 28.9989 24.543 28.7748 24.5441 27.4482V19.9488L22.5858 21.9359V26.5985Z"
      fill="#FF963C"/>
  </svg>
)

const IconInfo = () => (
  <svg className="inline-flex" width="32" height="32" viewBox="0 0 32 32" fill="none"
       xmlns="http://www.w3.org/2000/svg">
    <rect opacity="0.01" width="32" height="32" fill="#FF963C"/>
    <path fillRule="evenodd" clipRule="evenodd"
          d="M28.5 25.2975H16.0722L8.07178 31V25.2975H3.5V3H28.5V25.2975H28.5ZM26.2142 5.27186H5.78577V23.0256H10.3576V26.5755L15.3374 23.0256H26.2142V5.27186ZM17.3634 13.391V19.9249H14.7335V13.391H17.3634ZM16.048 11.4314C16.9555 11.4314 17.6913 10.6998 17.6913 9.79798C17.6913 8.896 16.9555 8.16444 16.048 8.16444C15.1405 8.16444 14.4044 8.89601 14.4044 9.79798C14.4044 10.6998 15.1405 11.4314 16.048 11.4314Z"
          fill="#FF963C"/>
  </svg>
)

const IconMenu = () => (
  <svg className="inline-flex" width="32" height="32" viewBox="0 0 32 32" fill="none"
       xmlns="http://www.w3.org/2000/svg">
    <rect opacity="0.01" width="32" height="32" fill="#FF963C"/>
    <path d="M3 8H29" stroke="#FF963C" strokeWidth="3"/>
    <path d="M3 16H29" stroke="#FF963C" strokeWidth="3"/>
    <path d="M3 24H29" stroke="#FF963C" strokeWidth="3"/>
  </svg>
)

const IconMenuCollapse = () => (
  <svg className="inline-block" width="32" height="32" viewBox="0 0 32 32" fill="none"
       xmlns="http://www.w3.org/2000/svg">
    <rect opacity="0.01" width="32" height="32" fill="#FF963C"/>
    <path d="M7 7L26 26" stroke="#FF963C" strokeWidth="3"/>
    <path d="M7 26L26 7" stroke="#FF963C" strokeWidth="3"/>
  </svg>

)

const Logo = () => (
  <svg width="109" height="40" viewBox="0 0 109 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_24150_870)">
      <path
        d="M15.8646 11.5166H25.3419V19.3131H28.9509V0.0280762H25.3419V8.15528H15.8646V0.0280762H12.228V19.3131H15.8646V11.5166Z"
        fill="#FF963C"/>
      <path fillRule="evenodd" clipRule="evenodd"
            d="M37.6932 19.6437C39.7593 19.6437 42.1011 18.9274 43.5338 17.4396L41.3847 15.3182C40.6133 16.1173 38.988 16.5856 37.7482 16.5856C35.3789 16.5856 33.9188 15.3735 33.6983 13.6929H44.3051C44.8286 8.10022 41.9909 5.29004 37.4451 5.29004C33.0372 5.29004 30.227 8.2655 30.227 12.3979C30.227 16.7509 33.0096 19.6437 37.6932 19.6437ZM37.5552 8.2655C39.4838 8.2655 40.8614 9.14709 41.0816 10.9103H33.7535C34.2493 9.1471 35.7371 8.2655 37.5552 8.2655H37.5552Z"
            fill="#FF963C"/>
      <path fillRule="evenodd" clipRule="evenodd"
            d="M52.8958 19.6984C54.4111 19.6709 56.5324 18.8993 57.3039 17.3015L57.4692 19.2852H60.6374V5.70287H57.414L57.3039 7.57628C56.5324 6.2263 54.7968 5.3723 52.9786 5.3723C49.0113 5.34471 45.898 7.79674 45.898 12.4802C45.898 17.2462 48.8736 19.7259 52.8958 19.6984L52.8958 19.6984ZM53.2815 8.37524C58.5711 8.37524 58.5711 16.6125 53.2815 16.6125C51.0499 16.6125 49.2592 15.0699 49.2592 12.4802C49.2592 9.8905 51.0499 8.37524 53.2815 8.37524Z"
            fill="#FF963C"/>
      <rect x="63.0323" y="0.0275879" width="3.33355" height="19.2575" fill="#FF963C"/>
      <path
        d="M82.6182 12.3424C82.6182 10.3037 83.9955 8.62317 85.9792 8.62317C87.7701 8.62317 89.0649 9.67017 89.0649 12.1495V19.285H92.4261V12.1221C92.4261 8.12733 90.718 5.51014 86.8608 5.51014C85.3181 5.51014 83.8304 5.9784 82.6182 7.54871V0H79.257V19.285H82.6182V12.3424Z"
        fill="#FF963C"/>
      <path
        d="M70.8417 14.4909C70.8417 17.8797 72.7702 19.5602 75.7179 19.4501C76.7374 19.4225 77.5363 19.2572 78.5006 18.8714L77.5638 16.0062C77.068 16.2543 76.4618 16.4195 75.9384 16.4195C74.8915 16.4195 74.1752 15.7859 74.1752 14.491V8.6228H77.9496V5.7301H74.2028V2.41797H70.8417V5.7301H68.307V8.6228H70.8417L70.8417 14.4909Z"
        fill="#FF963C"/>
      <path
        d="M105.449 5.37207L101.771 13.6346L98.1082 5.37207H94.5596L99.9926 17.6289L92.3602 34.7745L79.0009 23.4341L0 23.4408V26.5778L77.775 26.5792L93.5334 40L109 5.37207H105.449Z"
        fill="#FF963C"/>
    </g>
    <defs>
      <clipPath id="clip0_24150_870">
        <rect width="109" height="39.9999" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)