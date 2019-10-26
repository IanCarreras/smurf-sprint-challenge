import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_ERROR,
    FETCH_SMURFS_SUCCESS
} from '../actions/actions'

const initialState = {
    smurfs: null
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action 
    switch (type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SMURFS_ERROR:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: payload,
                isLoading: false
            }
        default:
            return state
    }
}

export default reducer