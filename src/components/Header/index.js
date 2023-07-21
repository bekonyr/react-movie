import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { LanguageContext } from "../../context";
const Header = () => {
	const [search, setSearch] = useState("");
	const nav = useNavigate();
	const { language } = useContext(LanguageContext);
	const { setLanguage } = useContext(LanguageContext);
	const { dark } = useContext(LanguageContext);
	const { setDark } = useContext(LanguageContext);

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			setSearch(event.target.value);
			console.log(event.target.value);
		}
	};
	// console.log(search);
	// console.log(language);
	return (
		<header id="header">
			<div className="container">
				<div className="header">
					<nav className="header--link">
						<img
							src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg "
							alt="img"
						/>
						<NavLink to={"/"}>Home</NavLink>
						<NavLink to={"/popular"}>Popular</NavLink>
						<NavLink to={"/card"}>TopRated</NavLink>
					</nav>
					<div className="header--group">
						<button
							className="header--group__dark"
							onClick={() => setDark(!dark)}
						>
							{dark ? (<BsFillSunFill
									style={{
										fontSize: "30px",
									}}
								/>
							) : 	(
								<MdOutlineDarkMode
									style={{
										fontSize: "30px",
									}}
								/>
							)}
						</button>

						<select
							onChange={(e) => {
								setLanguage(e.target.value);
							}}
						>
							<option value="en-US">en</option>
							<option value="ru-RU">ru</option>
						</select>
						{/* <button>Войти</button> */}
						{/* <Link>Присоединиться к TMDB</Link> */}
						<input
							type="text"
							placeholder="search"
							onChange={(e) => setSearch(e.target.value)}
						/>

						<FaSearch id="btn" onClick={() => nav(`/movie/search/${search}`)} />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
