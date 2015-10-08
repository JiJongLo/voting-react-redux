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
            { this.getPair().map(entry =>
                        <button key = {entry}
                                disabled  = {this.isDisabled()}
                                onClick = {() => this.props.vote(entry)}>
                            <h1>{entry}</h1>
                            {this.hasVoteFor(entry) ? <div className = "label">Voted </div> : null }
                        </button>
                )
            }
        </div>;
    }
})