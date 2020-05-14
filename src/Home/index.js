import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import EdgeLedger from '../EdgeLedger'

export default () => (
  <BrowserRouter>
    <Route path="/edgerledger" component={EdgeLedger} />
  </BrowserRouter>
)
