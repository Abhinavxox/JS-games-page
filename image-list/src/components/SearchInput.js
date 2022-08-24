import React from "react";

class SearchInput extends React.Component {

    constructor(props) {
        super(props)
        this.state = { entry: '' }
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <div className="ui massive icon input">
                            <input type="text" placeholder="Search..." value={this.state.entry} onChange={(event) => this.setState({ entry: event.target.value.toUpperCase() })} />
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput;