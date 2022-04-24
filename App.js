import React from 'react';
import './styles/styles.scss';
import Bio from './components/Bio';
import Info from './components/Info';
function App() {
    return (
        <div className="app">
            <div className="app-container">
                <div className="personal">
                    <Bio />
                </div>
                <div className="info">
                    <Info />
                </div>
            </div>
        </div>
    );
}

export default App;
