const style1 = { backgroundImage: `url(${background1})` }
const style2 = { backgroundImage: `url(${background2})` }

const Hero = () => {
  return (
      <section className = "hero is-primary" style={style1}>
          <div className = "hero-body">
              <div className = "container has-text-centered s-divider">
                  <h1 className = "title">
                      魅力度ランキング</h1>
                  <h2 className = "subtitle">47都道府県比較サイト</h2>
              </div>
          </div>
      </section>
  );
};
const Footer = () => {
  return (
      <footer className = "footer">
          <div className = "content has-text-centered">
              <p>&copy; 2021 kouzuki miura</p>
          </div>
      </footer>
  );
}

const HP = () => {
  return (
    <body>
        <section class="section">
         <aside class="menu">
           <p class="menu-label">
             北海道
           </p>
           <ul class="menu-list">
             <li><a>北海道</a></li>
           </ul>
           <p class="menu-label">
             東北地方
           </p>
           <ul class="menu-list">
             <li><a>青森</a></li>
             <li><a>岩手</a></li>
             <li><a>宮城</a></li>
             <li><a>秋田</a></li>
             <li><a>山形</a></li>
             <li><a>福島</a></li>
           </ul>
           <p class="menu-label">
             関東地方
           </p>
           <ul class="menu-list">
             <li><a>茨城</a></li>
             <li><a>栃木</a></li>
             <li><a>群馬</a></li>
             <li><a>埼玉</a></li>
             <li><a>千葉</a></li>
             <li><a>東京</a></li>
             <li><a>神奈川</a></li>
           </ul>
           <p class="menu-label">
             中部地方
           </p>
           <ul class="menu-list">
             <li><a>新潟</a></li>
             <li><a>富山</a></li>
             <li><a>石川</a></li>
             <li><a>福井</a></li>
             <li><a>山梨</a></li>
             <li><a>長野</a></li>
             <li><a>岐阜</a></li>
             <li><a>静岡</a></li>
             <li><a>愛知</a></li>
           </ul>
           <p class="menu-label">
             関西地方
           </p>
           <ul class="menu-list">
             <li><a>三重</a></li>
             <li><a>滋賀</a></li>
             <li><a>京都</a></li>
             <li><a>大阪</a></li>
             <li><a>兵庫</a></li>
             <li><a>奈良</a></li>
             <li><a>和歌山</a></li>
           </ul>
           <p class="menu-label">
             中国地方
           </p>
           <ul class="menu-list">
             <li><a>鳥取</a></li>
             <li><a>島根</a></li>
             <li><a>岡山</a></li>
             <li><a>広島</a></li>
             <li><a>山口</a></li>
           </ul>
           <p class="menu-label">
             四国地方
           </p>
           <ul class="menu-list">
             <li><a>徳島</a></li>
             <li><a>香川</a></li>
             <li><a>愛媛</a></li>
             <li><a>高知</a></li>
           </ul>
           <p class="menu-label">
             九州地方・沖縄
           </p>
           <ul class="menu-list">
             <li><a>福岡</a></li>
             <li><a>佐賀</a></li>
             <li><a>長崎</a></li>
             <li><a>熊本</a></li>
             <li><a>大分</a></li>
             <li><a>宮崎</a></li>
             <li><a>鹿児島</a></li>
             <li><a>沖縄</a></li>
           </ul>
         </aside>
        </section>
    </body>
  );
  }

const AboutData = () => {
return (
  <body>
         <section className="section" style={style2}>
              <div class="container has-text-centered">
                  <h1 class="title">データ元</h1>
                  <h2 class="subtitle">以下のデータを参考にしました</h2>
                  <div class="columns is-desktop">
                    <div class="column">全国空港乗降客数一覧 <br/>http://airport.tokyu-agc.co.jp/airport_1_1.html</div>
                    <div class="column">主な農畜産物の産出額ランキング　<br/>https://www.sangyo.net/contents/myagri/regional-agriculture.html</div>
                    <div class="column">農林水産省 <br/>https://www.maff.go.jp/j/tokei/kouhyou/nougyou_sansyutu/
                    <br/> 政府統計の窓口e-Stat <br/>https://www.e-stat.go.jp/</div>
                    <div class="column">4</div>
                  </div>
              </div>
          </section>
      </body>
);
}

const BeforePressingButton = () => {
  return (
    <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-grey has-text-centered">
          <h1 className="title">知りたい都道府県ランキングは？</h1>
        </article>
    </div>
  );
}

const Button = (nowShowing) => {
  //console.log(nowShowing);
  if (nowShowing.value === 1) {
    return (<AboutTotal />);
  } else if (nowShowing.value === 2) {
    return (<AboutLocalResources />);
  } else if (nowShowing.value === 3) {
    return (<AboutAwareness />);
  }else{
    return (<BeforePressingButton />);
  }
};

import React, { useEffect, useState } from "react";
import { AboutTotal } from "./Total"
import { AboutLocalResources } from "./Resouces"
import { AboutAwareness } from "./Awareness"
import background1 from './media/3_kantou6__tokyo.png'
import background2 from './media/fukidashi10.png'

const App = () => {
  const [nowShowing, setNowShowing] = useState(0);
  return (
    <div>      
      <Hero />     
       <div class="notification is-primary">
         <div class="tile is-ancestor">
            <div class="tile is-vertical is-10">         
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <div class="content">
                  <section className="section">
                      <button className="button is-link is-large is-outlined" onClick={() => setNowShowing(1)}><p class="title is-1">1 総合点</p></button>                  
                      <button className="button is-primary is-large is-outlined" onClick={() => setNowShowing(2)}><p class="title is-1">2 地域資源</p>~農作物など~</button>
                      <button className="button is-danger is-large is-outlined" onClick={() => setNowShowing(3)}><p class="title is-1">3 認知度</p> ~SNSなど~</button>
                      <br/><br/><br/>
                      <Button value={nowShowing} />
                  </section>

               </div>
             </article>
             </div>
           </div>
           <div class="tile is-parent">
             <article class="tile is-child box">
             <div class="content　has-text-centered">
               <p class="title is-1">HP</p>
               <p class="subtitle">各都道府県のHPのリンク集</p>              
                 <HP />
             </div>
             </article>
           </div>
         </div>
       </div>                
      <AboutData />
      <Footer />
    </div>
  );
};
export default App;