import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import Team from "./components/Team/Team";
import NotFound from "./components/NotFound/NotFound";
import TeamDetail from "./components/TeamDetail/TeamDetail";

function App() {
  const [teams, setTeams] = useState([]);
  console.log(teams);
  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, [teams]);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <div
            className="container"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {teams.map((team) => (
              <Team key={team.idTeam} team={team} />
            ))}
          </div>
        </Route>
        <Route path="/home">
          <Header />
          <div
            className="container"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {teams.map((team) => (
              <Team key={team.idTeam} team={team} />
            ))}
          </div>
        </Route>
        {/* write the external path */}
        <Route path="/explore/:id">
          <TeamDetail />
        </Route>
        {/* end external path */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
