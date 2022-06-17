import {configureReduxStoreWithEnhancer} from '..'
import {createReducer} from 'reduxsauce'

describe('setup with submodules', () => {
  const player = {
    player: {
      data: {
        color: 'red',
      },
    },
  }
  const planner = {planner: {prop1: 'blue', prop2: 'red'}}
  const sagas = gen as any
  const reducer = createReducer(player, {
    h1: state => ({...state, data: {color: 'blue'}}),
    h2: state => ({...state, data: {color: 'yellow'}}),
  })
  const store = configureReduxStoreWithEnhancer({
    player: {
      initialState: player.player,
      middleware: {
        sagas,
      },
      reducer,
    },
    planner: {
      initialState: planner.planner,
      middleware: {
        sagas,
      },
      reducer,
    },
  })
  it('store', () => {
    expect(store).toBeDefined()
    expect(store.getState()).toEqual({...planner, ...player})

    store.dispatch({type: 'h1'})
    expect(store.getState().player.data.color).toEqual('blue')
    store.dispatch({type: 'h2'})
    expect(store.getState().player.data.color).toEqual('yellow')
  })
})

function* gen(): Generator<any, any, any> {
  return
}
