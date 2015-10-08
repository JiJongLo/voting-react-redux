import React from 'react/addons';
import Voting from '../../src/components/Voting';
import {expect} from 'chai';

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
    it( "disables buttons when user has voted" , () => {
            const component = renderIntoDocument(
                <Voting pair = {[ "Tainspotting" , "28 Days Later"]}
                    hasVoted = "Trainspotting"
                    />
            );
            const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

            expect(buttons.length).to.equal(2);
            expect.(buttons[0].getDOMNode().hasAttribute('disabled')).to.equal(true);
            expect.(buttons[1].getDOMNode().hasAttribute('disabled')).to.equal(true);
        }

    );

    it("add label to the voted entry", ()=> {
        const component = renderIntoDocument(
            <Voting pair={["Trainspotting", "28 Days Later"]}
                    hasVoted="Trainspotting" />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
              expect(buttons[0].getDOMNode().textContent).to.contain('Voted');


    } )

});