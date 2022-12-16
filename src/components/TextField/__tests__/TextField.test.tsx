import { render } from '@testing-library/react'
import * as React from 'react'

import 'jest-canvas-mock'

import { TextField } from '../index'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<TextField />)
  })
})
