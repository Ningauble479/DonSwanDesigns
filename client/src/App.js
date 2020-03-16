import React, {Component} from 'react';
import './App.css';
import { Grid, Box, Typography, AppBar } from '@material-ui/core'
import NavButton from './Components/NavbarButtons'
import PotModal from './Components/potModal'
import Axios from 'axios'
import MainStore from './Components/MainStore'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      potModalShow: false,
      data: [],
      shownItem: null,
      cartItems: []
    }
  }

  componentDidMount(){
    this.getAllItems()
  }
  

  handleModal = (input, item) => {
    this.setState({potModalShow: input, shownItem: item})
  }

  getAllItems = () => {
    Axios.get('/api/getProducts')
    .then((res)=>{
      console.log(res)
      this.setState({data: res.data.data})
    })
  }

  searchItems = (item) => {
    console.log(item)
    Axios.post('/api/getSpecificProduct', 
    {item: item}
    )
    .then(res=>this.setState({data: res.data.data}))
  }

  addToCart = (item) => {
    Axios.post('/api/checkIfAvailable',{id: item.id})
    .then((res)=>{
      if(res.data.inventory.quantity === 0){
        alert('Sorry! This product has either been sold or is already in someones cart.')
      }
      else{
         for(let i=0; i<this.state.data.length; i++){
           if(item.id === this.state.data[i].id){
             let change = this.state.data
             change.splice(1, i)
             this.setState({data: change})
           }
         }
        Axios.post('/api/putInCart', {id: item.id})
        let currentState = this.state.cartItems
        currentState.push(item)
        console.log({currentState: currentState})
        
        this.setState({cartItems: currentState})
        console.log(this.state.cartItems)
      }
    })
  }

render(){
  return (
    <Router>
    <Grid className="App">
      <PotModal addToCart={this.addToCart} item={this.state.shownItem} potModalShow={this.state.potModalShow} handleModal={this.handleModal}/>
      <AppBar color='inherit' style={{borderBottom:'2px solid black', height: '50px'}}>
        <Box style={{minHeight: '100%'}}>
          <Grid style={{minHeight: '100%'}} container justify='space-between' alignItems='center'>
            <Box pl={4} mr={3}>
              <Typography variant='h4'>Don Swanson Designs</Typography>
            </Box>
            <NavButton state={this.state} getAll={this.getAllItems} searchItems={this.searchItems}/>
          </Grid>
        </Box>
      </AppBar>
      <Box height='100vh' width='100vw'>
        
        <Route path ='/main/store'
              render={(props)=><MainStore {...props} data={this.state.data} handleModal={this.handleModal}/>}/>
        
      </Box>
    </Grid>
    </Router>
  );}
}

export default App;
