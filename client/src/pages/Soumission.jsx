import {
  Table, TableBody, TableCell,Box,FormControl , TableContainer,
  TableHead, TableRow, TextField,
   Button, Input, Grid
} from '@mui/material';
import React, { useEffect, useState } from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import "./Soumission.css"
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { useDispatch } from 'react-redux';
import { addSoumission } from '../redux/actions/soumissionActions';
import { useHistory } from 'react-router-dom';

const Soumission = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [soumission, setSoumission] = useState({ });

  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    setItems([...items, { name: "", description: "", unitPrice: 1, qty: 0, total: 0 }]);
  };

  const handleItemChange = (index, field, value) => {
    setItems(prevItems => prevItems.map((item, i) =>
      i === index ? {...item, [field]: value} : item
    ));
  };

  const calculatetotal = () => {
    let total = 0;
    items.forEach(item => {
      total += item.qty * item.unitPrice;
    });
    return total;
  }

  const subtotal = calculatetotal();

  function calculatetax(subtotal,tax) {
    return subtotal * (1 + tax/100);
  }
  const [tax, setTax] = useState(15)  ;

  const total = calculatetax(subtotal,tax);



  const handleSubmit = () => {

      console.log(soumission);
      try {
        dispatch(addSoumission(soumission));
        history.push('/soumission');
      } catch (error) {
        console.log(error);
      }

  };

  const [title , setTitle] = useState("")


  const [fromInfo, setFromInfo] = useState({
    businessName: "",
    telephone: "",
    address: "",
    email: "",


  })

  const [toInfo, setToInfo] = useState({
    businessName: "",
    telephone: "",
    address: "",
    email: "",


  })

  const [dates,setDates] = useState({
    soumissionDate: new Date(),
    paymentDate: new Date()
  })

  const handleDelete = (index) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index)); // Correct filtering
  }

  useEffect(() => {
    setSoumission({
      ...soumission,
      title: title,
      number: Date.now(),
      sender: {...fromInfo},
      receiver: {...toInfo},
      invoiceDate: dates.soumissionDate,
      dueDate: dates.paymentDate,
      status: "pending",
      items: items,
      subtotal: subtotal,
      taxRate: tax,
      total: total,

    });
    console.log(soumission);
  }, [title, fromInfo.name, fromInfo.email, fromInfo.address, fromInfo.phone, toInfo.name, toInfo.email, toInfo.address, toInfo.phone, dates.soumissionDate, dates.paymentDate, items, subtotal, tax, total]);



  return (
    <div>
      <h3 style={{marginBottom : "25px"}}>
        Soumission
      </h3>
      <Box padding={"25px"} boxShadow={"0 5px 25px #00000019"} borderRadius={"30px"} display={"flex"} flexDirection={"column"} justifyContent={"space-around"} >
      <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={" 0 15px"} marginTop={"50px"} marginBottom={"70px"}>
        <h1 style={{ fontSize : "3rem"}} >SERVITECH</h1>
        <TextField
          label="Soumission Title"
          variant="outlined"
          style={{ width: '35%'}}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Box>

        <Grid style={{padding : "15px"}} container spacing={2}>
          <Grid item xs={6} sm={6}>
            <Box display={"flex"} flexDirection={"column"}>
              <h2>From :</h2>
              <Box display={"flex"} marginTop={"25px"} gap={"10px"} alignItems={"center"}>
                <h3 style={{width : "100px"}} >Name:  </h3>
                <TextField onChange={(e) => setFromInfo({ ...fromInfo, businessName: e.target.value })} label="Business Name" variant='outlined' />
              </Box>
              <Box display={"flex"} marginTop={"5px"} gap={"10px"} alignItems={"center"}>
                <h3 style={{width : "100px"}} >Email:  </h3>
                <TextField onChange={(e) => setFromInfo({...fromInfo, email : e.target.value})} label="example@business.xyz" variant='outlined' />
              </Box>
              <Box display={"flex"} marginTop={"5px"} gap={"10px"} alignItems={"center"}>
                <h3 style={{width : "100px"}} >Address:  </h3>
                <TextField onChange={(e) => setFromInfo({...fromInfo, address : e.target.value})} label="123 street xyz" variant='outlined' />
              </Box>
              <Box display={"flex"} marginTop={"5px"} gap={"10px"} alignItems={"center"}>
                <h3 style={{width : "100px"}} >Phone:  </h3>
                <TextField onChange={(e) => setFromInfo({...fromInfo, telephone : e.target.value})} label="(123) 456 789" variant='outlined' />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Box display={"flex"} flexDirection={"column"}>
              <h2>Billing to :</h2>
              <Box display={"flex"} marginTop={"25px"} gap={"10px"} alignItems={"center"}>
                <h3 style={{width : "100px"}} >Name:  </h3>
                <TextField onChange={(e) => setToInfo({...toInfo, businessName : e.target.value})} label="Business Name" variant='outlined' />
              </Box>
              <Box display={"flex"} marginTop={"5px"} gap={"10px"} alignItems={"center"}>
                <h3 style={{width : "100px"}} >Email:  </h3>
                <TextField onChange={(e) => setToInfo({...toInfo, email : e.target.value})} label="example@business.xyz" variant='outlined' />
              </Box>
              <Box display={"flex"} marginTop={"5px"} gap={"10px"} alignItems={"center"}>
                <h3 style={{width : "100px"}} >Address:  </h3>
                <TextField onChange={(e) => setToInfo({...toInfo, address : e.target.value})} label="123 street xyz" variant='outlined' />
              </Box>
              <Box display={"flex"} marginTop={"5px"} gap={"10px"} alignItems={"center"}>
                <h3 style={{width : "100px"}} >Phone:  </h3>
                <TextField onChange={(e) => setToInfo({...toInfo, telephone : e.target.value})} label="(123) 456 789" variant='outlined' />
              </Box>
            </Box>
          </Grid>
          <div style={{margin :" 30px 40px" ,width:"100%" , backgroundColor : "black" , opacity: "0.1" , height : "2px", borderRadius :"2px"}} />
          <Box display={"flex"} width={"100%"} justifyContent={'space-between'} paddingX={"30px"} alignItems={"center"}>
            <FormControl disabled variant="standard">
              <Input id="Soumission-number" defaultValue="Soumission Number" />
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date de la soumission"
                value={dates.soumissionDate}
                onChange={(e) => setDates({...dates, soumissionDate : e})}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date de la paiment"
                value={dates.paymentDate}
                onChange={(e) => setDates({...dates, paymentDate : e})}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Box>
          <div style={{margin :" 30px 40px" ,width:"100%" , backgroundColor : "black" , opacity: "0.1" , height : "2px", borderRadius :"2px"}} />
          <TableContainer style={{margin :" 0 25px" ,marginTop: "25px" }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Unit</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Price</TableCell>
                    </TableRow>
                </TableHead>

                    {items.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>
                              <Input
                              onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                              value={item.name} />
                            </TableCell>
                            <TableCell>
                             <Input
                              onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                              value={item.description} />
                            </TableCell>
                            <TableCell>
                            <Input
                              type='number'
                              startAdornment="$"
                              onChange={(e) => handleItemChange(index, 'unitPrice', e.target.value)}
                              value={item.unitPrice} />
                            </TableCell>
                            <TableCell>
                            <Input
                              type='number'
                              onChange={(e) => handleItemChange(index, 'qty', e.target.value)}
                              value={item.qty} />
                            </TableCell>
                            <TableCell >
                              <Box style={{width : "100%" , display : "flex", alignItems: "center", justifyContent : "space-between"}}>
                                {"$"+(item.qty * item.unitPrice).toFixed(2)}
                                <DeleteRoundedIcon className='deletebutton' onClick={() => handleDelete(index)} style={{marginLeft : "30px" , height:"45px" ,width : "35px" , borderRadius : "7px" ,padding : "5px" , cursor : "pointer", boxShadow : " 0 3px 5px #00000019"}} />
                              </Box>
                            </TableCell>
                        </TableRow>
                    ))}

                  <TableBody>
                    <TableRow >
                      <TableCell sx={{ textAlign: 'center' }} colSpan={5}>
                        <Box style={{display : "flex", justifyContent:"center", width : "100%"}}>
                          <Button onClick={() => handleAddItem()} sx={{ width: '25%' }} className='SubmitButton' ><h3>Add item</h3></Button>
                        </Box>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell  colSpan={4}>Subtotal</TableCell>


                        <TableCell>
                          ${subtotal.toFixed(2)}
                        </TableCell>
                    </TableRow>


                    <TableRow>
                        <TableCell  colSpan={3}>Tax</TableCell>

                        <TableCell>
                          <Input type='number'
                          startAdornment="%"
                          onChange={(e) => setTax(e.target.value)} />
                        </TableCell>
                        <TableCell>
                          ${(subtotal * (tax/100)).toFixed(2)}
                        </TableCell>
                    </TableRow>


                    <TableRow>
                      <TableCell  colSpan={2}>Total</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>${total.toFixed(2)}</TableCell>
                    </TableRow>


                </TableBody>
            </Table>
        </TableContainer>
        </Grid>
        <Button onClick={handleSubmit} >
          <h3>Submit</h3>
        </Button>
      </Box>


    </div>
  )
}

export default Soumission