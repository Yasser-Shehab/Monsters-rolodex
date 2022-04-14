import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleUpperCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleUpperCase().includes(searchField);
    });
    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          onChangeHandler={onSearchChange}
          className="search-box"
        />

        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1> {monster.name}</h1>
            </div>
          );
        })}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
