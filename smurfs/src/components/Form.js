import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../actions/actions'
import styled from 'styled-components'

const SideBar = styled.div`
    height: 75vh;
    width: 15%;
    text-align: center;
    padding: 1rem 1rem 0 1rem;
    float: left;
    border-right: 1px solid black;
`
const Input = styled.input`
    height: 1.5rem;
    margin-top: 1rem;
`
const Button = styled.button`
    margin: .5rem 0 0 0;
    :hover {
        cursor: pointer;
        background: black;
        color: white;
        border-radius: .5rem;
    }
`

const SmurfForm = ({ actions }) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [height, setHeight] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        actions.addSmurf({ name, age, height })
        setName('')
        setAge('')
        setHeight('')
    }

    return (
        <SideBar>
            <form onSubmit={e => handleSubmit(e)}>
                <Input type='text' placeholder='name' value={name} onChange={e => setName(e.target.value)} />
                <Input type='number' placeholder='age' value={age} onChange={e => setAge(e.target.value)} />
                <Input type='text' placeholder='height' value={height} onChange={e => setHeight(e.target.value)} />
                <Button type='submit'>Add Smurf</Button>
            </form>
        </SideBar>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actionCreators, dispatch)
    }
  }
  
  export default connect(null, mapDispatchToProps)(SmurfForm);