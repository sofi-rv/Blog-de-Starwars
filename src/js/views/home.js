import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const Home = () => {

	const { store } = useContext(Context)

	return (
		<>
			<div className="container">
				<h1 className="text-danger">Characters</h1>
				<div className="my-carousel">
					{store.characters.map((item) => {
						return (
							<div className="my-card border">
								<div>
									<img src= {`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} alt="..." />
								</div>
								<div className="body-text">
									<p><strong>Name:</strong> {item.properties.name}</p>
									<p><strong>Gender:</strong> {item.properties.gender} </p>
									<p><strong>Hair-Color:</strong> {item.properties.hair_color}</p>
									<p><strong>Eye-Color:</strong> {item.properties.eye_color}</p>
								</div>
								<div className="button-footer">
									<button className="btn btn-outline-primary">Learn More!</button>
									<button className="btn btn-outline-warning"><i class="fas fa-heart"></i></button>
								</div>
							</div>
						)
					})}
				</div>
			</div >

			<div className="container mt-5">
				<h1 className="text-danger">Planets</h1>
				<div className="my-carousel">
				{store.planets.map((item) => {
						return (
							<div className="my-card border">
						<div>
							<img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} alt="..." />
						</div>
						<div className="body-text">
							<p><strong>Population:</strong> {item.properties.population}</p>
							<p><strong>Terrain:</strong> {item.properties.terrain}</p>

						</div>
						<div className="button-footer">
							<button className="btn btn-outline-primary">Learn More!</button>
							<button className="btn btn-outline-warning"><i class="fas fa-heart"></i></button>
						</div>
					</div>
						)
					})}
					
				</div>
			</div >
		</>
	);
};
