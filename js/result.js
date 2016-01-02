import React from 'react'
import Row from './row.js'
import {glossary} from './all_glossary.utf8.js'

export default class Result extends React.Component {
    constructor(props) {
        super(props)
    }

    wordFilter(w) {
        return w.word.substring(0, this.length).indexOf(this) !== -1
    }

    render() {
        let rows = glossary.filter(this.wordFilter, this.props.input).map(w => <Row key={w.key} word={w.word} meaning={w.meaning} />)
        return <table className="highlight">
            <thead>
              <tr>
                  <th>Word</th>
                  <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    }
}
