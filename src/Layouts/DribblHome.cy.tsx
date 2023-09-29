import * as React from 'react'
import { mount } from '@cypress/react'
import DribbleHome from './DribblHome'

describe('DribbleHome', () => {
  it('should render a header', () => {
    mount(<DribbleHome />);
    
    cy.get('[data-cy="home-page-header"]')
      .should('exist');
  })
})