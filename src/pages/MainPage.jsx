import NavBar from "../components/NavBar";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="main-page">
      <NavBar />
      <div className="play-body">
        <div className="pb-top">
          <div className="pb-countdown">00:00:00</div>
          <div className="pb-score">3/10</div>
        </div>
        <div className="pb-cards" id="scrollbar2">
          <div className="pb-card">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
              alt="card"
            />
            <div className="pb-card-text">Vaporeon</div>
          </div>
          <div className="pb-card">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
              alt="card"
            />
            <div className="pb-card-text">Vaporeon</div>
          </div>
          <div className="pb-card">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
              alt="card"
            />
            <div className="pb-card-text">Vaporeon</div>
          </div>
          <div className="pb-card">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
              alt="card"
            />
            <div className="pb-card-text">Vaporeon</div>
          </div>
          <div className="pb-card">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
              alt="card"
            />
            <div className="pb-card-text">Vaporeon</div>
          </div>
          <div className="pb-card">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
              alt="card"
            />
            <div className="pb-card-text">Vaporeon</div>
          </div>
          <div className="pb-card">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
              alt="card"
            />
            <div className="pb-card-text">Vaporeon</div>
          </div>
          <div className="pb-card">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
              alt="card"
            />
            <div className="pb-card-text">Vaporeon</div>
          </div>
          <div className="pb-card">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
              alt="card"
            />
            <div className="pb-card-text">Vaporeon</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
