import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store';
import './App.css';
import RecipesListContainer from './components/RecipesListContainer';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <RecipesListContainer/>
                </div>
            </Provider>
            
        );
    }
}

export default App;
