import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function AppNavbar() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Link className={'navbar-brand'} to="/">Дневник</Link>
			<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav>
					<Link className={'nav-link'} to="/settings">Лекарства</Link>
					<Link className={'nav-link'} to="/stats" disabled>Статистика</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}