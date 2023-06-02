import {Box, Container, Grid, Typography } from '@mui/material'
import InputAmout from './components/InputAmout'
import SelectCountry from './components/SelectCountry'
import SwitchCurrency from './components/SwitchCurrency'
import { useContext, useEffect, useState} from 'react'
import { CurrencyContext } from './context/CurrencyContext'
import axios from 'axios'
import Auth from './account/Auth'

function App() {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
  } = useContext(CurrencyContext);
  const [resultCurrency, setResultCurrency] = useState(0);
  const codeFromCurrency = fromCurrency.split(" ")[1]
  const codeToCurrency = toCurrency.split(" ")[1]
  console.log(resultCurrency)
 

  useEffect(() => {
    if(firstAmount) {
      axios("https://api.freecurrencyapi.com/v1/latest", {
        params: {
          apikey: "4eGaJev4DoypdHfQbmpMNHNPXbdLkKfOlboD1Fsi",
          base_currency: codeFromCurrency,
          currencies: codeToCurrency
        }
      })
        .then(response => setResultCurrency(response.data.data[codeToCurrency]))
        .catch(error => console.log(error))
    }
  
  }, [firstAmount, fromCurrency, toCurrency])

  const boxStyles = {
    background: "#fdfdfd",
    marginTop: "10rem",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 5,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    position: "relative"
  }

  return (
      <Container maxWidth="md" sx={boxStyles}>
       <Typography variant='h5' sx={{marginBottom: "1rem"}}>
        Currency Converter & Exchange Rates
       </Typography>
       <Box sx={{textAlign: "md", marginBottom: "2rem"}} >
       <Typography variant='h10'>
        Just up to date FX rates
       </Typography>
       </Box>
       <Grid container spacing= "md" >
         <SelectCountry value={fromCurrency} setValue={setFromCurrency} label="From"/>
         <SwitchCurrency />
         <SelectCountry value={toCurrency} setValue={setToCurrency} label="To" />
       </Grid>
       <Grid sx={{marginTop: "2rem"}}>
       <InputAmout />
       </Grid>


       {firstAmount ? (
        <Box sx={{textAlign: "right", marginTop: "1rem"}}>
          <Typography>{firstAmount} {fromCurrency} =</Typography>
          <Typography variant='h5' sx={{marginTop: "15px", fontWeight:"bold"}}>{resultCurrency*firstAmount} {toCurrency}</Typography>
        </Box>

       ) : ""} 
        

      </Container>
  )
}

export default App
