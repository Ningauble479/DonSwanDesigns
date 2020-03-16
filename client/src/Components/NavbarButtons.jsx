import React, {useState} from 'react'
import { Grid, Drawer, Box, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'


export default (props)=>{
    let [open, handleOpen] = useState(false)
    let [right, toggleDrawer] = useState(false)
    return(
        <React.Fragment>
            <Link class='linkFix navButton' to='/main/About'><button style={{width: '100%'}} className='navButton'>About Don</button></Link>
            <Link class='linkFix navButton' to='/main/store'><button style={{width: '100%'}} className='navButton' onMouseEnter={()=>handleOpen(true)} onMouseLeave={()=>handleOpen(false)}>Pots</button></Link>
            <Link class='linkFix navButton' to='/main/Shows'><button style={{width: '100%'}} className='navButton'>Upcoming Shows</button></Link>
            <button onClick={()=>toggleDrawer(true)} className='navButton'>Cart</button>
            <Grid onMouseLeave={()=>handleOpen(false)} onMouseEnter={()=>handleOpen(true)} className={open === true ? 'dropDownOpen' : 'dropDownClose'}>
            <Link class='linkFix' to='/main/store'><button onClick={()=>props.searchItems('prod_GtQtm6PeLGrx92')} className='dropDownButtons'>
                    CUPS
                </button></Link>
                <Link class='linkFix' to='/main/store'><button onClick={()=>props.searchItems('prod_GtRdHFDMSuSdvl')} className='dropDownButtons'>
                VASES
                </button></Link>
                <Link class='linkFix' to='/main/store'><button onClick={()=>props.searchItems('prod_GtRrcUlMuSJoo6')} className='dropDownButtons'>
                PLATES
                </button></Link>
                <Link class='linkFix' to='/main/store'><button onClick={()=>props.searchItems('prod_GtRul8P7wQCkHw')} className='dropDownButtons'>
                BOWLS
                </button></Link>
                <Link class='linkFix' to='/main/store'><button onClick={()=>props.getAll()} className='dropDownButtons'>
                ALL
                </button></Link>
            </Grid>
            <Drawer open={right} anchor='right' onClose={()=>toggleDrawer(false)}>
                <Box className='cartDrawer'>
                    <Grid style={{height: '100%'}} container direction='column' justify='space-between'>
                        <Box height='10%' textAlign='center' pl={4} pr={4}>
                            <Typography style={{paddingTop: '10px', fontStyle: 'italic'}} variant='h3'>Don Swanson Designs</Typography>
                        </Box>
                        <Box height='60%'>
                            {
                                props.state.cartItems === '' || props.state.cartItems.length === 0?
                                <h1>No Items In Cart</h1>
                                :
                                props.state.cartItems.map((row)=>(
                                    <div style={{width: '300px', height: '200px', backgroundImage: `url(${row.image})`}}></div>
                                ))
                            }
                        </Box>
                        <Box height='30%'>
                            <Grid style={{height: '100%'}} container direction='column' justify='space-between'>
                                <Box pt={3} pl={5} pr={5} style={{borderTop: '1px solid black'}}>
                                <Typography variant='h4'>
                                    SubTotal: <span style={{float: 'right'}}>$25.00</span> <br/>
                                    Shipping: <span style={{float: 'right'}}>$4.25</span> <br/>
                                    Tax: <span style={{float: 'right'}}>$2.34</span> <br/>
                                </Typography>                                    
                                </Box>
                                <Box pl={5} pt={3} pr={5} style={{borderTop: '1px solid black'}}>
                                <Typography variant='h4'>
                                    Total: <span style={{float: 'right'}}>$32.52</span>
                                    </Typography>
                                </Box>
                                <Button variant='contained'>Checkout?</Button>
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
            </Drawer>
        </React.Fragment>
    )
}