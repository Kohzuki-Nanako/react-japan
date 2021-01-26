import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const style1 = { backgroundImage: `url(${background1})` };
const style2 = { backgroundImage: `url(${background2})` };

const Hero = () => {
  return (
    <section className="hero is-primary" style={style1}>
      <div className="hero-body">
        <div className="container has-text-centered s-divider">
          <h1 className="title">魅力度ランキング</h1>
          <h2 className="subtitle">47都道府県比較サイト</h2>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>&copy; 2021 kouzuki miura</p>
      </div>
    </footer>
  );
};

// const rurals = [
//   {rural: "北海道地方", prefectures: [
//     {name: '北海道', url: "htt"}
//   ]
// },
// {rural:"東北", prefectures: [
//   {name: '青森', url:'https://...'},
//   {name: '青森', url:'https://...'},
//   {name: '青森', url:'https://...'},
//   {name: '青森', url:'https://...'},
// ]}
// ]

// これで右のメニューを表示するといいと思う
// rurals.map(rural => {
//   return (
//     <div>
//       <p className='menu-label'>
//         {rural}
//       </p>
//       <ul>
//         {rural.prefectures.map((prefecture ) => {
//           return (
//             <li>
//               <a href={prefecture.url}>
//               {prefecture.name}
//               </a>
//               </li>
//           )
//         })}
//       </ul>
//       </div>
//   )
// })

const HP = () => {
  return (
    <div>
      <section className="section">
        <aside className="menu">
          <p className="menu-label">北海道</p>
          <ul className="menu-list">
            <li>
              <a>北海道</a>
            </li>
          </ul>
          <p className="menu-label">東北地方</p>
          <ul className="menu-list">
            <li>
              <a>青森</a>
            </li>
            <li>
              <a>岩手</a>
            </li>
            <li>
              <a>宮城</a>
            </li>
            <li>
              <a>秋田</a>
            </li>
            <li>
              <a>山形</a>
            </li>
            <li>
              <a>福島</a>
            </li>
          </ul>
          <p className="menu-label">関東地方</p>
          <ul className="menu-list">
            <li>
              <a>茨城</a>
            </li>
            <li>
              <a>栃木</a>
            </li>
            <li>
              <a>群馬</a>
            </li>
            <li>
              <a>埼玉</a>
            </li>
            <li>
              <a>千葉</a>
            </li>
            <li>
              <a>東京</a>
            </li>
            <li>
              <a>神奈川</a>
            </li>
          </ul>
          <p className="menu-label">中部地方</p>
          <ul className="menu-list">
            <li>
              <a>新潟</a>
            </li>
            <li>
              <a>富山</a>
            </li>
            <li>
              <a>石川</a>
            </li>
            <li>
              <a>福井</a>
            </li>
            <li>
              <a>山梨</a>
            </li>
            <li>
              <a>長野</a>
            </li>
            <li>
              <a>岐阜</a>
            </li>
            <li>
              <a>静岡</a>
            </li>
            <li>
              <a>愛知</a>
            </li>
          </ul>
          <p className="menu-label">関西地方</p>
          <ul className="menu-list">
            <li>
              <a>三重</a>
            </li>
            <li>
              <a>滋賀</a>
            </li>
            <li>
              <a>京都</a>
            </li>
            <li>
              <a>大阪</a>
            </li>
            <li>
              <a>兵庫</a>
            </li>
            <li>
              <a>奈良</a>
            </li>
            <li>
              <a>和歌山</a>
            </li>
          </ul>
          <p className="menu-label">中国地方</p>
          <ul className="menu-list">
            <li>
              <a>鳥取</a>
            </li>
            <li>
              <a>島根</a>
            </li>
            <li>
              <a>岡山</a>
            </li>
            <li>
              <a>広島</a>
            </li>
            <li>
              <a>山口</a>
            </li>
          </ul>
          <p className="menu-label">四国地方</p>
          <ul className="menu-list">
            <li>
              <a>徳島</a>
            </li>
            <li>
              <a>香川</a>
            </li>
            <li>
              <a>愛媛</a>
            </li>
            <li>
              <a>高知</a>
            </li>
          </ul>
          <p className="menu-label">九州地方・沖縄</p>
          <ul className="menu-list">
            <li>
              <a>福岡</a>
            </li>
            <li>
              <a>佐賀</a>
            </li>
            <li>
              <a>長崎</a>
            </li>
            <li>
              <a>熊本</a>
            </li>
            <li>
              <a>大分</a>
            </li>
            <li>
              <a>宮崎</a>
            </li>
            <li>
              <a>鹿児島</a>
            </li>
            <li>
              <a>沖縄</a>
            </li>
          </ul>
        </aside>
      </section>
    </div>
  );
};

