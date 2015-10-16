/**
 * Created by Dr_Shu on 16.10.2015.
 */
import React from 'react';
import List from 'immutable';

const pair = List.of("Trainspotting", '28 Days Later');

export default React.createClass({
    render() {
        return React.cloneElement(this.props.children, {pair: pair})
    }
})