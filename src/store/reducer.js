import {create, error} from './actions'

const initialState = {
    user: {},
    token: '',
    isLogged: false,
    iserror: false
}

const stateReducer = (state = initialState, action) => {
    switch (action.type) {
      case create: {
          const user = action.user.user
          const token = action.user.token
          return{...initialState, user: user, token:token, isLogged:true}
      }
      case error: {
          return{...initialState, iserror: true}
      }
    }
    return initialState;
}

export default stateReducer;