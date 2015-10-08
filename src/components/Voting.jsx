
import React from 'react';

export default React.createClass({
    getPair (){
        return this.props.pair || [];
    },
    isDisabled () {
        return !!this.props.hasVoted;
    },
    hasVoteFor (entry) {
        return this.props.hasVoted === entry;
    },
    render () {
        return <div className="voting">
            {
            this.props.winner ?
              <Winner ref = "winner" winner={this.props.winner} /> :
                <Vote {...this.props} />
            }
            </div>;
    }
})