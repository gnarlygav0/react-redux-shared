import 'react-native-get-random-values' // in react native environments
import React from 'react'
import {Provider} from 'react-redux'
import {Store} from 'redux'
import {ReduxAppState} from './types'

/**
 * Data we need to initialize the store
 */
export interface CoreProviderProps {
  /** redux state data */
  configuredStore?: Store<ReduxAppState>
  children: JSX.Element
}

/**
 * Must not be implemented more than once in an application.
 *
 * Wrap the app in this component to get the redux state and access to actions like api calls and retrieve state
 *
 * Actions from this library need to be called from within this component. If made outside, you'll get an error
 *
 * @param {CoreProviderProps<T>} param0
 * @returns {JSX.Element} that acts as a redux Provider
 */
export function CoreProvider({
  configuredStore,
  children,
}: CoreProviderProps): JSX.Element {
  if (configuredStore) {
    return <Provider store={configuredStore}>{children}</Provider>
  } else {
    console.error(
      'Please provide configuredStore prop to the CoreProvider component',
    )
    return <></>
  }
}
