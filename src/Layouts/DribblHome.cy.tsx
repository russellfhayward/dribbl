import * as React from 'react'
import { mount } from '@cypress/react'
import DribbleHome from './DribblHome'
import { Socket } from 'socket.io-client';

describe('DribbleHome', () => {
  it('should render a header', () => {
    //mount(<DribbleHome socket={socket}/>);
    
    cy.get('[data-cy="home-page-header"]')
      .should('exist');
  })
})