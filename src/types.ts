import {Saga} from '@redux-saga/types'
import {AnyAction, Reducer} from 'redux'

export type GenericType = string
export type CoreActionType<T extends GenericType> = {
  [key in T]: string
}

/**
 *
 * make sure to have a unique prefix.
 * prefix will be lowercased to ensure consistent standard across the app.
 *
 * @param types
 * @param prefixAddition e.g maestro, econsent, epro/builder, epro/planner
 * @returns
 */
export function createCoreType<T extends GenericType>(
  types: readonly string[],
  givenPrefixAddition: string,
): {values: {[key in T]: string}; prefix: string} {
  const prefixAddition = givenPrefixAddition.toLocaleLowerCase()

  let values: {[key in T]: string} = {} as {[key in T]: string}

  types.forEach(s => {
    values[s as T] = `${prefixAddition}/${s}`
  })

  return {values, prefix: `${prefixAddition}/`}
}

// core Redux state along with any enhancers that need to be added
export interface ReduxAppState extends ReduxAppEnhancer {}

// used to describe general redux state
export type ReduxAppEnhancer = {
  [key in string]: any
}

export type ReduxSubmoduleReference = {
  [key in string]: {
    initialState: any
    reducer: Reducer<any, AnyAction>
    middleware?: {
      thunk?: any
      sagas?: Saga<any[]>
    }
  }
}

/** Loading and Error Type*/
export type LET = 'getAll' | 'getOne' | 'create' | 'publish' | 'edit' | 'delete'

export interface BaseReduxExtension<T extends string = LET> {
  loading: {
    [x in T]?: boolean
  }
  errors: {
    [x in T]?: Error
  }
}
