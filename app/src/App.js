import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import AppNavbar from "./components/navbar/AppNavbar.component";
import Home from "./components/home/Home.component";
import Settings from "./components/settings/Settings.component";
import Stats from "./components/stats/Stats.component";

export default function App() {
	return (
		<Router basename={'/EpilepticDiary'}>
			<AppNavbar/>
			<Switch>
				<Route path={'/settings'}>
					<Settings />
				</Route>
				<Route path={'/stats'}>
					<Stats />
				</Route>
				<Route path={'/'}>
					<Home/>
				</Route>
				<Redirect to={'/'} />
			</Switch>
		</Router>
	)
}
