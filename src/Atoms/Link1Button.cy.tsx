import * as React from 'react'
import { mount } from '@cypress/react';
import Link1Button from './Link1Button';

const baseProps = {
  onClick: () => {}
}

describe('Link1Button', () => {
  it('should render a button', () => {
    mount(<Link1Button {...baseProps} />);
    cy.get('button');

    cy.contains('Hello');
  })

  it('should have a blue background', () => {
    mount(<Link1Button {...baseProps} />);
    
    cy.get('[data-cy="link-1-button"]')
      .should('have.css', 'background-color', 'rgb(0, 0, 255)');
  })

  it.only('should handle click', () => {
    mount(<Link1Button onClick={cy.stub().as('click')} />)
    
    cy.get('button').first().click()
    cy.get('@click').should('be.called')
  })
})