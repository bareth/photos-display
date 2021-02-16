import React from 'react';


class SearchBox extends React.Component {
    state = { term: ''}

    onSubmit = event => {
        event.preventDefault();
        this.props.onSearchTerm(this.state.term);
    }
    
    
    render() {
        return (
            <div className="search-box ui segment">
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <input 
                            value={this.state.term} 
                            type="search"
                            onChange={e => this.setState({term: e.target.value}) }
                            className="prompt"
                            placeholder="Search images.."
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBox;