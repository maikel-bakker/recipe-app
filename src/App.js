import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import RecipesListContainer from './components/RecipesListContainer';
import PageNotFound from './components/PageNotFound';
import RecipesFormContainer from './components/RecipeFormContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Link to="/add-recipe-form">Form</Link>
                <Switch>
                    <Route exact path="/" component={RecipesListContainer} />
                    <Route path="/add-recipe-form" component={RecipesFormContainer} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;
