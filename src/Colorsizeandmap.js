import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson";

const ColorSizeAndMap = ({ features }) => {
  const width = 900;
  const height = 900;
  const radius = 25;
  const projection = d3
    .geoMercator()
    .scale(1600)
    .center([139.69167, 35.68944])
    .translate([width / 2, height / 2]);
  const path = d3.geoPath().projection(projection);

  return (
    <svg width={width} height={height}>
      {/*日本地図の描画について*/}
      <g>
        {features.map((feature, i) => {
          let color = "";
          if (feature.properties.id === 1){
              color = "#00cc99";
          }else if (feature.properties.id <= 7){
              color = "#33cbb8";
          }else if (feature.properties.id <= 14){
              color = "#00cc00";
          }else if (feature.properties.id <= 23){
              color = "#00cc66";
          }else if (feature.properties.id <= 30){
              color = "#00b266";
          }else if (feature.properties.id <= 35){
              color = "#4c8129";
          }else if (feature.properties.id <= 39){
              color = "#50907a";
          }else{
              color = "#009999";
          }
          return (<path key={i} d={path(feature)} fill={color} stroke="#ffffff"/>);
        })}
      </g>
      {/*〜日本地図の描画について*/}
      {/*印の大きさについて*/}
      <g transform="translate(width/2,height)">
          <text x={width - 250} y={height - 500} fontSize="20">円の大きさ・色について</text>
​
          <circle cx={width - 200} cy={height - 450} r={radius + 10} fill="red" opacity="0.8"/>
          <text x={width - 200 + radius + 25} y={height - 443} fontSize="20">1位</text>
​
          <circle cx={width - 200} cy={height - 370} r={radius + 5} fill="blue" opacity="0.8"/>
          <text x={width - 200 + radius + 20} y={height - 363} fontSize="20">2位</text>
​
          <circle cx={width - 200} cy={height - 300} r={radius } fill="yellow" opacity="0.8"/>
          <text x={width - 200 + radius + 15} y={height - 293} fontSize="20">3位</text>
​
          <circle cx={width - 200} cy={height - 250} r={radius - 10} fill="#7b68ee" opacity="0.8"/>
          <text x={width - 195 + radius - 5} y={height - 244} fontSize="20">4~10位</text>
​
          <circle cx={width - 200} cy={height - 200} r={radius - 15} fill="#7b68ee" opacity="0.8"/>
          <text x={width - 195 + radius - 10} y={height - 193} fontSize="20">11~20位</text>
​
          <circle cx={width - 200} cy={height - 150} r={radius - 18} fill="#393939" opacity="0.8"/>
          <text x={width - 195 + radius - 10} y={height - 143} fontSize="20">21~30位</text>
​
          <circle cx={width - 200} cy={height - 100} r={radius - 20} fill="#393939" opacity="0.8"/>
          <text x={width - 195 + radius - 10} y={height - 93} fontSize="20">31~40位</text>
​
          <circle cx={width - 200} cy={height - 50} r={radius - 22} fill="black" opacity="0.8"/>
          <text x={width - 195 + radius - 10} y={height - 43} fontSize="20">41~47位</text>
        </g>
        {/*〜印の大きさについて*/}
    </svg>
  );
};

export const AboutColorSizeAndMap = () => {
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
    return <ColorSizeAndMap features={features}/>;
};



