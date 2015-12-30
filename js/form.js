import React from 'react'

export default class Form extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChange(e) {
        this.props.onUserInput(e.target.value)
    }

    render() {
        return <nav>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" value={this.props.input} onChange={this.handleChange.bind(this)} required />
                        <label htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    }
}
