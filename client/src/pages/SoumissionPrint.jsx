import { Box, TableContainer, TableRow, TableCell, TableHead, TableBody, Table, Button, Grid } from '@mui/material';
import React, { useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import logo from "../assets/images/logo.png";
import { useReactToPrint } from 'react-to-print';
import "./InspectionPrint.css";

const SoumissionPrint = ({soumissionData}) => {

    const SoumissionRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => SoumissionRef.current,
      });

      const { state } = useLocation();




  return (
    <div>SoumissionPrint

        <Box style={{display : "flex", justifyContent:"center", width : "100%"}}>
            <Button onClick={handlePrint} sx={{ width: '30%' , height :"40px" }} className='SubmitButton' ><h3>Print</h3></Button>
        </Box>

        <Box  className="inspectionprintcontainer">
            <Box style={{padding :"40px"}} ref={SoumissionRef}>
            <Box display={"flex"} alignItems={"center"} marginBottom={"50px"} justifyContent={"space-between"} >
                <img src={logo} style={{height:"6rem"}} alt="" />
                <Box display={"flex"} flexDirection={"column"} alignItems={"end"} >
                    <h4>105-71 Gaston-Dumoulin</h4>
                    <h4>Blainville, Québec, J7C 6B4</h4>
                    <h4>Telephone: 450-833-0724 </h4>
                </Box>
            </Box>
            <Grid style={{padding : "15px", marginBottom:"50px"}} container spacing={2}>
                <Grid item xs={6} sm={6}>
                    <Box display={"flex"} flexDirection={"column"}>
                    <h2>From :</h2>
                    <Box display={"flex"} marginTop={"25px"} gap={"10px"} alignItems={"center"}>
                        <h3 style={{width : "100px"}} >Name:</h3>
                        <h3>{state.soumissionData.sender.businessName}</h3>
                    </Box>
                    <Box display={"flex"} marginTop={"25px"} gap={"10px"} alignItems={"center"}>
                        <h3 style={{width : "100px"}} >Phone:</h3>
                        <h3>{state.soumissionData.sender.telephone}</h3>
                    </Box>
                    <Box display={"flex"} marginTop={"25px"} gap={"10px"} alignItems={"center"}>
                        <h3 style={{width : "100px"}} >Adresse:</h3>
                        <h3>{state.soumissionData.sender.address}</h3>
                    </Box>
                    <Box display={"flex"} marginTop={"25px"} gap={"10px"} alignItems={"center"}>
                        <h3 style={{width : "100px"}} >Email:</h3>
                        <h3>{state.soumissionData.sender.email}</h3>
                    </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Box display={"flex"} flexDirection={"column"}>
                    <h2>Billing to :</h2>
                    <Box display={"flex"} marginTop={"25px"} gap={"10px"} alignItems={"center"}>
                        <h3 style={{width : "100px"}} >Name:</h3>
                        <h3>{state.soumissionData.receiver.businessName}</h3>
                    </Box>
                    <Box display={"flex"} marginTop={"25px"} gap={"10px"} alignItems={"center"}>
                        <h3 style={{width : "100px"}} >Phone:</h3>
                        <h3>{state.soumissionData.receiver.telephone}</h3>
                    </Box>
                    <Box display={"flex"} marginTop={"25px"} gap={"10px"} alignItems={"center"}>
                        <h3 style={{width : "100px"}} >Adresse:</h3>
                        <h3>{state.soumissionData.receiver.address}</h3>
                    </Box>
                    <Box display={"flex"} marginTop={"25px"} gap={"10px"} alignItems={"center"}>
                        <h3 style={{width : "100px"}} >Email:</h3>
                        <h3>{state.soumissionData.receiver.email}</h3>
                    </Box>
                    </Box>
                </Grid>
            </Grid>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <h3>
                                Name
                                </h3>
                            </TableCell>
                            <TableCell>
                                <h3>
                                Desciption
                                </h3>
                            </TableCell>
                            <TableCell>
                                <h3>
                                UnitPrice
                                </h3>
                            </TableCell>
                            <TableCell>
                                <h3>
                                Qty
                                </h3>
                            </TableCell>
                            <TableCell>
                                <h3>
                                Price
                                </h3>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {state.soumissionData.items.map((item) => (
                            <TableRow key={item._id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{(item.description)}</TableCell>
                                <TableCell>${(item.unitPrice).toFixed(2)}</TableCell>
                                <TableCell>{item.qty}</TableCell>
                                <TableCell>${(item.unitPrice * item.qty).toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell colSpan={4} >
                                subtotal
                            </TableCell>
                            <TableCell>
                                ${(state.soumissionData.subtotal).toFixed(2)}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={3} >
                                Tax
                            </TableCell>
                            <TableCell>
                                %{(state.soumissionData.taxRate)}
                            </TableCell>
                            <TableCell>
                                ${((state.soumissionData.total) - (state.soumissionData.subtotal)).toFixed(2)}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={4} >
                                Total
                            </TableCell>
                            <TableCell>
                                ${(state.soumissionData.total).toFixed(2)}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            </Box>
        </Box>
    </div>
  )
}

export default SoumissionPrint