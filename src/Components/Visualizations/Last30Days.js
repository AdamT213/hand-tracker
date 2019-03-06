import React from "react";
import { extent as d3ArrayExtent } from "d3-array";
import {
	scaleLinear as d3ScaleLinear,
	scaleTime as d3ScaleTime,
} from "d3-scale";
import { line as d3Line } from "d3-shape";
import {
	axisBottom as d3AxisBottom,
	axisLeft as d3AxisLeft,
} from "d3-axis";
import { select as d3Select } from "d3-selection";
import SVGWithMargin from "./SVGWithMargin";

export function Last30Days(props){

	const xScale = d3ScaleTime()
		.domain(d3ArrayExtent(props.data, props.selectX))
		.range([0, props.width]);

	// Our y axis should just have a linear scale.
	// Our y domain will be the extent of y values (numbers) in our data set.
	const yScale = d3ScaleLinear()
		.domain(d3ArrayExtent(props.data, props.selectY))
		.range([props.height, 0]);
        
	const xAxis = d3AxisBottom()
		.scale(xScale)
		.ticks(props.data.length);
	
	// Add an axis for our y scale that has 3 ticks (FIXME: we should probably make number of ticks per axis a prop).
	const yAxis = d3AxisLeft()
		.scale(yScale)
		.ticks(3);

	// These two functions select the scaled x and y values (respectively) of our data.
	const selectScaledX = datum => xScale(props.selectX(datum));
	const selectScaledY = datum => yScale(props.selectY(datum));

	// map our data to scaled points
	const circlePoints = props.data.map(datum => ({
		x: selectScaledX(datum),
		y: selectScaledY(datum),
	}));

	// Create a d3Line factory for our scales.
	const sparkLine = d3Line()
		.x(selectScaledX)
		.y(selectScaledY);
        
	// Create a line path of for our data.
	const linePath = sparkLine(props.data);

	return(
		<SVGWithMargin
			className="container"
			height={props.height}
			width={props.width}
			margin={props.margin}
		>
			<g className="xAxis" ref={node => d3Select(node).call(xAxis)} style={{
          	transform: `translateY(${props.height}px)`,
        	}} />
			<g className="yAxis" ref={node => d3Select(node).call(yAxis)} />
			<g className="line">
				<path d={linePath} />
			</g>
			<g className="scatter">
				{circlePoints.map(circlePoint => (
					<circle
						cx={circlePoint.x}
						cy={circlePoint.y}
						key={`${circlePoint.x},${circlePoint.y}`}
						r={4}
					/>
				))}
			</g>
		</SVGWithMargin>);
}