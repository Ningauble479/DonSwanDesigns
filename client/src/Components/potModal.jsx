import React from 'react'
import { Grid, Box, Button } from '@material-ui/core'


export default (props)=>{
    let item = props.item
    let inner = false
    function test(a){
        if(a === true){
            
            inner = true
            setTimeout(()=>inner = false, 500)
        }
        else if(a === false){
            if(inner === true){
                return null
            }
            else{
                props.handleModal(false)
            }
        }
    }
    if(props.potModalShow === false) {
        return null
    }
    else if(props.potModalShow === true){
    return(
        <Grid onClick={()=>{test(false)}} className='potModal' container justify='center' alignItems='center'>
            <Box onClick={()=>{test(true)}} className='potModalInner'>
                <Grid style={{height: '100%', width: '100%'}} container direction='column'>
                <Grid style={{height: '10%'}} container justify='flex-end'>
                    <Box onClick={()=>{props.handleModal(false)}} className='modalExit' mr={5} mt={1}>X</Box>
                </Grid>
                <Grid style={{height: '80%', width: '100%'}} container justify='space-around' alignItems='center'>
                    <Box className='potModalPic' style={{backgroundImage: `url(${item.image})`}} bgcolor='red' width='40%' height='75%'>

                    </Box>
                    <Box className='potModalPic' style={{backgroundImage: `url(${item.image})`}} bgcolor='orange' width='40%' height='75%'>

                    </Box>
                </Grid>
                <Grid container style={{height: '10%', paddingBottom:'10px'}} justify='center'>
                    <Button onClick={()=>{
                        props.addToCart(item)
                        props.handleModal(false)
                        }} style={{width: '90%'}} variant='contained'>Add To Cart</Button>
                </Grid>
                </Grid>
            </Box>
        </Grid>
    )}
}