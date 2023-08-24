import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	return (
		<>
			<div className="container">
				<h1 className="text-danger">Characters</h1>
				<div className="my-carousel">
					<div className="my-card">
						<div>
							<img src="https://picsum.photos/200" alt="..." />
						</div>
						<div>
							<p>Name</p>
							<p>Gender</p>
							<p>Hair-Color</p>
							<p>Eye-Color</p>
						</div>
						<button className="btn btn-outline-primary">Learn More!</button>
						<button className="btn btn-outline-warning"><i className="far fa-heart"></i></button>
					</div>
					<div className="my-card">
						<div>
							<img src="https://picsum.photos/200" alt="..." />
						</div>
						<div>
							<p>Name</p>
							<p>Gender</p>
							<p>Hair-Color</p>
							<p>Eye-Color</p>
						</div>
						<button className="btn btn-outline-primary">Learn More!</button>
						<button className="btn btn-outline-warning"><i className="far fa-heart"></i></button>
					</div>
					<div className="my-card">
						<div>
							<img src="https://picsum.photos/200" alt="..." />
						</div>
						<div>
							<p>Name</p>
							<p>Gender</p>
							<p>Hair-Color</p>
							<p>Eye-Color</p>
						</div>
						<button className="btn btn-outline-primary">Learn More!</button>
						<button className="btn btn-outline-warning"><i className="far fa-heart"></i></button>
					</div>
					<div className="my-card">
						<div>
							<img src="https://picsum.photos/200" alt="..." />
						</div>
						<div>
							<p>Name</p>
							<p>Gender</p>
							<p>Hair-Color</p>
							<p>Eye-Color</p>
						</div>
						<button className="btn btn-outline-primary">Learn More!</button>
						<button className="btn btn-outline-warning"><i className="far fa-heart"></i></button>
					</div>
				</div>
			</div >
		</>
	);
};
