import NavBar from "../components/NavBar";
import "./MainPage.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function MainPage() {
  const [pokemonIDs, setPokemonIDs] = useState([]);

  const generatePokemonIDs = () => {
    const numbers = [];
    while (numbers.length < 15) {
      const randomNumber = Math.floor(Math.random() * 1025) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  };

  useEffect(() => {
    setPokemonIDs(generatePokemonIDs());
  }, []);

  return (
    <div className="main-page">
      <NavBar />
      <div className="play-body">
        <div className="pb-top">
          <div className="pb-countdown">00:00:00</div>
          <div className="pb-score">3/10</div>
        </div>
        <div className="pb-cards" id="scrollbar2">
          {pokemonIDs.slice(0, 9).map((id) => (
            <PokemonCard key={id} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PokemonCard({ id }) {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonID, setPokemonID] = useState(id);

  const pokemonData = Axios.get("https://pokeapi.co/api/v2/pokemon/" + id)
    .then((response) => {
      setPokemonName(response.data.name);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="pb-card">
      <img
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
          id +
          ".png"
        }
        alt="card"
      />
      <div className="pb-card-text">
        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </div>
    </div>
  );
}

export default MainPage;
