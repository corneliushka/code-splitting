import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from "./chunked-components/Home"
import Chart from "./chunked-components/Chart"
import Table from "./chunked-components/Table"
import RichText from "./chunked-components/RichText"


export default function App() {
return (
    <Router>
    <div>
        <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/table">Table</Link>
            </li>
            <li>
                <Link to="/chart">Chart</Link>
            </li>
            <li>
                <Link to="/richtext">RichText</Link>
            </li>
        </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/table">
                <Table />
            </Route>
            <Route path="/chart">
                <Chart />
            </Route>
            <Route path="/richtext">
                <RichText />
            </Route>

        </Switch>
    </div>
    </Router>
);
}

