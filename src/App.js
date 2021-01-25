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

//日本地図を描くプログラム
const ChoroplethMap = ({ features }) => {
  const width = 900;
  const height = 900;
  const projection = d3.geoMercator().scale(1600).center([139.69167, 35.68944]).translate([width/2, height/2]);
  const path = d3.geoPath().projection(projection);
  const color = d3
    .scaleLinear()
    .domain(d3.extent(features, (feature) => feature.properties.value))
    .range(["#ccc", "#0f0"]);
  
  //印
  const radius = 25;
  //米のみの場合で考えると？
  const rData = RankingData;
  const rice = rData.map((item) => {
    const obj = {
      都道府県:item.都道府県名,
      米:item.米,
      x:item.経度,
      y:item.緯度
    }
    return obj;
  });
  //降順にソート 
  const r = rice.sort((a,b) => (b.米) - (a.米));
  //console.log(r);
  //〜印

  return (
    <svg width={width} height={height}>
      <g>
        {features.map((feature, i) => (
          <path
            key={i}
            d={path(feature)}
            fill="springgreen"
            stroke="black"
          />
        ))}
      </g>
      
      {/*印の大きさについて*/}
        <g transform="translate(width/2,height)">
            <text x={width-250} y={height-500} fontSize="20">円の大きさ・色について</text>

            <circle cx={width-200} cy={height-450} r={radius-5} fill="red" opacity="0.5"/>
            <text x={width-200+radius} y={height-443} fontSize="20">1位</text>

            <circle cx={width-200} cy={height-400} r={radius-5} fill="blue" opacity="0.5"/>
            <text x={width-200+radius} y={height-393} fontSize="20">2位</text>

            <circle cx={width-200} cy={height-350} r={radius-5} fill="yellow" opacity="0.5"/>
            <text x={width-200+radius} y= {height-343}fontSize="20">3位</text>

            <circle cx={width-200} cy={height-300} r={radius-10} fill="black" opacity="0.5"/>
            <text x={width-195+radius-10} y={height-294} fontSize="20">3~10位</text>

            <circle cx={width-200} cy={height-250} r={radius-15} fill="black" opacity="0.5"/>
            <text x={width-195+radius-15} y={height-243} fontSize="20">10~20位</text>

            <circle cx={width-200} cy={height-200} r={radius-18} fill="black" opacity="0.5"/>
            <text x={width-195+radius-18} y={height-193} fontSize="20">20~30位</text>

            <circle cx={width-200} cy={height-150} r={radius-20} fill="black" opacity="0.5"/>
            <text x={width-195+radius-20} y={height-143} fontSize="20">30~40位</text>
        </g>
        {/*〜印の大きさについて*/}

        {/*印（米のみの場合）*/}
        <g>
          {rice.map((item,i) => {
            //x=経度 y=緯度
            const x = projection([rice[i].x, rice[i].y])[0];
            const y = projection([rice[i].x, rice[i].y])[1];
            //console.log(x,y);
            return <circle cx={x} cy={y} r={radius} fill="red" opacity="0.5"/>;
          })}
        </g>
      {/*〜印（米のみの場合）*/}
    </svg>
  );
};
export const ChoroplethMapPage = () => {
  const [features, setFeatures] = useState(null);
  useEffect(() => {
    (async() => {
      const res = await fetch(`${process.env.PUBLIC_URL}/data/japan.json`)
      const data = await res.json()
      const { features } = topojson.feature(data, data.objects.japan);
      setFeatures(features);
    })()
  },[])
  if (features == null) {
    return <p>loading</p>;
  }
  return <ChoroplethMap features={features} />;
};
//〜日本地図を描くプログラム


