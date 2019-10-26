import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex,
    display-direction: column,
    border: 1px solid black,
    border-radius: .5rem,
`
const Info = styled.div`

`

const Smurf = ({ name, age, height }) => {
    return (
        <Div>
            <Info>{name}</Info>
            <Info>{age}</Info>
            <Info>{height}</Info>
        </Div>
    )
}

export default Smurf