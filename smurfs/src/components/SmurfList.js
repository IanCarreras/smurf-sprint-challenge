import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../actions/actions'
import styled from 'styled-components'

import Smurf from './Smurf'

const List = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: 2rem;
`

const SmurfList = props => {
    const { smurfs, actions } = props

    useEffect(() => {
      actions.getSmurfs()
    }, [actions])

    if (!smurfs) return <h1>Loading...</h1>

    return (
        <List>
            {
                smurfs.map(smurf => {
                    return <Smurf
                            key={smurf.id}
                            name={smurf.name}
                            age={smurf.age}
                            height={smurf.height}
                            id={smurf.id} />
                })
            }
        </List>
    )
}

const mapStateToProps = ({ smurfs }) => {
    return { smurfs }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actionCreators, dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SmurfList);