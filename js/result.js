import React from 'react'
import Row from './row.js'
import {glossary} from './all_glossary.utf8.js'

export default class Result extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let rows = []
        for (let index in glossary) {
            if (glossary[index].word.substring(0, this.props.input.length).indexOf(this.props.input) !== -1) {
                rows.push(<Row key={index} word={glossary[index].word} meaning={glossary[index].meaning} />)
            }
        }
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
