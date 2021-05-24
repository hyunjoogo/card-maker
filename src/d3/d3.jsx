import React, {useRef, useEffect, useState} from "react";
import styles from './d3.module.css';
import {select, line, curveCardinal, axisBottom, scaleLinear, axisRight} from "d3";


const D3 = (props) => {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300]);

    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0]);

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat(index => index + 1);
    svg.select(".x-axis")
      .style("transform", "translateY(150px)")
      .attr("stroke-width", "2px")
      .call(xAxis);

    const yAxis = axisRight(yScale);
    svg.select(".y-axis")
      .style("transform", "translateX(300px)")
      .attr("stroke-width", "2px")
      .call(yAxis);


    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);
    // svg
    //   .selectAll("circle")
    //   .data(data)
    //   .join("circle")
    //   .attr("r", value => value)
    //   .attr("cx", value => value * 2)
    //   .attr("cy", value => value * 2)
    //   .attr("stroke", "red");
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", myLine)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", "2px");
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