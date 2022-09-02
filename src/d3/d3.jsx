import React, {useRef, useEffect, useState} from "react";
import styles from './d3.module.css';
import {select, line, curveCardinal, axisBottom, scaleLinear, axisRight, scaleBand} from "d3";


const D3 = (props) => {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef();
// 왜 바 안나와!!
  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleBand()
      .domain(data.map((value,index) => index))
      .range([0, 300])
      .padding(0.5);

    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0]);

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
    svg.select(".x-axis")
      .style("transform", "translateY(150px)")
      .call(xAxis);

    const yAxis = axisRight(yScale);
    svg.select(".y-axis")
      .style("transform", "translateX(300px)")
      .call(yAxis);
    svg.selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("x", (value, index) => xScale(index))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth())
      .attr("height", value => {
        console.log(150 - yScale(value));
      });

  }, [data]);
  return (
    <React.Fragment>
      <svg ref={svgRef}>
        <g className="x-axis"/>
        <g className="y-axis"/>
        {/*<path d="M0,150 120,100 150,120" stroke="blue" fill="none" />*/}
      </svg>
      <br/>
      <br/>
      <br/>
      <br/>
      <button onClick={() => setData(data.map(value => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter(value => value < 35))}>
        Filter data
      </button>
    </React.Fragment>
  )
};

export default D3;