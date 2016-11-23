const React = require('react')
const gol = require('gol-functional')

const App = React.createClass({
  getInitialState () {
    return {
      sim: null,
      board: []
    }
  },
  componentDidMount () {
    const sim = gol({
      size: 20,
      speed: 1000,
      generate: true
    }, board => {
      this.setState({board})
    })
    this.setState({sim})
  },
  start () {
    this.state.sim.start()
  },
  stop () {
    this.state.sim.stop()
  },
  render() {
    const td = cell =>
      <td
        style={{
          height: '60px',
          minWidth: '60px'
        }}
        className={cell === 1 ? 'bg-yellow' : ''}>

      </td>

    const tr = row =>
      <tr>{row.map(td)}</tr>
    return (
      <div>
        <h1>Game of Life</h1>
        <button onClick={this.start}>Start</button>
        <button className="ml2" onClick={this.stop}>Stop</button>
        <hr />
        <table>
          {this.state.board.map(tr)}
        </table>
      </div>
    )
  }
})

module.exports = App
