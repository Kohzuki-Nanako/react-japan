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

const HP = () => {
  const divisions = [
    { region: "北海道", prefectures: [{ name: "北海道", url: "http://www.pref.hokkaido.lg.jp/" }] },
    {
      region: "東北地方",
      prefectures: [
        { name: "青森", url: "http://www.pref.aomori.lg.jp/" },
        { name: "岩手", url: "http://www.pref.iwate.jp/" },
        { name: "宮城", url: "http://www.pref.miyagi.jp/" },
        { name: "秋田", url: "http://www.pref.akita.lg.jp/" },
        { name: "山形", url: "http://www.pref.yamagata.jp/" },
        { name: "福島", url: "http://www.pref.fukushima.lg.jp/" },
      ],
    },
    {
      region: "関東地方",
      prefectures: [
        { name: "茨城", url: "http://www.pref.ibaraki.jp/" },
        { name: "栃木", url: "http://www.pref.tochigi.lg.jp/" },
        { name: "群馬", url: "http://www.pref.gunma.jp/" },
        { name: "埼玉", url: "http://www.pref.saitama.lg.jp/" },
        { name: "千葉", url: "http://www.pref.chiba.lg.jp/" },
        { name: "東京", url: "http://www.metro.tokyo.jp/" },
        { neme: "神奈川", url: "http://www.pref.kanagawa.jp/" },
      ],
    },
    {
      region: "中部地方",
      prefectures: [
        { name: "新潟", url: "http://www.pref.niigata.lg.jp/" },
        { name: "富山", url: "http://www.pref.toyama.jp/" },
        { name: "石川", url: "http://www.pref.ishikawa.lg.jp/" },
        { name: "福井", url: "http://www.pref.hukui.jp/" },
        { name: "山梨", url: "http://www.pref.yamanashi.jp/" },
        { name: "長野", url: "http://www.pref.nagano.jp/" },
        { neme: "岐阜", url: "http://www.pref.gifu.jp/" },
        { name: "静岡", url: "http://www.pref.shizuoka.jp/" },
        { name: "愛知", url: "http://www.pref.aichi.jp/" },
      ],
    },
    {
      region: "関西地方",
      prefectures: [
        { name: "三重", url: "http://www.pref.mie.jp/" },
        { name: "滋賀", url: "http://www.pref.shiga.jp/" },
        { name: "京都", url: "http://www.pref.kyoto.jp/" },
        { name: "大阪", url: "http://www.pref.osaka.jp/" },
        { name: "兵庫", url: "http://www.pref.hyogo.jp/" },
        { name: "奈良", url: "http://www.pref.nara.jp/" },
        { neme: "和歌山", url: "http://www.pref.wakayama.jp/" },
      ],
    },
    {
      region: "中国地方",
      prefectures: [
        { name: "鳥取", url: "http://www.pref.tottori.jp/" },
        { name: "島根", url: "http://www.pref.shimane.jp/" },
        { name: "岡山", url: "http://www.pref.okayama.jp/" },
        { name: "広島", url: "http://www.pref.hiroshima.jp/" },
        { name: "山口", url: "http://www.pref.yamaguchi.jp/" },
      ],
    },
    {
      region: "四国地方",
      prefectures: [
        { name: "徳島", url: "http://www.pref.tokushima.jp/" },
        { name: "香川", url: "http://www.pref.kagawa.jp/" },
        { name: "愛媛", url: "http://www.pref.ehime.jp/" },
        { name: "高知", url: "http://www.pref.kochi.jp/" },
      ],
    },
    {
      region: "九州地方・沖縄",
      prefectures: [
        { name: "福岡", url: "http://www.pref.fukuoka.jp/" },
        { name: "佐賀", url: "http://www.pref.saga.jp/" },
        { name: "長崎", url: "http://www.pref.nagasaki.jp/" },
        { name: "熊本", url: "http://www.pref.kumamotp.jp/" },
        { name: "大分", url: "http://www.pref.oita.jp/" },
        { name: "宮崎", url: "http://www.pref.miyazaki.jp/" },
        { neme: "鹿児島", url: "http://www.pref.kagpshima.jp/" },
        { neme: "沖縄", url: "http://www.pref.okinawa.jp/..." },
      ],
    },
  ];
  return (
    <div>
      <section className="section">
        <aside className="menu">
          {divisions.map((region) => {
            return (
              <div>
                <p className="menu-label" key={region}>
                  {region.region}
                </p>
                <ul className="menu-list">
                  {region.prefectures.map((prefecture) => {
                    return (
                      <li>
                        <a href={prefecture.url} key={prefecture}>
                          {prefecture.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
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
              <a href={"http://airport.tokyu-agc.co.jp/airport_1_1.html"}>
                {"全国空港乗降客数一覧"}
              </a>
            </div>
            <div className="column">
              <a
                href={
                  "https://www.sangyo.net/contents/myagri/regional-agriculture.html"
                }
              >
                {"主な農畜産物の産出額ランキング"}
              </a>
            </div>
            <div className="column">
              <a
                href={
                  "https://www.maff.go.jp/j/tokei/kouhyou/nougyou_sansyutu/"
                }
              >
                {"農林水産省"}
              </a>
            </div>
            <div className="column">
              <a href={"https://www.e-stat.go.jp/"}>
                {"政府統計の窓口e - Stat"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

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
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <button className="button is-link is-large is-outlined">
                        <p className="title is-1">1 総合点</p>
                      </button>
                    </Link>
                    <Link to="/local" style={{ textDecoration: "none" }}>
                      <button className="button is-primary is-large is-outlined">
                        <p className="title is-1">2 地域資源</p>~農作物など~
                      </button>
                    </Link>
                    <Link to="/awareness" style={{ textDecoration: "none" }}>
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
