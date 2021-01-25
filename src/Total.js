import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson";
import { areaRadial } from "d3";
import RankingData from './data.json'

//日本地図を描くプログラム
const ChoroplethMap = ({ features }) => {
    const width = 900;
    const height = 900;
    const radius = 25;
    const projection = d3.geoMercator().scale(1600).center([139.69167, 35.68944]).translate([width/2, height/2]);
    const path = d3.geoPath().projection(projection);
    const color = d3
      .scaleLinear()
      .domain(d3.extent(features, (feature) => feature.properties.value))
      .range(["#ccc", "#0f0"]);
    
    //印
    
    return (
     <div className="tile is-parent is-vertical">
                 
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
      </svg>
    </div>
    );
  };
  
  export const AboutTotal = () => {
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