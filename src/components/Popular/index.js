import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { API_KEY } from "../../Data";
import MovieCard from "../MovieCard";
import { LanguageContext } from "../../context";
import { useContext } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineDoubleLeft } from "react-icons/ai";
const Popular = () => {
	const [popular, setPopular] = useState([]);

	const { language } = useContext(LanguageContext);
	const { dark } = useContext(LanguageContext);
	const { page } = useContext(LanguageContext);
	const { setPage } = useContext(LanguageContext);
	const getPopular = (key) => {
		window.scroll(0, 0);
		axios(
			`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${page}`
		).then((res) => setPopular(res.data.results));
	};
	useEffect(() => {
		getPopular(API_KEY);
	}, [language, page]);
	console.log(popular);
	return (
		<div
			id={"popular"}
			style={{
				background: dark
					? " linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(81,89,92,1) 91%)"
					: "",
			}}
		>
			<div className="container">
				<div className="popular">
					{popular.map((el) => (
						<MovieCard key={el.id} el={el} />
					))}

					<div className="popular--pagin">
						<AiOutlineDoubleLeft
							onClick={() => {
								setPage(page > 1 ? page - 1 : page);
							}}
						/>
						<div className="popular--pagin__text">
							<h3>{page}</h3>
							<h4>{page + 1}</h4>
							<h4>{page + 2} </h4>
						</div>

						<AiOutlineDoubleRight
							onClick={() => {
								setPage(page + 1);
							}}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Popular;
