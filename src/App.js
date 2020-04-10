import React, {Component} from 'react'
import './App.css'
import StreamGraph from './StreamGraph'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className='App-header'>
                    <h2>
                        D3 Dashboard</h2>
                </div>
                <div>
                    <StreamGraph colorScale={colorScale} data={appdata} size={[1000, 250]}/>
                </div>
            </div>
        )
    }
}

export default App