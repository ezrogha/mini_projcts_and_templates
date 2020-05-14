import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import EdgeLedger from '../EdgeLedger'
import Portfolio from '../Portfolio'

export default () => (
  <BrowserRouter>
    <Route path="/" exact component={Portfolio} />
    <Route path="/edgeledger" component={EdgeLedger} />
  </BrowserRouter>
)
