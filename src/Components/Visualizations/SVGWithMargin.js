import React from 'react'; 

// sets appropriate margin for svg component to display axes inside and returns  a React component

export function getContentContainerStyle({
	margin
}) {
	const marginObject = getMarginObject(margin);

	return {
		transform: `translate(${marginObject.left}px, ${marginObject.top}px)`,
	};
}

function getMarginObjectForNumber(number) {
	return {
		top: number,
		right: number,
		bottom: number,
		left: number,
	};
}

export function getMarginObject(
	margin
){
	if (!margin) {
		return getMarginObjectForNumber(0);
	}

	if (typeof margin === "number") {
		return getMarginObjectForNumber(margin);
	}

	const {
		top,
		right,
		bottom,
		left,

		vertical,
		horizontal,
	} = margin;

	return {
		top: top || vertical || 0,
		right: right || horizontal || 0,
		bottom: bottom || vertical || 0,
		left: left || horizontal || 0,
	};
}

export function getSVGDimensions({
	height,
	margin,
	width,
}) {
	const marginObject = getMarginObject(margin);
	const heightWithMargin = height
    + marginObject.top
    + marginObject.bottom;
	const widthWithMargin = width
    + marginObject.left
    + marginObject.right;

	return {
		height: heightWithMargin,
		width: widthWithMargin,
	};
}

export default ({
	children,
	contentContainerBackgroundRectClassName,
	contentContainerGroupClassName,
	height,
	margin,
	width,
	...rest
}) => (
	<svg
		{...rest}
		{...getSVGDimensions({
			height,
			margin,
			width,
		})}
	>
		<g
			className={contentContainerGroupClassName}
			style={getContentContainerStyle({ margin })}
		>
			{!!contentContainerBackgroundRectClassName && (
				<rect
					className={contentContainerBackgroundRectClassName}
					height={height}
					width={width}
					x={0}
					y={0}
				/>
			)}
			{children}
		</g>
	</svg>
);