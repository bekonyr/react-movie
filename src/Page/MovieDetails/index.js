
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../../Data";
import { TfiMenuAlt } from "react-icons/tfi";
import { AiFillStar, AiTwotoneHeart } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import Actors from "../../components/Actors";
import Trailer from "../../components/Trailer";
import { FiX } from "react-icons/fi";
import { LanguageContext } from "../../context";


// import ActorsDetils from "../Page/ActorsDetils";

const MovieDetails = () => {
	const [ten, setTen] = useState(false);
	const [modal, setModal] = useState(false);
	const [color, setColor] = useState(false);
	const [color1, setColor1] = useState(false);
	const [color2, setColor2] = useState(false);
	const [color3, setColor3] = useState(false);

	const { movieId } = useParams();
	// console.log(movieId);
	const [details, setDetails] = useState([]);
	const {language} = useContext(LanguageContext)
	const getDetails = (key) => {
		axios(
			`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${language}`
		).then((res) => setDetails(res.data));
	};
	useEffect(() => {
		getDetails(API_KEY);
	}, [language]);
	// console.log(details);
	const {
		title,
		poster_path,
		backdrop_path,
		vote_average,
		tagline,
		runtime,
		genres,
		release_date,
		overview,
	} = details;
	return (
		<>
			<div
				style={{
					objectFit: "cover",
					background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces//${backdrop_path}") no-repeat center/cover`,
				}}
				id="details"
			>
				<div className="container">
					<div className="details">
						<div className="details--ten">
							<img
								className="details--ten__image"
								src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}`}
								alt="img"
								onClick={() => {

									setModal(true);


								}}
                onMouseOver={() =>{
                  // backdropFilter: " blure(8px)",
                  // setBlure(true)
                }}
							/>
							<div
								className="details--ten__modal"
								style={{

                //  backdropFilter: blure ? " blure(8px)" : "none", 
									boxSizing: "border-box",
									display: modal ? "block" : "none",
                  // background: 
								}}
							>
								<img
									width={390}
									src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}`}
									alt="img"
                  style={{
                    // backdropFilter: blure ? " blure(8px)" : "none", 

                  }}
								/>
								<button
									onClick={() => {
										setTen(false);
										setModal(false);
									}}
									style={{
										color: "red",
										position: "absolute",
										top: "20px",
										fontSize: "20px",
										right: "20px",
									}}
								>
									<FiX />
								</button>
							</div>
						</div>
						<div className="details--group">
							<div className="details--group__block">
								<h1>
									{title} <span>(2023)</span>
								</h1>
								<div className="details--group__block--text">
									<td>R21</td>
									<span>{release_date} (PL)</span>
									<li>
										{genres?.map((el) => (
											<span>{el.name},</span>
										))}
									</li>
									<span>
										{Math.floor(runtime / 60)}h {runtime % 60}m
									</span>
								</div>
								<div className="details--group__block--krug">
									<div
										className="details--group__block--text2"
										style={{
											background: `conic-gradient(green ${
												Math.round(vote_average * 10) * 3.59
											}deg, #253625 0deg)`,
										}}
									>
										<h3>
											{Math.round(vote_average * 10)}
											<sup>%</sup>
										</h3>
									</div>
									<h2>Рейтинг</h2>
									<ul>
										<li
											style={{
												background: " #151546",
												width: "50px",
												height: "50px",
												borderRadius: "50%",
												display: " flex",
												alignItems: "center",
												justifyContent: " center",
												color: color,
												fontSize: "20px",
											}}
										>
											<TfiMenuAlt
												onClick={() => {
													setColor(color === false ? "black" : false);
												}}
											/>
										</li>
										<li
											style={{
												background: " #151546",
												width: "50px",
												height: "50px",
												borderRadius: "50%",
												display: " flex",
												alignItems: "center",
												justifyContent: " center",
												color: color1,
												fontSize: "20px",
											}}
										>
											<AiTwotoneHeart
												onClick={() => {
													setColor1(color1 === false ? "red" : false);
												}}
											/>
										</li>
										<li
											style={{
												background: " #151546",
												width: "50px",
												height: "50px",
												borderRadius: "50%",
												display: " flex",
												alignItems: "center",
												justifyContent: " center",
												color: color2,
												fontSize: "20px",
											}}
										>
											<BsFillBookmarkFill
												onClick={() => {
													setColor2(color2 === false ? "black" : false);
												}}
											/>
										</li>
										<li
											style={{
												background: " #151546",
												width: "50px",
												height: "50px",
												borderRadius: "50%",
												display: " flex",
												alignItems: "center",
												justifyContent: " center",
												color: color3,
												fontSize: "20px",
											}}
										>
											<AiFillStar
												onClick={() => {
													setColor3(color3 === false ? "yellow" : false);
												}}
											/>
										</li>
									</ul>
								</div>
								<p>{tagline}</p>
							</div>
							<div className="details--group__block2">
								<h2>Обзор</h2>
								<p>{overview}</p>
							
							</div>
						</div>
					</div>
				</div>
			</div>
			<Actors Id={movieId}/>
			<Trailer Id={movieId}/>
		</>
	);
};

export default MovieDetails;
