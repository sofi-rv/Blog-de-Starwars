import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<h1>Star Wars</h1>
					</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<div className="dropdown">
							<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites {store.favorites.length}
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								{store.favorites.length <= 0 ? "empty" :
									store.favorites.map((item) => {
										return (
											<li key={item._id}><a className="dropdown-item" href="#">{item.properties.name}</a></li>
										)
									})
								}
							</ul>
						</div>
					</Link>
				</div>
			</div>

		</nav>
	);
};
