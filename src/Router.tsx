import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import TopPage from 'pages/TopPage'
import EditPage from 'pages/EditPage'

const Router = () => {
  return (
    <BrowserRouter basename='/sakura-card-maker'>
      <Switch>
        <Route path='/' exact component={TopPage} />
        <Route path='/edit' component={EditPage} />
        {/* Not Found */}
        <Route component={() => <Redirect to='/' />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
