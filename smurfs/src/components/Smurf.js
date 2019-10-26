import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    border: 1px solid black;
    border-radius: .2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    padding: 2rem;
    margin: 1rem 0 0 1rem;
`
const Info = styled.div`
    font-size: 2rem;
    margin-top: 1rem;
`

const Smurf = ({ name, age, height }) => {
    return (
        <Div>
            <Info>{name}</Info>
            <Info>Age: {age}</Info>
            <Info>{height} tall</Info>
        </Div>
    )
}

export default Smurf