//地域資源についてのプログラム
const AboutLocalResources = () => {
  //const rData = RankingData;

  const [val, setVal] = React.useState([]);
  const handleChange = e => {
    //ONかOFFか
    if (val.includes(e.target.value)) {
      // すでに含まれていればOFFしたと判断し、イベント発行元を除いた配列をsetし直す
      setVal(val.filter(item => item !== e.target.value));
    } else {
      // そうでなければONと判断し、イベント発行元を末尾に加えた配列をsetし直す
      setVal([...val, e.target.value]);
      // stateは直接は編集できない( = val.push(e.target.value) はNG)
    }
  };
  
  const drawGraph = (e) => {
    //日本地図を書くプログラム
  }
  return ( 
    <div className="tile is-parent is-vertical">
      <article className="tile is-child notification is-grey has-text-centered">
        <div>
        <form onreset = "reset">
        <label>
          <input type="checkbox" value="火力" onChange={handleChange} checked={val.includes('火力')}/>
          火力
        </label>
        <label>
          <input type="checkbox" value="水力" onChange={handleChange} checked={val.includes('水力')} />
          水力
        </label>
        <label>
          <input type="checkbox" value="風力" onChange={handleChange} checked={val.includes('風力')} />
          風力
        </label>
        <label>
          <input type="checkbox" value="原子力" onChange={handleChange} checked={val.includes('原子力')} />
          原子力
        </label>
        <label>
          <input type="checkbox" value="太陽光" onChange={handleChange} checked={val.includes('太陽光')} />
          太陽光
        </label>
        <label>
          <input type="checkbox" value="地熱" onChange={handleChange} checked={val.includes('地熱')} />
          地熱
        </label>
        <br/>
        <label>
          <input type="checkbox" value="米" onChange={handleChange} checked={val.includes('米')} />
          米
        </label>
        <label>
          <input type="checkbox" value="牛乳" onChange={handleChange} checked={val.includes('牛乳')} />
          牛乳
        </label>
        <label>
          <input type="checkbox" value="肉用牛" onChange={handleChange} checked={val.includes('肉用牛')} />
          肉用牛
        </label>
        <label>
          <input type="checkbox" value="豚" onChange={handleChange} checked={val.includes('豚')} />
          豚
        </label>
        <label>
          <input type="checkbox" value="鶏卵" onChange={handleChange} checked={val.includes('鶏卵')} />
          鶏卵
        </label>
        <label>
          <input type="checkbox" value="プロイラー" onChange={handleChange} checked={val.includes('プロイラー')} />
          プロイラー
        </label>
        <label>
          <input type="checkbox" value="トマト" onChange={handleChange} checked={val.includes('トマト')} />
          トマト
        </label>
        <label>
          <input type="checkbox" value="乳牛" onChange={handleChange} checked={val.includes('乳牛')} />
          乳牛
        </label>
        <label>
          <input type="checkbox" value="いちご" onChange={handleChange} checked={val.includes('いちご')} />
          いちご
        </label>
      <p>選択値：{val.join(', ')}</p>
        </form>
        </div>
        <ChoroplethMapPage /> 
      </article>
    </div>
  );
}

//認知度についてのプログラム
const AboutAwareness = () => {
  const data = []
  var flag = [0, 0, 0, 0, 0, 0, 0, 0]
  const add = (event) => {
    if(flag[event.target.value - 1] === 0){
      //data変数にデータを代入（初期化？）

    }else{
      data.map((item, i) => {
        //チェックした内容と一致するデータのみを取得
      })
    }
    //flag[event.target.value - 1] = 1
  }
  const drawGraph = (e) => {
    //日本地図を書くプログラム
  }
  return (
    <div className="tile is-parent is-vertical">
      <article className="tile is-child notification is-grey has-text-centered">
        <div>
        <form onreset = "reset">
              <input type = "checkbox" value = "1" id="Youtube登録者数" onClick = {add} />
              Youtube登録者数
              <input type = "checkbox" value = "2" id="Youtube最高再生数" onClick = {add} />
              Youtube最高再生数
              <br/>
              <input type = "checkbox" value = "3" id="Twitterフォロワー数" onClick = {add} />
              Twitterフォロワー数
              <input type = "checkbox" value = "4" id="Twitterツイート数" onClick = {add} />
              Twitterツイート数
              <input type = "checkbox" value = "5" id="Twitter開始年月" onClick = {add} />
              Twitter開始年月
              <br/>
              <input type = "checkbox" value = "6" id="全国国内線乗降客数" onClick = {add} />
              全国国内線乗降客数
              <input type = "checkbox" value = "7" id="外国人訪問率" onClick = {add} />
              外国人訪問率
              <input type = "checkbox" value = "8" id="芸能人" onClick = {add} />
              芸能人
              <br/>
            <button type = "reset">描画</button>
            {/*onClick = {drawGraph} を追加*/}
        </form>
        </div>
        <ChoroplethMapPage /> 
      </article>
    </div>
  );
}

//総合点についてのプログラム
const AboutTotal = () => {
  const data = []
  var flag = [0, 0, 0, 0, 0, 0, 0, 0]
  const add = (event) => {
    if(flag[event.target.value - 1] === 0){
      //data変数にデータを代入（初期化？）

    }else{
      data.map((item, i) => {
        //チェックした内容と一致するデータのみを取得
      })
    }
    //flag[event.target.value - 1] = 1
  }
  const drawGraph = (e) => {
    //日本地図を書くプログラム
  }
  return (
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-grey has-text-centered">
          <ChoroplethMapPage /> 
        </article>
      </div>  
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
import * as d3 from "d3";
import * as topojson from "topojson";
import { areaRadial } from "d3";
import RankingData from './data.json'
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