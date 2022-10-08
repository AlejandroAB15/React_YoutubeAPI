import React from "react";

class SearchBar extends React.Component{
    
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        //If a function from the parent element is sent as a prop the child element can make use of it 
        this.props.onTermSubmit(this.state.term);
    }
    
    //We reassing the value of the input so the whole information is driven by the React App and not by the HTML part of the project
    render() {
        return(
            <div className="field" style={{marginTop: "1rem"}}>
                    <form onSubmit={this.onFormSubmit}>
                        <p className="control has-icons-right">
                            <input type="text" className="input" placeholder="Video Search"
                             onChange={ e => { this.setState({ term: e.target.value }) } }
                             value={this.state.term}/>
                            <span className="icon is-small is-right">
                                <i className="fas fa-solid fa-magnifying-glass"></i>
                            </span>
                        </p>
                    </form>
            </div>
        );
    }
}

export default SearchBar;