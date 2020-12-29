import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Breakout from './games/breakout'

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/breakout">Breakout</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/breakout">
                        <Breakout />
                    </Route>
                    <Route path="/">
                        <h1>Home</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
