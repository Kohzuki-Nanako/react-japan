import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { AboutTotal } from "./Total";
import { AboutLocalResources } from "./Resouces";
import { AboutAwareness } from "./Awareness";
import background1 from "./media/3_kantou6__tokyo.png";
import background2 from "./media/fukidashi10.png";
import Appcss from "./App.css";

const style1 = { backgroundImage: `url(${background1})` };
const style2 = { backgroundImage: `url(${background2})` };

const Hero = () => {
  return (
    <section className="hero is-primary" style={style1}>
      <div className="hero-body">
        <div className="container has-text-centered s-divider">
          <h1 className="text9">魅力度ランキング</h1>
          <h2 className="subtitle">~データの世界で都道府県を比べてみました~</h2>
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
      <div className="level-item">
        <a href="https://github.com/Kohzuki-Nanako">
          <span className="icon is-small has-text-link">
            <i class="fab fa-github "></i>
          </span>
        </a>
      </div>
    </footer>
  );
};

const HP = () => {
  const divisions = [
    {
      region: "北海道",
      prefectures: [{ name: "北海道", url: "http://www.pref.hokkaido.lg.jp/" }],
    },
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
        { neme: "岐阜", url: "https://www.pref.gifu.lg.jp/" },
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
        { neme: "和歌山", url: "https://www.pref.wakayama.lg.jp/" },
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
        { neme: "鹿児島", url: "http://www.pref.kagoshima.jp/index2.htmlÏ" },
        { neme: "沖縄", url: "https://www.pref.okinawa.jp/" },
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
              <a href={"https://www.mlit.go.jp/"}>{"●国土交通省"}</a>
              <br />
              <a href={"https://www.cab.mlit.go.jp/tcab/statistics/01.html"}>
                {"●国土交通省東京航空局"}
              </a>
              <br />
              <a href={"http://ocab.mlit.go.jp/top/"}>
                {"●国土交通省大阪航空局"}
              </a>
              <br />
              <a href={"https://www.mlit.go.jp/kankocho/"}>
                {"●国土交通省観光庁"}
              </a>
              <br />
              <a
                href={
                  "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&toukei=00601030&tstat=000001079655&cycle=7&year=20190&month=0&result_back=1&tclass1val=0"
                }
              >
                {"訪日外国人消費動向調査"}
              </a>
            </div>
            <div className="column">
              <a
                href={
                  "https://ja.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E3%81%AE%E3%83%86%E3%83%AC%E3%83%93%E3%83%89%E3%83%A9%E3%83%9E%E4%B8%80%E8%A6%A7_(2020%E5%B9%B4%E4%BB%A3)"
                }
              >
                {"●日本のテレビドラマ一覧 (2020年代)"}
              </a>
            </div>
            <div className="column">
              <a
                href={
                  "https://www.maff.go.jp/j/tokei/kouhyou/nougyou_sansyutu/"
                }
              >
                {"●農林水産省"}
              </a>
              <br />
              <a
                href={
                  "https://www.enecho.meti.go.jp/statistics/electric_power/ep002/results.html"
                }
              >
                {"●経済産業省　資源エネルギー庁"}
              </a>
              <br />
              <a
                href={
                  "https://www.sangyo.net/contents/myagri/regional-agriculture.html"
                }
              >
                {"●データからみる地域の農業"}
              </a>
            </div>
            <div className="column">
              <a href={"https://www.e-stat.go.jp/"}>
                {"●政府統計の窓口e - Stat"}
              </a>
              <br />
              <br />
              <a
                href={
                  "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&toukei=00500215&tstat=000001013427&cycle=7&tclass1=000001032288&tclass2=000001032753&tclass3=000001137506&cycle_facet=tclass1%3Atclass2%3Acycle&tclass4val=0"
                }
              >
                {"水稲　"}
              </a>
              <a
                href={
                  "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&toukei=00500225&tstat=000001015114&cycle=7&year=20180&month=0&tclass1=000001015842&tclass2=000001131883"
                }
              >
                {"牛乳　"}
              </a>
              <a
                href={
                  "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&toukei=00500215&tstat=000001013427&cycle=7&year=20190&month=0&tclass1=000001032286&tclass2=000001032933&tclass3=000001147186&stat_infid=000032029637&tclass4val=0"
                }
              >
                {"トマト　"}
              </a>
              <a
                href={
                  "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&toukei=00500215&tstat=000001013427&cycle=7&year=20190&month=0&tclass1=000001032286&tclass2=000001032933&tclass3=000001147186"
                }
              >
                {"いちご　"}
              </a>
              <a
                href={
                  "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&toukei=00500222&tstat=000001015614&cycle=7&year=20190&month=0&tclass1=000001020206&tclass2=000001134566&stat_infid=000031878390&tclass3val=0"
                }
              >
                {"鶏卵　"}
              </a>
              <br />
              <a
                href={
                  "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&toukei=00500222&tstat=000001015614&cycle=7&year=20190&month=0&tclass1=000001020206&tclass2=000001134566&stat_infid=000031878393&tclass3val=0"
                }
              >
                {"ブロイラー　"}
              </a>
              <a
                href={
                  "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&toukei=00500222&tstat=000001015614&cycle=7&year=20200&month=0&tclass1=000001020206&tclass2=000001147187"
                }
              >
                {"肉用牛　"}
              </a>
              <a
                href={
                  "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&toukei=00500222&tstat=000001015614&cycle=7&year=20190&month=0&tclass1=000001020206&tclass2=000001134566"
                }
              >
                {"豚　"}
              </a>
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Hero />
      <div className="notification is-primary">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-9">
            <div className="tile is-parent">
              <article className="tile is-child box">
                <div className="content">
                  <section className="section">
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <button className="button is-link is-large is-outlined">
                        <p className="title is-1">1　 総合点　</p>
                      </button>
                    </Link>
                    <Link to="/local" style={{ textDecoration: "none" }}>
                      <button className="button is-primary is-large is-outlined">
                        <p className="title is-1">2　地域資源　</p>
                      </button>
                    </Link>
                    <Link to="/awareness" style={{ textDecoration: "none" }}>
                      <button className="button is-danger is-large is-outlined">
                        <p className="title is-1">3 　認知度　</p>
                      </button>
                    </Link>
                    <br />
                    <br />
                    <br />
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
