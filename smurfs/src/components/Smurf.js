import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../actions/actions'
import styled from 'styled-components'

const Div = styled.div`
    border: 1px solid black;
    border-radius: .2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 15rem;
    padding: 2rem;
    margin: 1rem 0 0 1rem;
`
const Info = styled.div`
    font-size: 2rem;
    margin-top: 1rem;
`
const Delete = styled.button`
    margin-top: 1rem;
    :hover {
        cursor: pointer;
        color: white;
        background: black;
    }
`

const Smurf = ({ name, age, height, id, actions }) => {
    return (
        <Div>
            <Info>{name}</Info>
            <Info>Age: {age}</Info>
            <Info>{height} tall</Info>
            <Delete onClick={() => actions.deleteSmurf(id)}>Delete</Delete>
        </Div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actionCreators, dispatch)
    }
  }
  
  export default connect(null, mapDispatchToProps)(Smurf);