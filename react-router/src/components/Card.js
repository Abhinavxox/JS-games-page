import React from "react";

class Card extends React.Component {

    constructor(props) {
        super(props)
        this.state = { user: '' }
    }

    componentDidMount() {
        let user = this.props.match.params.user
        this.setState({ user: user })
    }

    render() {
        return (
            <div className="ui raised very padded text container segment" style={{ marginTop: '80px' }}>
                <h3 className="ui header">Card</h3>
                This card is of {this.state.user}
            </div>
        )
    }
}

export default Card