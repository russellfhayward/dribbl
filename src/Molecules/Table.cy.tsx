import * as React from 'react'
import { mount } from '@cypress/react'
import Table from './Table'

describe('DribbleHome', () => {
  it('should render a header', () => {
    const child = 'this is a header'
    mount(<Table />);
    
  })
})