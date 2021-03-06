import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'

import { data, heightInput, widthInput } from '../../data'
import Axes from '../Axes'
import Bars from '../Bars'
import Tooltip from '../Tooltip'
import ResponsiveWrapper from '../ResponsiveWrapper'

class Chart extends Component {
  constructor() {
    super()
    this.xScale = scaleBand()
    this.yScale = scaleLinear()
    this.state = {
      hoveredBar: null
    }
  }

  render() {
    const margins = { top: 50, right: 60, bottom: 100, left: 100 }
    const svgDimensions = {
      width: widthInput || Math.min((this.props.parentWidth + 20), 700),
      height: heightInput || 500
    }

    const maxValue = Math.max(...data.map(d => d.value))

    const xScale = this.xScale
      .padding(0.5)
      .domain(data.map(d => d.title))
      .range([margins.left, svgDimensions.width - margins.right])

    const yScale = this.yScale
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom, margins.top])

    return (
      <div className="Chart">
          <svg width={svgDimensions.width} height={svgDimensions.height}>
            <Axes
              scales={{ xScale, yScale }}
              margins={margins}
              svgDimensions={svgDimensions}
            />
            <Bars
              scales={{ xScale, yScale }}
              margins={margins}
              data={data}
              maxValue={maxValue}
              svgDimensions={svgDimensions}
              onMouseOverCallback={datum => this.setState({hoveredBar: datum})}
              onMouseOutCallback={datum => this.setState({hoveredBar: null})}
            />
          </svg>
          { this.state.hoveredBar ?
            <Tooltip
              hoveredBar={this.state.hoveredBar}
              scales={{ xScale, yScale }}
            /> :
            null
          }
      </div>
    )
  }
}

export default ResponsiveWrapper(Chart)
