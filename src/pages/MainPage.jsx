import NavBar from "../components/NavBar";
import "./MainPage.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function MainPage() {
  const [pokemonIDs, setPokemonIDs] = useState([]);
  const [pokemonCards, setPokemonCards] = useState([]);
  const [clickedPokemonCards, setClickedPokemonCards] = useState([]);

  function shuffle(originalArray) {
    var array = [].concat(originalArray);
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  useEffect(() => {
    if (
      clickedPokemonCards
        .slice(0, -1)
        .includes(clickedPokemonCards[clickedPokemonCards.length - 1])
    ) {
      setClickedPokemonCards([]);
    }
  }, [clickedPokemonCards]);

  const generatePokemonIDs = () => {
    const numbers = [];
    while (numbers.length < 11) {
      const randomNumber = Math.floor(Math.random() * 1025) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  };

  const clickCard = (id) => {
    setClickedPokemonCards((prev) => prev.concat(id));
    setPokemonCards(
      shuffle(pokemonIDs)
        .slice(0, 9)
        .map((id) => <PokemonCard key={id} id={id} clickCard={clickCard} />)
    );
  };

  useEffect(() => {
    console.log("These are the clicked cards: ");
    console.log(clickedPokemonCards);
  }, [clickedPokemonCards]);

  useEffect(() => {
    setPokemonIDs(generatePokemonIDs());
  }, []);

  useEffect(() => {
    if (pokemonIDs) {
      setPokemonCards(
        pokemonIDs
          .slice(0, 9)
          .map((id) => <PokemonCard key={id} id={id} clickCard={clickCard} />)
      );
    }
  }, [pokemonIDs]);

  return (
    <div className="main-page">
      <NavBar />
      <div className="play-body">
        <div className="pb-top">
          <div className="pb-countdown">00:00:00</div>
          <div className="pb-score">{clickedPokemonCards.length}/10</div>
        </div>
        <div className="pb-cards" id="scrollbar2">
          {pokemonCards}
        </div>
      </div>
    </div>
  );
}

function PokemonCard({ id, clickCard }) {
  const [pokemonName, setPokemonName] = useState("");

  const pokemonData = Axios.get("https://pokeapi.co/api/v2/pokemon/" + id)
    .then((response) => {
      setPokemonName(response.data.name);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="pb-card" onClick={() => clickCard(id)}>
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
