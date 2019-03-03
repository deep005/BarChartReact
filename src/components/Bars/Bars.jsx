import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { colorRange } from '../../data'
import { interpolateLab } from 'd3-interpolate'


export default class Bars extends Component {
  constructor(props) {
    super(props)

    this.colorScale = scaleLinear()
      .domain([0, this.props.maxValue])
      .range(colorRange)
      .interpolate(interpolateLab)
  }

  render() {
    const { scales, margins, data, svgDimensions } = this.props
    const { xScale, yScale } = scales
    const { height } = svgDimensions

    const bars = (
      data.map(datum =>
            <rect
          key={datum.year}
          x={xScale(datum.year)}
          y={yScale(datum.value)}
          height={height - margins.bottom - scales.yScale(datum.value)}
          width={xScale.bandwidth()}
          fill={this.colorScale(datum.value)}
          onMouseOver={() => this.props.onMouseOverCallback(datum)}
          onMouseOut={() => this.props.onMouseOutCallback(null)}
            />
      )
    )

    return (
      <g>{bars}</g>
    )
  }
}
