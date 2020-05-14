import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import EdgeLedger from '../EdgeLedger'
import Portfolio from '../Portfolio'
import HBT from '../HBT'
import NewsGrid from '../NewsGrid'

export default () => (
  <BrowserRouter>
    <Route path="/" exact component={Portfolio} />
    <Route path="/edgeledger" component={EdgeLedger} />
    <Route path="/hbt" component={HBT} />
    <Route path="/newsgrid" component={NewsGrid} />
  </BrowserRouter>
)
