import axios from 'axios'

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START'
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const ADD_SMURF_START = 'ADD_SMURF_START'
export const ADD_SMURF_ERROR = 'ADD_SMURF_ERROR'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'

const getSmurfs = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_SMURFS_START })

        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                dispatch({ 
                    type: FETCH_SMURFS_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({ 
                    type: FETCH_SMURFS_ERROR,
                    payload: err.response
                })
            })
    }
}

const addSmurf = (smurf) => {
    return (dispatch) => {
        dispatch({ type: ADD_SMURF_START })

        axios.post('http://localhost:3333/smurfs', smurf)
            .then(res => {
                dispatch({
                    type: ADD_SMURF_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({ 
                    type: ADD_SMURF_ERROR,
                    payload: err.response
                })
            })
    }
}

export const actionCreators = {
    getSmurfs,
    addSmurf
}