import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, TextField, Checkbox,
  IconButton, Button, Input, Grid, Box
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import jsonData from './data.json';
import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useDispatch } from 'react-redux';
import { addInspection } from '../redux/actions/inspectionActions';
import { useHistory } from 'react-router-dom';
import FileBase from 'react-file-base64';




const Inspection = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const Numero = Date.now()
  const [items, setItems] = useState(jsonData);
  const [Telephone, setTelephone] = useState(0);
  const [Nom, setNom] = useState('');
  const [Prenom, setPrenom] = useState('');
  const [Adresse, setAdresse] = useState('');
  const [Ville, setVille] = useState('');
  const [CodePostal, setCodePostal] = useState('');
  const [Inespecteur, setInespecteur] = useState('');
  const [DateInspection, setDateInspection] = useState(new Date());
  const [Emplacement, setEmplacement] = useState('');
  const [Palan, setPalan] = useState('');
  const [Model, setModel] = useState('');
  const [Chaine, setChaine] = useState('');
  const [Capacite, setCapacite] = useState('');
  const [Serie, setSerie] = useState('');
  const [Manufacturier, setManufacturier] = useState('');

  const [step , setStep] = useState(1) ;


  const handlePostInspection = () => {

    const inspectionData = {
      Numero,
      Telephone,
      Nom,
      Prenom,
      Adresse,
      Ville,
      CodePostal,
      Inespecteur,
      DateInspection,
      Emplacement,
      Palan,
      Model,
      Chaine,
      Capacite,
      Serie,
      Manufacturier,

      inspectionItems: items.map(item => ({
        id: item.id,
        itemName: item.itemName,
        description: item.description,
        imageUrl: item.imageUrl,
        chariot: item.chariot,
        pont: item.pont,
        palan: item.palan
      })),
    };
    try {
      dispatch(addInspection(inspectionData));
      history.push('/inspection');
    } catch (error) {
      // More informative error handling
      console.error("Error submitting inspection:", error.message);
      // Consider displaying an error message to the user
    }


  };


  const handleCheckboxChange = (index, field) => (event) => {
    const updatedItems = [...items];
    updatedItems[index][field] = event.target.checked;
    setItems(updatedItems);
  };

  const handleDescriptionChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index].description = value;
    setItems(updatedItems);
  }

  const currentItems = items.slice(10 * (step - 2), step === 6 ? items.length : 10 * (step-1));





  return (
    <div>
      <Box display={"flex"} justifyContent={"space-between"} marginBottom={"40px"}>.
        <Box style={{display : "flex", justifyContent:"center", width : "100%"}}>
          <Button onClick={() => setStep(step-1)} sx={{ marginRight  : "auto", width: '30%' , height :"40px" }} disabled={step === 1 ? true : false} className='SubmitButton' ><h3>Previous</h3></Button>
        </Box>
        <h2> Inspection </h2>
        <Box style={{display : "flex", justifyContent:"center", width : "100%"}}>
          <Button onClick={() =>  step === 6 ?  handlePostInspection() : setStep(step+1)} sx={{ marginLeft  : "auto", width: '30%' , height :"40px" }} className='SubmitButton' ><h3>{step === 6 ? "Save" : "Next"}</h3></Button>
        </Box>
      </Box>
        {step === 1 && (
        <Grid container spacing={2}>
        <Grid item xs={6} sm={6}>
          <TextField label="Numero De Commande" variant="outlined" disabled fullWidth />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            type='number'
            onChange={(e) => setTelephone(e.target.value)}
            label="Telephone"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            onChange={(e) => setNom(e.target.value)}
            label="Nom"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            onChange={(e) => setPrenom(e.target.value)}
            label="Prenom"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            onChange={(e) => setAdresse(e.target.value)}
            label="Adresse"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            onChange={(e) => setVille(e.target.value)}
            label="Ville"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            onChange={(e) => setCodePostal(e.target.value)}
            label="Code Postal"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            onChange={(e) => setInespecteur(e.target.value)}
            label="Inspecté par"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              sx={{ width: "100%" }}
              label="Date de l'inspection"
              value={DateInspection}
              onChange={(newValue) => { setDateInspection(newValue) }}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            onChange={(e) => setEmplacement(e.target.value)}
            label="Emplacement"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            onChange={(e) => setPalan(e.target.value)}
            label="Palan"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            onChange={(e) => setModel(e.target.value)}
            label="Model"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            onChange={(e) => setChaine(e.target.value)}
            label="Chaine"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            onChange={(e) => setCapacite(e.target.value)}
            label="Capacité"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            onChange={(e) => setSerie(e.target.value)}
            label="Serie"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            onChange={(e) => setManufacturier(e.target.value)}
            label="Manufacturier"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
        )}
      { (step !== 1 ) ? (
        <TableContainer style={{marginTop :"25px"}} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Items</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Chariot</TableCell>
            <TableCell>Pont</TableCell>
            <TableCell>Palan</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {currentItems.map((item, index) => (
            <TableRow style={{ '&:hover': { backgroundColor: 'transparent' } }} key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.itemName}</TableCell>
              <TableCell>
                <TextField
                  value={item.description}
                  onChange={(e) => handleDescriptionChange(item.id - 1, e.target.value)}
                  fullWidth
                />
              </TableCell>
              <TableCell>
                {item.imageUrl && <img src={item.imageUrl} alt={item.itemName} width="50" />}
                <FileBase
                type="file"
                multiple={false}
                onDone={({base64}) => setItems(items.map((item, i) => i === index ? {...item, imageUrl: base64} : item))}
              />
              </TableCell>
              <TableCell><Checkbox checked={item.chariot} onChange={handleCheckboxChange(item.id -1 , 'chariot')} /></TableCell>
              <TableCell><Checkbox checked={item.pont} onChange={handleCheckboxChange(item.id -1, 'pont')} /></TableCell>
              <TableCell><Checkbox checked={item.palan} onChange={handleCheckboxChange(item.id -1, 'palan')} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    ) : ""}


    </div>
  )
}

export default Inspection