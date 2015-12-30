import React from 'react'
import ReactDOM from 'react-dom'
import Result from './result.js'
import Form from './form.js'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ""
        }
    }

    handleUserInput(input) {
        this.setState({input: input})
    }

    render() {
        return <div>
            <div className="row">
                <div className="col s12">
                    <Form
                        input={this.state.input}
                        onUserInput={this.handleUserInput.bind(this)}/>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <div className="card-panel">
                        <Result input={this.state.input}/>
                    </div>
                </div>
            </div>
        </div>
    }
}


ReactDOM.render(<Main />, document.getElementById('container'));
