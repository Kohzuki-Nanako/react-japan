import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson";
import { AboutColorSizeAndMap } from "./Colorsizeandmap";

//日本地図を描くプログラム
const ChoroplethMap = ({ features }) => {
  const width = 900;
  const height = 900;
  const radius = 25;
  const projection = d3
    .geoMercator()
    .scale(1600)
    .center([139.69167, 35.68944])
    .translate([width / 2, height / 2]);

  const [data, setData] = useState([]);
  const dataUrl = `${process.env.PUBLIC_URL}/data/normalized_data.json`;
  const selections = [
    "米",
    "牛乳",
    "肉用牛",
    "豚",
    "鶏卵",
    "ブロイラー",
    "トマト",
    "乳牛",
    "いちご",
    "火力",
    "水力",
    "風力",
    "原子力",
    "太陽光",
    "地熱",
    "Youtube登録者数",
    "Youtube最高再生数",
    "Twitterフォロワー数",
    "Twitterツイート数",
    "Twitter開始年月",
    "国内線乗降客数",
    "外国人訪問率",
    "芸能人",
  ];
  useEffect(() => {
    async function fetchData(dataUrl) {
      const res = await fetch(dataUrl);
      const json = await res.json();
      const data = json.data;

      setData(data);
    }

    fetchData(dataUrl);
  }, []);

  const total = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];
  data.map((item, i) => {
    for (let j = 0; j < selections.length; j++) {
      console.log([i], data[i][selections[j]].normalizedValue);
      total[i] += data[i][selections[j]].normalizedValue;
    }
    console.log(data[i]["都道府県名"], total[i]);
  });
  const result = data.map((item, i) => {
    const obj = {
      都道府県: item.都道府県名,
      total: total[i],
      x: item.経度,
      y: item.緯度,
    };
    return obj;
  });
  const isSorted = result.sort((a, b) => b.total - a.total);
  isSorted.map((item) => {
    console.log(item);
  });

  const ranking2020 = [
    "北海道",
    "京都府",
    "沖縄県",
    "東京都",
    "神奈川県",
    "大阪府",
    "奈良県",
    "長野県",
    "福岡県",
    "石川県",
    "長崎県",
    "兵庫県",
    "宮崎県",
    "静岡県",
    "青森県",
    "愛知県",
    "鹿児島県",
    "広島県",
    "熊本県",
    "秋田県",
    "千葉県",
    "宮崎県",
    "大分県",
    "愛媛県",
    "香川県",
    "富山県",
    "山梨県",
    "新潟県",
    "和歌山県",
    "島根県",
    "三重県",
    "山口県",
    "福島県",
    "岡山県",
    "岩手県",
    "高知県",
    "滋賀県",
    "埼玉県",
    "山形県",
    "鳥取県",
    "群馬県",
    "岐阜県",
    "茨城県",
    "福井県",
    "佐賀県",
    "徳島県",
    "栃木県",
  ];
  return (
    <div className="box">
      <div class="container has-text-centered" >
        <h2 className="subtitle"></h2>
        <p>このページでは、地域資源（主な農畜産物、電力など）や認知度（youtube、twitterのフォロワー数など）を<br />各都道府県別にデータを集計してその合計値をランキング化したものです。</p>
      </div>
      <div className="tile is-parent is-vertical" key={selections}>
        <svg width={width} height={height}>
          <AboutColorSizeAndMap />
          <g>
            {isSorted.map((item, index) => {
              const x = projection([
                isSorted[index]["x"],
                isSorted[index]["y"],
              ])[0];
              const y = projection([
                isSorted[index]["x"],
                isSorted[index]["y"],
              ])[1];

              let r = 0;
              let color = "red";

              if (index == 0) {
                r = radius + 10;
                color = "red";
              } else if (index == 1) {
                r = radius + 5;
                color = "blue";
              } else if (index == 2) {
                r = radius;
                color = "yellow";
              } else if (index <= 10) {
                r = radius - 10;
                color = "#7b68ee";
              } else if (index <= 20) {
                r = radius - 15;
                color = "#7b68ee";
              } else if (index <= 30) {
                r = radius - 18;
                color = "#555555";
              } else if (index <= 40) {
                r = radius - 20;
                color = "#555555";
              } else {
                r = radius - 22;
                color = "black";
              }
              return (
                <circle
                  cx={x}
                  cy={y}
                  r={r}
                  fill={color}
                  opacity="0.8"
                  key={item["都道府県名"]}
                />
              );
            })}
          </g>
        </svg>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>順位</th>
            <th>都道府県名</th>
            <th>
            <a
                href={
                  "https://news.tiiki.jp/05_research"
                }
              >
                {"地域ブランド調査2020結果"}
              </a></th>
            <th>順位の変動</th>
          </tr>
        </thead>
        <tbody>
          {isSorted.map((item, i) => {
            if (item["都道府県"] === ranking2020[i]) {
              return (
                <tr>
                  <th>{i + 1}</th>
                  <td>{item["都道府県"]}</td>
                  <td>{ranking2020[i]}</td>
                  <th>→</th>
                </tr>
              );
            } else {
              let memoi = 0;
              let memoj = 0;
              for (let j = i + 1; j < ranking2020.length; j++) {
                if (item["都道府県"] === ranking2020[j]) {
                  memoi = i;
                  memoj = j;
                  break;
                }
              }
              if (memoi < memoj) {
                return (
                  <tr>
                    <th>{i + 1}</th>
                    <td>{item["都道府県"]}</td>
                    <td>{ranking2020[i]}</td>
                    <th>
                      <div style={{ color: "red" }}>↑</div>
                    </th>
                  </tr>
                );
              } else {
                return (
                  <tr>
                    <th>{i + 1}</th>
                    <td>{item["都道府県"]}</td>
                    <td>{ranking2020[i]}</td>
                    <th>
                      <div style={{ color: "blue" }}>↓</div>
                    </th>
                  </tr>
                );
              }
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export const AboutTotal = () => {
  const [features, setFeatures] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.PUBLIC_URL}/data/japan.json`);
      const data = await res.json();
      const { features } = topojson.feature(data, data.objects.japan);
      setFeatures(features);
    })();
  }, []);
  if (features == null) {
    return <p>loading</p>;
  }
  return <ChoroplethMap features={features} />;
};
