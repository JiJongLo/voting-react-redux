import React from 'react/addons';
import Voting from '../../src/components/Voting';
import {expect} from 'chai';
import {List} from 'immutable';
import Vote from '../../src/components/Vote';
import Winner from '../../src/components/Winner';
const {renderIntoDocument, scryRenderedDOMComponentsWithTag , Simulate}
    = React.addons.TestUtils;

describe('Voting', () => {

  it('renders a pair of buttons', () => {
    let voteWith;
    const vote = (entry) => voteWith = entry;
    const component = renderIntoDocument(
        <Voting pair={["Trainspotting", "28 Days Later"]}
           vote = {vote}/>
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0].getDOMNode());
    expect(buttons.length).to.equal(2);
    expect(buttons[0].getDOMNode().textContent).to.equal('Trainspotting');
    expect(buttons[1].getDOMNode().textContent).to.equal('28 Days Later');
      expect(voteWith).to.equal('Trainspotting');
  });

    it("does update DOM when prop changes", () => {
            const pair = List.of("Trainspotting", "28 Days Later");
            const component = renderIntoDocument(
                <Voting pair={pair}/>
            );
            let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
            expect(firstButton.textContent).to.equal("Trainspotting");
            const newPair = pair.set(0, 'Sunshine');
            component.setProps({pair: newPair});
            firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
            expect(firstButton.textContent).to.equal("Sunshine");
        }
    );
    it('disables buttons when user has voted', () => {
        const component = renderIntoDocument(
            <Voting pair={["Trainspotting", "28 Days Later"]}
                    hasVoted="Trainspotting"/>
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons.length).to.equal(2);
        expect(buttons[0].hasAttribute('disabled')).to.equal(true);
        expect(buttons[1].hasAttribute('disabled')).to.equal(true);
    });
    it('adds label to the voted entry', () => {
        const component = renderIntoDocument(
            <Voting pair={["Trainspotting", "28 Days Later"]}
                    hasVoted="Trainspotting" />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons[0].textContent).to.contain('Voted');
    });
    it('renders just the winner when there is one', () => {
        const component = renderIntoDocument(
            <Voting winner="Trainspotting"/>
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(buttons.length).to.equal(0);

        const winner = React.findDOMNode(component.refs.winner);
        expect(winner).to.be.ok;
        expect(winner.textContent).to.contain('Trainspotting');
    });
    it('renders as a pure component', () => {
        const pair = ['Trainspotting', '28 Days Later'];
        const component = renderIntoDocument(
            <Voting pair={pair}/>
        );

        let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
        expect(firstButton.textContent).to.equal('Trainspotting');

        pair[0] = 'Sunshine';
        component.setProps({pair: pair});
        firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
        debugger;
        expect(firstButton.textContent).to.equal('Trainspotting');
    });

});