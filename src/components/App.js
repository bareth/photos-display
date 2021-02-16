import './App.css'; 
import React from 'react';
import SearchBox from './SearchBox';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <SearchBox/>
            </div>
        ) 
    }
}

export default App;