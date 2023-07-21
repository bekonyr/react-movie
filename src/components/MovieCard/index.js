import React, { useState , useContext } from "react";
import { Link } from "react-router-dom";



const MovieCard = ({ el }) => {



	return (
		<div id={"movieCard"}
		
		
		>
			<div className="movieCard">
				<center>
					<Link to={`/movie/details/${el.id}`}>
						{el.poster_path ? (
							<img
								src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
								alt="img"
							/>
						) : (
							<img
								src="https://img.freepik.com/free-vector/oops-404-error-with-a-broken-robot-concept-illustration_114360-1932.jpg?w=2000"
								alt="img"
							/>
						)}
					</Link>
					<h3> {el.title}</h3>
					<p>{el.release_date}</p>
				</center>
			</div>
		</div>
	);
};

export default MovieCard;
