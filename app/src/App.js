import React from 'react';
import Home from "./components/home/Home.component";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import AppNavbar from "./components/navbar/AppNavbar.component";
import Settings from "./components/settings/Settings.component";

export default function App() {
	return (
		<Router basename={'/EpilepticDiary'}>
			<AppNavbar/>
			<Switch>
				<Route path={'/settings'}>
					<Settings />
				</Route>
				<Route path={'/stats'}>
					<h1>Раздел в разработке</h1>
				</Route>
				<Route path={'/'}>
					<Home/>
				</Route>
				<Redirect to={'/'} />
			</Switch>
		</Router>
	)
}
