import React from 'react';
import SearchForm from '../components/searchform/SearchForm';
import Buttons from '../components/mainboard/Buttons';
import { Provider } from 'react-redux';
import store from '../src/store';

const App = () => {
    return (
        <Provider store={store}>
            <SearchForm />
            <Buttons />
        </Provider>
    );
};

export default App;