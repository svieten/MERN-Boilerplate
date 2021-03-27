import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'components/Home'

const RouterView = () => (
	<Switch>
		<Route path="/" exact component={Home} />
	</Switch>
)

export default RouterView
