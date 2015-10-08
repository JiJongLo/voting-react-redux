/**
 * Created by Dr_Shu on 07.10.2015.
 */
import Voting from "../../src/components/Voting";
import React from 'react/addons';
import {expect} from "chai";

const {renderIntoDocument, scryRenderedDOMComponentsWithTag} = React.addons.TestUtils;

describe("Voting", () = > {
  const component = renderIntoDocument(
      <Voting pair = {["Trainspotting", "28 Days Later"]} />
  );
  const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

  expect(buttons.length).to.equal(2);
  expect(buttons[0].getDOMNode().textContent).to.equal('Trainspotting');
  expect(buttons[1].getNode().textContent).to.equal('28 Days Later');
});