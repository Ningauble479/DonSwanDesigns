import React from 'react'
import { Card, Box } from '@material-ui/core'

export default (props)=>{
    let row = props.row
    let price = row.price.toString()
    price = price.slice(0, -2)
    let showPrice = `$${price}.00`

    if(row.inventory.quantity === 0){
        return null
    }
    else{
    return(
        <Box>
        <Card onClick={()=>{props.handleModal(true, row)}} className='potCard' style={{backgroundColor: 'black', width: '400px', height: '500px', marginTop: '50px', backgroundImage: `url(${row.image})`}}>

        </Card>
        <h2>{showPrice}</h2>
        </Box>
    )}
}