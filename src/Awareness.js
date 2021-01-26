import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson";
import { areaRadial } from "d3";
import RankingData from "./data.json";

//日本地図を描くプログラム
const ChoroplethMap = ({ features }) => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);

  const dataUrl = `${process.env.PUBLIC_URL}/data/normalized_data.json`;

  const selections = [
    "Youtube登録者数",
    "Youtube最高再生数",
    "Twitterフォロワー数",
    "Twitterツイート数",
    "Twitter開始年月",
    "国内線乗降客数",
    "外国人訪問率",
    "芸能人",
  ];

  const width = 900;
  const height = 900;
  const radius = 25;
  const projection = d3
    .geoMercator()
    .scale(1600)
    .center([139.69167, 35.68944])
    .translate([width / 2, height / 2]);
  //芸能人のみの場合で考えると？
  const aData = RankingData.data;
  const actor = aData.map((item) => {
    const obj = {
      都道府県: item.都道府県名,
      芸能人: item.芸能人,
      x: item.経度,
      y: item.緯度,
    };
    return obj;
  });
  //降順にソート
  const isSorted = actor.sort((a, b) => b["芸能人"] - a.芸能人);
  //console.log(a);

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

  // const handleChange = (e) => {
  //   //ONかOFFか
  //   let newSelected = isSelected;
  //   newSelected[select.indexOf(e.target.value)] = !newSelected[
  //     select.indexOf(e.target.value)
  //   ];
  //   setIsSelected(newSelected);
  //   console.log(isSelected);
  //   if (val.includes(e.target.value)) {
  //     // すでに含まれていればOFFしたと判断し、イベント発行元を除いた配列をsetし直す
  //     setVal(val.filter((item) => item !== e.target.value));
  //   } else {
  //     // そうでなければONと判断し、イベント発行元を末尾に加えた配列をsetし直す
  //     setVal([...val, e.target.value]);
  //     // stateは直接は編集できない( = val.push(e.target.value) はNG)
  //   }
  // };

  useEffect(() => {
    async function fetchData(dataUrl) {
      const res = await fetch(dataUrl);
      const json = await res.json();
      const data = json.data;

      setData(data);
    }

    fetchData(dataUrl);
  }, []);

  useEffect(() => {
    setData((prev) => [
      ...prev.sort((a, b) => {
        return (
          selected.reduce((acc, cur) => acc + b[cur].normalizedValue, 0) -
          selected.reduce((acc, cur) => acc + a[cur].normalizedValue, 0)
        );
      }),
    ]);
  }, [selected]);

  return (
    <div className="box">
      <form>
        <div className="field">
          <div className="control">
            {selections.map((selection) => {
              return (
                <label className="label" key={selection}>
                  <input
                    type="checkbox"
                    value={selection}
                    onChange={(e) =>
                      setSelected((prev) => {
                        if (e.target.checked) {
                          return prev.concat(e.target.value);
                        } else {
                          return prev.filter((item) => item !== e.target.value);
                        }
                      })
                    }
                  />
                  {selection}
                </label>
              );
            })}
          </div>
        </div>
        {/* <label>
              <input
                type="checkbox"
                value="Youtube登録者数"
                onChange={handleChange}
                checked={val.includes("Youtube登録者数")}
              />
              Youtube登録者数
            </label>
            <label>
              <input
                type="checkbox"
                value="Youtube最高再生数"
                onChange={handleChange}
                checked={val.includes("Youtube最高再生数")}
              />
              Youtube最高再生数
            </label>
            <label>
              <input
                type="checkbox"
                value="Twitterフォロワー数"
                onChange={handleChange}
                checked={val.includes("Twitterフォロワー数")}
              />
              Twitterフォロワー数
            </label>
            <label>
              <input
                type="checkbox"
                value="Twitterツイート数"
                onChange={handleChange}
                checked={val.includes("Twitterツイート数")}
              />
              Twitterツイート数
            </label>
            <label>
              <input
                type="checkbox"
                value="Twitter開始年月"
                onChange={handleChange}
                checked={val.includes("Twitter開始年月")}
              />
              Twitter開始年月
            </label>
            <label>
              <input
                type="checkbox"
                value="全国国内線乗降客数"
                onChange={handleChange}
                checked={val.includes("全国国内線乗降客数")}
              />
              全国国内線乗降客数
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="外国人訪問率"
                onChange={handleChange}
                checked={val.includes("外国人訪問率")}
              />
              外国人訪問率
            </label>
            <label>
              <input
                type="checkbox"
                value="芸能人"
                onChange={handleChange}
                checked={val.includes("芸能人")}
              />
              芸能人
            </label>
            <p>選択値：{val.join(", ")}</p>
            <button type="reset">描画</button> */}
      </form>

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
            4~10位
          </text>

          <circle
            cx={width - 200}
            cy={height - 250}
            r={radius - 15}
            fill="black"
            opacity="0.5"
          />
          <text x={width - 195 + radius - 15} y={height - 243} fontSize="20">
            11~20位
          </text>

          <circle
            cx={width - 200}
            cy={height - 200}
            r={radius - 18}
            fill="black"
            opacity="0.5"
          />
          <text x={width - 195 + radius - 18} y={height - 193} fontSize="20">
            21~30位
          </text>

          <circle
            cx={width - 200}
            cy={height - 150}
            r={radius - 20}
            fill="black"
            opacity="0.5"
          />
          <text x={width - 195 + radius - 20} y={height - 143} fontSize="20">
            31~40位
          </text>

          <circle
            cx={width - 200}
            cy={height - 100}
            r={radius - 22}
            fill="black"
            opacity="0.5"
          />
          <text x={width - 195 + radius - 22} y={height - 93} fontSize="20">
            41~47位
          </text>
        </g>
        {/*〜印の大きさについて*/}

        {/*印（芸能人のみの場合）*/}
        <g>
          {selected.length !== 0 &&
            data.map((item, index) => {
              const x = projection([
                data[index]["経度"],
                data[index]["緯度"],
              ])[0];
              const y = projection([
                data[index]["経度"],
                data[index]["緯度"],
              ])[1];

              let r = 0;
              let color = "red";

              if (index == 0) {
                r = radius - 5;
                color = "red";
              } else if (index == 1) {
                r = radius - 5;
                color = "blue";
              } else if (index == 2) {
                r = radius - 5;
                color = "yellow";
              } else if (index <= 10) {
                r = radius - 10;
                color = "black";
              } else if (index <= 20) {
                r = radius - 15;
                color = "black";
              } else if (index <= 30) {
                r = radius - 18;
                color = "black";
              } else if (index <= 40) {
                r = radius - 20;
                color = "black";
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
                  opacity="0.5"
                  key={item["都道府県名"]}
                />
              );
            })}
          {/* {actor.map((item, i) => {
            //x=経度 y=緯度
            const x = projection([actor[i].x, actor[i].y])[0];
            const y = projection([actor[i].x, actor[i].y])[1];
            let r = 0;
            let color = "red";
            let j = 0;
            while (actor[i].芸能人 != isSorted[j].芸能人) {
              j += 1;
            }
            if (j == 0) {
              r = radius - 5;
              color = "red";
            } else if (j == 1) {
              r = radius - 5;
              color = "blue";
            } else if (j == 2) {
              r = radius - 5;
              color = "yellow";
            } else if (2 < j && j < 10) {
              r = radius - 10;
              color = "black";
            } else if (9 < j && j < 20) {
              r = radius - 15;
              color = "black";
            } else if (19 < j && j < 30) {
              r = radius - 18;
              color = "black";
            } else if (29 < j && j < 40) {
              r = radius - 20;
              color = "black";
            } else {
              r = radius - 22;
              color = "black";
            }
            //console.log(x,y);
            return <circle cx={x} cy={y} r={r} fill={color} opacity="0.5" />;
          })} */}
        </g>
        {/*〜印（芸能人のみの場合）*/}
      </svg>
    </div>
  );
};

export const AboutAwareness = () => {
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
