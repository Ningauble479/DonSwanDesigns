import React from 'react'
import PotCard from './Card'
import {Grid} from '@material-ui/core'

export default (props)=>{
    return(
    <Grid style={{width: "100%", paddingTop: '50px', paddingBottom:'75px'}} container justify='space-around' alignItems='space-around'>
          {
            props.data === '' ?
            (<h1>Loading...</h1>)
            :
            props.data.map((row)=>(
              <PotCard row={row} handleModal={props.handleModal}/>
            ))
          }
        </Grid>)
}