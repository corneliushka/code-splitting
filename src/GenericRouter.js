import React, { Suspense, lazy } from "react";
import {
    BrowserRouter,
    Switch,
    Redirect,
    Route,
    Link
} from "react-router-dom";

import Home from "./chunked-components/Home"
//import Chart from "./chunked-components/Chart"
//import Table from "./chunked-components/Table"
//import RichText from "./chunked-components/RichText"


const Table = lazy( () => import('./chunked-components/Table'));
const Chart = lazy( () => import ('./chunked-components/Chart'));
const RichText = lazy( () => import('./chunked-components/RichText'))

export default function App() {


    /* const loadTable = () => {
        import('./chunked-components/Table')
            .then( ({ Table }) => {
                // use module Table

            })
    } */

    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
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
                    <Route path="/home" component={Home} />
                    <Route path="/table" component={Table} />
                    <Route exact path="/chart" component={Chart} />
                    <Route exact path="/richtext" component={RichText} />
                    <Redirect from="/" to="/home" />

                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

