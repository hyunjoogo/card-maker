import React, { useRef, useEffect, useState } from "react";
import { select } from "d3";

export default(props) => {
  const [data, setData] = useState([24, 30, 45, 70, 26]);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = select(svgRef.current); // selection 객체
    svg
      .selectAll("circle")
      .data(data)
      .join(
        (enter) => enter.append("circle"),
        (update) => update.attr("class", "updated"),
        (exit) => exit.remove()
      )
      .attr("r", (value) => value)
      .attr("cx", (value) => value * 2)
      .attr("cy", (value) => value * 2)
      .attr("stroke", "red");
  }, [data]);

  return (
    <>
      <svg ref={svgRef}>
        {data.map((el, i) => (
          <circle r={el} key={i}>
            {el}
          </circle>
        ))}
      </svg>
      <button onClick={() => {setData(data.map(el => el + 5))}}>increase + 5</button>
      <button onClick={() => {setData(data.filter(el => el > 35))}}>filter circle r should gt 35</button>
    </>
  );
}