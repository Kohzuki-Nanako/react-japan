import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson";
import { areaRadial } from "d3";
import RankingData from "./data.json";

//日本地図を描くプログラム
const ChoroplethMap = ({ features }) => {
  const width = 900;
  const height = 900;
  const radius = 25;

  //米のみの場合で考えると？
  const rData = RankingData;
  const rice = rData.map((item) => {
    const obj = {
      都道府県: item.都道府県名,
      米: item.米,
      x: item.経度,
      y: item.緯度,
    };
    return obj;
  });
  //降順にソート
  const r = rice.sort((a, b) => b.米 - a.米);
  //console.log(r);
  const projection = d3
    .geoMercator()
    .scale(1600)
    .center([139.69167, 35.68944])
    .translate([width / 2, height / 2]);
  const path = d3.geoPath().projection(projection);
  const color = d3
    .scaleLinear()
    .domain(d3.extent(features, (feature) => feature.properties.value))
    .range(["#ccc", "#0f0"]);

  //印

  const [val, setVal] = React.useState([]);
  const [isSelected, setIsSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const select = [
    "火力",
    "水力",
    "風力",
    "原子力",
    "太陽光",
    "地熱",
    "米",
    "牛乳",
    "肉用牛",
    "豚",
    "鶏卵",
    "プロイラー",
    "トマト",
    "乳牛",
    "いちご",
  ];

  const handleChange = (e) => {
    //ONかOFFか
    let newSelected = isSelected;
    newSelected[select.indexOf(e.target.value)] = !newSelected[
      select.indexOf(e.target.value)
    ];
    setIsSelected(newSelected);
    console.log(isSelected);
    if (val.includes(e.target.value)) {
      // すでに含まれていればOFFしたと判断し、イベント発行元を除いた配列をsetし直す
      setVal(val.filter((item) => item !== e.target.value));
    } else {
      // そうでなければONと判断し、イベント発行元を末尾に加えた配列をsetし直す
      setVal([...val, e.target.value]);
      // stateは直接は編集できない( = val.push(e.target.value) はNG)
    }
  };
  return (
    <div className="tile is-parent is-vertical">
      <article className="tile is-child notification is-grey has-text-centered">
        <div>
          <form onreset="reset">
            <label>
              <input
                type="checkbox"
                value="火力"
                onChange={handleChange}
                checked={val.includes("火力")}
              />
              火力
            </label>
            <label>
              <input
                type="checkbox"
                value="水力"
                onChange={handleChange}
                checked={val.includes("水力")}
              />
              水力
            </label>
            <label>
              <input
                type="checkbox"
                value="風力"
                onChange={handleChange}
                checked={val.includes("風力")}
              />
              風力
            </label>
            <label>
              <input
                type="checkbox"
                value="原子力"
                onChange={handleChange}
                checked={val.includes("原子力")}
              />
              原子力
            </label>
            <label>
              <input
                type="checkbox"
                value="太陽光"
                onChange={handleChange}
                checked={val.includes("太陽光")}
              />
              太陽光
            </label>
            <label>
              <input
                type="checkbox"
                value="地熱"
                onChange={handleChange}
                checked={val.includes("地熱")}
              />
              地熱
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="米"
                onChange={handleChange}
                checked={val.includes("米")}
              />
              米
            </label>
            <label>
              <input
                type="checkbox"
                value="牛乳"
                onChange={handleChange}
                checked={val.includes("牛乳")}
              />
              牛乳
            </label>
            <label>
              <input
                type="checkbox"
                value="肉用牛"
                onChange={handleChange}
                checked={val.includes("肉用牛")}
              />
              肉用牛
            </label>
            <label>
              <input
                type="checkbox"
                value="豚"
                onChange={handleChange}
                checked={val.includes("豚")}
              />
              豚
            </label>
            <label>
              <input
                type="checkbox"
                value="鶏卵"
                onChange={handleChange}
                checked={val.includes("鶏卵")}
              />
              鶏卵
            </label>
            <label>
              <input
                type="checkbox"
                value="プロイラー"
                onChange={handleChange}
                checked={val.includes("プロイラー")}
              />
              プロイラー
            </label>
            <label>
              <input
                type="checkbox"
                value="トマト"
                onChange={handleChange}
                checked={val.includes("トマト")}
              />
              トマト
            </label>
            <label>
              <input
                type="checkbox"
                value="乳牛"
                onChange={handleChange}
                checked={val.includes("乳牛")}
              />
              乳牛
            </label>
            <label>
              <input
                type="checkbox"
                value="いちご"
                onChange={handleChange}
                checked={val.includes("いちご")}
              />
              いちご
            </label>
            <p>選択値：{val.join(", ")}</p>
          </form>
        </div>
      </article>
      <svg width={width} height={height}>
        <g>
          {features.map((feature, i) => (
            <path
              key={i}
              d={path(feature)}
              fill="limegreen"
              stroke="mediumseagreen"
            />
          ))}
        </g>

        {/*印の大きさについて*/}
        <g transform="translate(width/2,height)">
          <text x={width - 250} y={height - 500} fontSize="20">
            円の大きさ・色について
          </text>

          <circle
            cx={width - 200}
            cy={height - 450}
            r={radius - 5}
            fill="red"
            opacity="0.5"
          />
          <text x={width - 200 + radius} y={height - 443} fontSize="20">
            1位
          </text>

          <circle
            cx={width - 200}
            cy={height - 400}
            r={radius - 5}
            fill="blue"
            opacity="0.5"
          />
          <text x={width - 200 + radius} y={height - 393} fontSize="20">
            2位
          </text>

          <circle
            cx={width - 200}
            cy={height - 350}
            r={radius - 5}
            fill="yellow"
            opacity="0.5"
          />
          <text x={width - 200 + radius} y={height - 343} fontSize="20">
            3位
          </text>

          <circle
            cx={width - 200}
            cy={height - 300}
            r={radius - 10}
            fill="black"
            opacity="0.5"
          />
          <text x={width - 195 + radius - 10} y={height - 294} fontSize="20">
            3~10位
          </text>

          <circle
            cx={width - 200}
            cy={height - 250}
            r={radius - 15}
            fill="black"
            opacity="0.5"
          />
          <text x={width - 195 + radius - 15} y={height - 243} fontSize="20">
            10~20位
          </text>

          <circle
            cx={width - 200}
            cy={height - 200}
            r={radius - 18}
            fill="black"
            opacity="0.5"
          />
          <text x={width - 195 + radius - 18} y={height - 193} fontSize="20">
            20~30位
          </text>

          <circle
            cx={width - 200}
            cy={height - 150}
            r={radius - 20}
            fill="black"
            opacity="0.5"
          />
          <text x={width - 195 + radius - 20} y={height - 143} fontSize="20">
            30~40位
          </text>
        </g>
        {/*〜印の大きさについて*/}

        {/*印（米のみの場合）*/}
        <g>
          {rice.map((item, i) => {
            //x=経度 y=緯度
            const x = projection([rice[i].x, rice[i].y])[0];
            const y = projection([rice[i].x, rice[i].y])[1];
            //console.log(x,y);
            return <circle cx={x} cy={y} r={radius} fill="red" opacity="0.5" />;
          })}
        </g>
        {/*〜印（米のみの場合）*/}
      </svg>
    </div>
  );
};

export const AboutLocalResources = () => {
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
