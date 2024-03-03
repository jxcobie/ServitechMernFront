import { Box, Button, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import "./Certificat.css"
import logo from "../assets/images/logo.png"
import { useReactToPrint } from 'react-to-print';

const Certificat = () => {


  const certificatRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => certificatRef.current,
  });

  const [certifdata, setCertifdata] = useState({ mois: "", usage: "", equipement: "", capacite: "", marque: "", soit :"", ainsi : "" })


  return (
    <>
    <h2>Certificat</h2>

    <Box className="inputfields">
      <h2 style={{width :"100%", padding:"0 30px"}} >Formulaire: </h2>
      <TextField className='certifinput' onChange={ (e) => setCertifdata({...certifdata, mois: e.target.value}) } label="mois d'inspection"/>
      <TextField className='certifinput' onChange={ (e) => setCertifdata({...certifdata, usage: e.target.value}) } label="En usage Chez"/>
      <TextField className='certifinput' onChange={ (e) => setCertifdata({...certifdata, equipement: e.target.value}) } label="L'équipement"/>
      <TextField className='certifinput' onChange={ (e) => setCertifdata({...certifdata, soit: e.target.value}) } label="Soit Un"/>
      <TextField className='certifinput' onChange={ (e) => setCertifdata({...certifdata, capacite: e.target.value}) } label=" Capacité "/>
      <TextField className='certifinput' onChange={ (e) => setCertifdata({...certifdata, ainsi: e.target.value}) } label=" ainsi qu'un"/>
      <TextField className='certifinput' onChange={ (e) => setCertifdata({...certifdata, marque: e.target.value}) } label=" de marque"/>
    </Box>

    <Box style={{display : "flex", justifyContent:"center", width : "100%"}}>
      <Button onClick={handlePrint} sx={{ width: '30%' , height :"40px" }} className='SubmitButton' ><h3>Print</h3></Button>
    </Box>

    <div   className="CertificatContainer" >
      <Box ref={certificatRef} display={"flex"} flexDirection={"column"} padding="30px" >
      <Box  display={"flex"} justifyContent={"space-between"} >
        <img src={logo} alt="" />
        <Box display={"flex"} flexDirection={"column"} alignItems={"end"} justifyContent={"center"}>
          <h4>105-71 Gaston-Dumoulin</h4>
          <h4>Blainville, Québec, J7C 6B4</h4>
          <h4>Telephone: 450-833-0724 </h4>
        </Box>
      </Box>
      <Box marginX={"auto"} marginY={"70px"}>
        <h1>CERTIFICAT</h1>
      </Box>
      <Box padding={"40px"}>
        <Box display={"flex"}>
          <h2>
            Cet appareil a été inspecté au mois de{' '}
            <span>{certifdata.mois}</span>
          </h2>
        </Box>
        <Box display={"flex"}>
          <h2>
            En usage chez <span>{certifdata.usage}</span>
          </h2>
        </Box>
        <Box display={"flex"}>
          <h2>
            Nous vous émettons un certificat de conformité pour l'équipement{' '}
            <span>{certifdata.equipement}</span>&nbsp;
          </h2>
        </Box>
        <Box display={"flex"}>
          <h2>
            soit un <span>{certifdata.soit}</span>&nbsp;avec une capacité de{' '}
            <span>{certifdata.capacite}</span>
          </h2>
        </Box>
        <Box display={"flex"}>
          <h2>
            ainsi qu'un <span>{certifdata.ainsi}</span>
          </h2>
          <h2>
            &nbsp;de marque <span>{certifdata.marque}</span>
          </h2>
        </Box>
        <Box
          marginTop={"70px"}
          textAlign={"right"}
          marginBottom={"100px"}
          marginRight={"30px"}
        >
          <h2>Signature</h2>
        </Box>
      </Box>
      </Box>
    </div>

    </>
  )
}

export default Certificat