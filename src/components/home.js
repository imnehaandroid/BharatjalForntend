import React from 'react'
import { Grid,Container,Table,TableContainer,TableBody,TableHead,TableRow} from "@material-ui/core";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';


export default class home extends React.Component{

    state={
        deviceData:[],
    }
componentDidMount=()=>
{
    let params=new URLSearchParams(window.location.search)
   let val= params.get("id")
  
     const url = 'http://bharatjaldispenser.herokuapp.com/device/all'
  fetch(url,{method: 'GET',headers: {"x-access-token": val},
      }).then((response) => response.json())  
        .then(data => {
          this.setState({
              deviceData:data
          })
          
            }).catch((error) => {console.log(error+'  getting an error in getting the data')})
     

}
    render(){
        console.log('this.state.deviceData', this.state.deviceData)
        return(
           /* <Container>
            <Grid md={12} item>
            {this.state.deviceData.map(obj=>
                (
                    <Grid key={obj.id}>
                    {obj.name}
                    </Grid>
                )
                
                )}
            </Grid>
            
            
            
            
            </Container>*/
            <Container>
            <Grid md={12} item >
            <TableContainer>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                  <StyledTableCell align="right">Calories</StyledTableCell>
                  <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                  <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                  <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.device.map((obj) => (
                  <StyledTableRow key={obj.name}>
                    <StyledTableCell component="th" scope="obj">
                      {obj.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{obj.calories}</StyledTableCell>
                    <StyledTableCell align="right">{obj.fat}</StyledTableCell>
                    <StyledTableCell align="right">{obj.carbs}</StyledTableCell>
                    <StyledTableCell align="right">{obj.protein}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
            </Grid>
            </Container>
        
        )
    }


}