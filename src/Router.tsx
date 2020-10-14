import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import TopPage from 'pages/TopPage'
import EditPage from 'pages/EditPage'

const Router = () => {
  console.info(process.env.PUBLIC_URL)
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={TopPage} />
        <Route path='/edit' component={EditPage} />
        {/* Not Found */}
        <Route component={() => <Redirect to='/' />} />
      </Switch>
    </HashRouter>
  )
}

export default Router