const AboutData = () => {
  return (
    <div>
      <section className="section" style={style2}>
        <div className="container has-text-centered">
          <h1 className="title">データ元</h1>
          <h2 className="subtitle">以下のデータを参考にしました</h2>
          <div className="columns is-desktop">
            <div className="column">
              全国空港乗降客数一覧 <br />
              http://airport.tokyu-agc.co.jp/airport_1_1.html
            </div>
            <div className="column">
              主な農畜産物の産出額ランキング　
              <br />
              https://www.sangyo.net/contents/myagri/regional-agriculture.html
            </div>
            <div className="column">
              農林水産省 <br />
              https://www.maff.go.jp/j/tokei/kouhyou/nougyou_sansyutu/
              <br /> 政府統計の窓口e-Stat <br />
              https://www.e-stat.go.jp/
            </div>
            <div className="column">4</div>
          </div>
        </div>
      </section>
    </div>
  );
};

const BeforePressingButton = () => {
  return (
    <div className="tile is-parent is-vertical">
      <article className="tile is-child notification is-grey has-text-centered">
        <h1 className="title">知りたい都道府県ランキングは？</h1>
      </article>
    </div>
  );
};

// const Button = (nowShowing) => {
//   //console.log(nowShowing);
//   if (nowShowing.value === 1) {
//     return <AboutTotal />;
//   } else if (nowShowing.value === 2) {
//     return <AboutLocalResources />;
//   } else if (nowShowing.value === 3) {
//     return <AboutAwareness />;
//   } else {
//     return <BeforePressingButton />;
//   }
// };

import React, { useEffect, useState } from "react";
import { AboutTotal } from "./Total";
import { AboutLocalResources } from "./Resouces";
import { AboutAwareness } from "./Awareness";
import background1 from "./media/3_kantou6__tokyo.png";
import background2 from "./media/fukidashi10.png";

// function fuga() {
//   return (
//     <Router>
//       <Hero />
//       <div className='notification is-primary'>
//         <div className='box'>
//           <div className='content'>
//           </div>
//           </div>
//         </div>
//       </Router>
//   )
// }

const App = () => {
  const [nowShowing, setNowShowing] = useState(0);
  return (
    <Router>
      <Hero />
      <div className="notification is-primary">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-10">
            <div className="tile is-parent">
              <article className="tile is-child box">
                <div className="content">
                  <section className="section">
                    {/* <button
                      className="button is-link is-large is-outlined"
                      onClick={() => setNowShowing(1)}
                    >
                      <p className="title is-1">1 総合点</p>
                    </button>
                    <button
                      className="button is-primary is-large is-outlined"
                      onClick={() => setNowShowing(2)}
                    >
                      <p className="title is-1">2 地域資源</p>~農作物など~
                    </button>
                    <button
                      className="button is-danger is-large is-outlined"
                      onClick={() => setNowShowing(3)}
                    >
                      <p className="title is-1">3 認知度</p> ~SNSなど~
                    </button>
                    <br />
                    <br />
                    <br />
                    <Button value={nowShowing} /> */}
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      <button className="button is-link is-large is-outlined">
                        <p className="title is-1">1 総合点</p>
                      </button>
                    </Link>
                    <Link to="/local" style={{ textDecoration: 'none' }}>
                      <button className="button is-primary is-large is-outlined">
                        <p className="title is-1">2 地域資源</p>~農作物など~
                      </button>
                    </Link>
                    <Link to="/awareness" style={{ textDecoration: 'none' }}>
                      <button className="button is-danger is-large is-outlined">
                        <p className="title is-1">3 認知度</p> ~SNSなど~
                      </button>
                    </Link>
                    <Route path="/" exact>
                      <AboutTotal />
                    </Route>
                    <Route path="/local" exact>
                      <AboutLocalResources />
                    </Route>
                    <Route path="/awareness" exact>
                      <AboutAwareness />
                    </Route>
                  </section>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <div className="content　has-text-centered">
                <p className="title is-1">HP</p>
                <p className="subtitle">各都道府県のHPのリンク集</p>
                <HP />
              </div>
            </article>
          </div>
        </div>
      </div>
      <AboutData />
      <Footer />
    </Router>
  );
};
export default App;
