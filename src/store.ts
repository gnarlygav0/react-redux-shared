import {applyMiddleware, combineReducers, createStore, Store} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'
import {ReduxAppState, ReduxSubmoduleReference} from './types'

/**
 *
 * @param {AuthData} authData
 * @param {ReduxSubmoduleReference} submodules
 */

/** Implementation */
export function configureReduxStoreWithEnhancer(
  submodules: ReduxSubmoduleReference,
): Store<ReduxAppState> {
  var initialAppState: ReduxAppState = {}
  let reducerObject = {}

  var sagas = []
  var thunks = []

  for (var i in submodules) {
    initialAppState = {
      ...initialAppState,
      [i]: submodules[i].initialState,
    }
    reducerObject = {
      ...reducerObject,
      [i]: submodules[i].reducer,
    }

    if (submodules[i].middleware?.sagas !== undefined) {
      sagas.push(submodules[i].middleware?.sagas)
    } else if (submodules[i].middleware?.thunk !== undefined) {
      thunks.push(submodules[i].middleware?.thunk)
    }
  }

  const reducers = combineReducers(reducerObject)

  const sagaMiddleware = createSagaMiddleware()

  const creation = createStore(
    reducers,
    initialAppState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, ...thunks)),
  )

  for (var j = 0; j < sagas.length; j++) {
    if (sagas[j] !== undefined) sagaMiddleware.run(sagas[j] as any)
  }

  return creation as any
}
