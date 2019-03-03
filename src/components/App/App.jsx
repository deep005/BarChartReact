import React from 'react'

import './App.scss'
import Chart from '../Chart'

export default () =>
  <div className="App">
    <header className="App--header">
      <h2 className="App--header__title">Death Toll due to Oceanic Calamities in The Last Decade.</h2>
    </header>
    <div className="App--chart__container">
      <Chart />
    </div>
  </div>
