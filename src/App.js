import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DataGlobal, DataIndonesia } from "./api";
import { Cards, Table } from "./Component";

class App extends React.Component {
  state = {
    dataGlobal: {},
    dataIndonesia: {},
  };

  async componentDidMount() {
    const dataGlobal = await DataGlobal();
    const dataIndonesia = await DataIndonesia();
    this.setState({ dataGlobal: dataGlobal });
    this.setState({ dataIndonesia: dataIndonesia });
  }

  render() {
    return (
      <div>
        <Router>
          <h1>Covid Tracker</h1>
          <ul>
            <li>
              <Link to="/">Global</Link>
            </li>
            <li>
              <Link to="/indonesia">Indonesia</Link>
            </li>
            <li>
              <Link to="/provinsi">Per Provinsi</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/indonesia">
              <Cards
                data={this.state.dataIndonesia}
                text="Jumlah Kasus Indonesia"
              />
            </Route>
            <Route path="/provinsi">
              <Table />
            </Route>
            <Route path="/">
              <Cards data={this.state.dataGlobal} text="Jumlah Kasus Dunia" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;