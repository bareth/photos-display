import './App.css'; 
import React from 'react';
import unsplash from '../api/unsplash.js';
import SearchBox from './SearchBox';
import ImageList from './ImageList';

class App extends React.Component {
    state = {images: []}

    onSearchTerm = async(term) => {
        const response = await unsplash.get('search/photos', {
            params: {
                query: term
            }
        })
        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBox onSearchTerm={this.onSearchTerm}/>
                <ImageList images={this.state.images} />   
            </div>
        ) 
    }
}

export default App;