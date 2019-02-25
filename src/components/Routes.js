import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RecipesListContainer from './recipe/RecipesListContainer';
import PageNotFound from './PageNotFound';
import RecipesFormContainer from './recipe/RecipeFormContainer';
import RecipeDetail from './recipe/RecipeDetail';
import ScheduleContainer from './schedule/ScheduleContainer';
import ScheduleList from './schedule/ScheduleList';
import { IngredientListContainer } from './ingredient/IngredientListContainer';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={RecipesListContainer} />
            <Route exact path="/recipe/:id" component={RecipeDetail} />
            <Route path="/add-recipe-form" component={RecipesFormContainer} />
            <Route path="/schedule/:weekNumber" component={ScheduleContainer} />
            <Route path="/schedule" component={ScheduleList} />
            <Route path="/ingredient-list/:weekNumber" component={IngredientListContainer} />
            <Route component={PageNotFound} />
        </Switch>
    );
};
