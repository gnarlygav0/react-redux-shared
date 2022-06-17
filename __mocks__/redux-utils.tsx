import React from 'react'
import {create} from 'react-test-renderer'
import {Store} from 'redux'
import {ReduxAppState, CoreProvider} from '..'

/**
 *
 * Redux Provider for testing purposes
 */
export function reduxRender(children: JSX.Element): any {
  return create(<CoreProvider>{children}</CoreProvider>)
}

/**
 *
 * Redux Provider for testing purposes
 */
export function reduxRenderWithEnhancer(
  children: JSX.Element,
  configuredStore: Store<ReduxAppState>,
): any {
  return create(
    <CoreProvider configuredStore={configuredStore}>{children}</CoreProvider>,
  )
}
