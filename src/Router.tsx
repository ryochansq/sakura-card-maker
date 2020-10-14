import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import TopPage from 'pages/TopPage'
import EditPage from 'pages/EditPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path='/' component={TopPage} />
        <Route path='/edit' component={EditPage} />
        {/* Not Found */}
        <Route component={() => <Redirect to='/' />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
