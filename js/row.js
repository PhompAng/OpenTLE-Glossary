import React from 'react'

export default class Row extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <tr key={this.props.key}>
            <td>{this.props.word}</td>
            <td>{this.props.meaning}</td>
        </tr>
    }
}
