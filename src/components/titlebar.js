import React, { Component } from 'react';
import { Box } from 'grommet';

import '../App.css';

class TitleBar extends Component {
    render() {
        return (
            <div ref={this.props.refprop}>
                <h1 id="one-piece">One Piece</h1>
                <Card className="card"/>
            </div>
        );
    }
}

class Card extends Component {
    render() {
        return (
            <Box border={{ color: 'brand', size: 'medium' }}
                pad='xlarge'
                basis='small'
                round='xlarge'
                wrap='true'>
                <h3>This is a story of the Great Pirate Age</h3>
                <p>Monkey D Luffy sets out on a journey
                    to find the legendary treasure</p>
            </Box>
        );
    }
}

export default TitleBar;