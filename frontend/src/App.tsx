
import './App.css'
import teams from "./CollegeBasketballTeams.json"


const bBallTeams = teams.teams;

function Welcome() {
  return <h1>Uninteresting Basketball Info</h1>;
}

function Team({
  school,
  name,
  city,
  state
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <h2>School Name:{school}</h2>
      <h4>Mascot: {name}</h4>
      <h4>Location: {city}, {state}</h4>
    </>
  );
}

function TeamList() {
  return (
    <>
      {bBallTeams.map((singleTeam) => (
        <Team {...singleTeam} />
      ))}
    </>
  );
}


function App() {
  

  return (
    <>
      <Welcome/>
      <TeamList/>
    </>
  )
}

export default App
