import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import RecipesListContainer from './components/recipe/RecipesListContainer';
import PageNotFound from './components/PageNotFound';
import RecipesFormContainer from './components/recipe/RecipeFormContainer';
import RecipeDetail from './components/recipe/RecipeDetail';
import ScheduleContainer from './components/schedule/ScheduleContainer';
import ScheduleList from './components/schedule/ScheduleList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Link to="/">Recipes</Link>
                <Link to="/schedule">Schedule</Link>
                <Link to="/add-recipe-form">Form</Link>

                <Switch>
                    <Route exact path="/" component={RecipesListContainer} />
                    <Route exact path="/recipe/:id" component={RecipeDetail} />
                    <Route path="/add-recipe-form" component={RecipesFormContainer} />
                    <Route path="/schedule/:weekNumber" component={ScheduleContainer} />
                    <Route path="/schedule" component={ScheduleList} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;
