import { Box, TableContainer, TableRow, TableCell, TableHead, TableBody, Table, Button } from '@mui/material';
import React, { useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import logo from "../assets/images/logo.png";
import "./InspectionPrint.css";
import { useReactToPrint } from 'react-to-print';



const InspectionPrint = ({inspectionData}) => {

    const InspectRef = useRef();

    const handlePrint = useReactToPrint({
      content: () => InspectRef.current,
    });

    const { state } = useLocation();



    const inspectionDate = new Date(state.inspectionData.DateInspection);
    if (!state || !state.inspectionData) {
        return <div>Inspection data not found.</div>;
    }
    return (
    <div className="print-container">
        <Box style={{display : "flex", justifyContent:"center", width : "100%"}}>
        <Button onClick={handlePrint} sx={{ width: '30%' , height :"40px" }} className='SubmitButton' ><h3>Print</h3></Button>
        </Box>
        <Box ref={InspectRef} className="inspectionprintcontainer">
            <Box display={"flex"} alignItems={"center"} marginBottom={"50px"} justifyContent={"space-between"} >
                <img src={logo} style={{height:"6rem"}} alt="" />
                <Box display={"flex"} flexDirection={"column"} alignItems={"end"} >
                    <h4>105-71 Gaston-Dumoulin</h4>
                    <h4>Blainville, Québec, J7C 6B4</h4>
                    <h4>Telephone: 450-833-0724 </h4>
                </Box>
            </Box>
            <h1 style={{textAlign: "center",fontSize : "2.5rem", marginBottom :"30px"}} >INSPECTION</h1>
            <Box marginBottom={"20px"} display={"flex"} padding={"20px"} justifyContent={"space-between"} alignContent={"start"}>
                <Box>
                    <h3 style={{fontWeight :"500"}} >Nom: <span style={{marginLeft :"1rem"}} >  {state.inspectionData.Nom} </span> </h3>
                    <h3 style={{fontWeight :"500"}} >Prénom: <span style={{marginLeft :"1rem"}} > {state.inspectionData.Prenom} </span></h3>
                    <h3 style={{fontWeight :"500"}} >Telephone: <span style={{marginLeft :"1rem"}} > {state.inspectionData.Telephone}</span></h3>
                    <h3 style={{fontWeight :"500"}} >Adresse: <span style={{marginLeft :"1rem"}} > {state.inspectionData.Adresse}</span></h3>
                    <h3 style={{fontWeight :"500"}} >Ville: <span style={{marginLeft :"1rem"}} > {state.inspectionData.Ville}</span></h3>
                    <h3 style={{fontWeight :"500"}} >Code Postal: <span style={{marginLeft :"1rem"}} > {state.inspectionData.CodePostal}</span></h3>
                    <h3 style={{fontWeight :"500"}} >Date d'inspection: <span style={{marginLeft :"1rem"}} >{inspectionDate.toLocaleDateString()}</span></h3>
                </Box>
                <Box width={"50%"}>
                    <h3 style={{fontWeight :"500"}} >Emplacement: <span style={{marginLeft :"1rem"}} > {state.inspectionData.Emplacement}</span></h3>
                    <h3 style={{fontWeight :"500"}} >Palan: <span style={{marginLeft :"1rem"}} > {state.inspectionData.Palan}</span></h3>
                    <h3 style={{fontWeight :"500"}} >Model: <span style={{marginLeft :"1rem"}} > {state.inspectionData.Model}</span></h3>
                    <h3 style={{fontWeight :"500"}} >Chaine: <span style={{marginLeft :"1rem"}} > {state.inspectionData.Chaine}</span></h3>
                    <h3 style={{fontWeight :"500"}} >Capacite: <span style={{marginLeft :"1rem"}} > {state.inspectionData.Capacite}</span></h3>
                    <h3 style={{fontWeight :"500"}} >Serie: <span style={{marginLeft :"1rem"}} > {state.inspectionData.Serie}</span></h3>
                    <h3 style={{fontWeight :"500"}} >Manufacturier: <span style={{marginLeft :"1rem"}} > {state.inspectionData.Manufacturier}</span></h3>
                </Box>
            </Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Item Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Chariot</TableCell>
                            <TableCell>Pont</TableCell>
                            <TableCell>Palan</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {state.inspectionData.inspectionItems.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.itemName}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>
                                {item.imageUrl && <img src={item.imageUrl} alt={item.itemName} width="50" />}
                                </TableCell>
                                <TableCell>{item.chariot ? <div className='circlefilled' /> : <div className='circleempty' /> }</TableCell>
                                <TableCell>{item.pont ?  <div className='circlefilled' /> : <div className='circleempty' /> }</TableCell>
                                <TableCell>{item.palan ?  <div className='circlefilled' /> : <div className='circleempty' /> }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    </div>
  );
};

export default InspectionPrint;