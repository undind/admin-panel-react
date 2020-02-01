const initialState = {
  items: [],
  isFetching: false,
  error: false
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'GET_SERVICES_DATA':
      return state.concat([action.text])
    default:
      return state
  }
}