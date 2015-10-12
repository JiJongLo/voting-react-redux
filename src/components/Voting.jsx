
import React from 'react';
import Winner from  './Winner';
import Vote from  './Vote';
import PureRenderMixin from 'react-addons-pure-render-mixin';
export default React.createClass({
    getPair (){
        return this.props.pair || [];
    },
    mixins: [PureRenderMixin],
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