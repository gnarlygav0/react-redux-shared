import React from 'react'
import {create} from 'react-test-renderer'
import {CoreProvider} from '..'

const props = {
  data: {prop: 3},
  configuredStore: {
    state: {},
    getState: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    replaceReducer: jest.fn(),
  },
} as any

describe('core provider', () => {
  it('works with configure store', () => {
    const component = create(
      <CoreProvider {...props}>
        <></>
      </CoreProvider>,
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('works with OUT configure store', () => {
    const component = create(
      <CoreProvider>
        <></>
      </CoreProvider>,
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
