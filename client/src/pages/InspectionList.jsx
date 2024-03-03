import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
import "./InpectionList.css"
import { deleteInspection } from '../redux/actions/inspectionActions';
import { useDispatch } from 'react-redux';


const InspectionList = () => {
	  const dispatch = useDispatch();
	const [inspections, setInspections] = useState([])
	const url = 'http://localhost:5000/inspections'

  useEffect(() => {
    // Use the useEffect hook to fetch data when the component mounts
    axios.get(url).then((response) => {
      setInspections(response.data);
    });
  }, []);

  const handleDelete = (inspectionId) => {
	dispatch(deleteInspection(inspectionId));
	window.location.reload() // Dispatch the action
};




  return (
    <div>
			<Box>

			<Box style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', width: "100%" }}>
				<h2>Inspections</h2>
				<Link to="/inspection-add" style={{ width : "auto" ,textDecoration: 'none',marginLeft: "auto" }}>
					<Button className='SubmitButton'>
						<h3>Add item</h3>
					</Button>
				</Link>
			</Box>
			</Box>
			<Box>
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>
									<h3>
									Numero
									</h3>
								</TableCell>
								<TableCell>
									<h3>
									Telephone
									</h3>
								</TableCell>
								<TableCell>
									<h3>
									Nom
									</h3>
								</TableCell>
								<TableCell>
									<h3>
									Prenom
									</h3>
								</TableCell>
								<TableCell>
									<h3>
									Adresse
									</h3>
								</TableCell>
								<TableCell>
									<h3>
									Ville
									</h3>
								</TableCell>
								<TableCell>
									<h3>
									CodePostal
									</h3>
								</TableCell>
								<TableCell>
									<h3>
									Inespecteur
									</h3>
								</TableCell>
								<TableCell>
									<h3>
									DateInspection
									</h3>
								</TableCell>
								<TableCell>
									<h3>
										Actions
									</h3>
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{inspections.map((inspection) => (
								<TableRow key={inspection._id}>
									<TableCell>{inspection.Numero}</TableCell>
									<TableCell>{inspection.Telephone}</TableCell>
									<TableCell>{inspection.Nom}</TableCell>
									<TableCell>{inspection.Prenom}</TableCell>
									<TableCell>{inspection.Adresse}</TableCell>
									<TableCell>{inspection.Ville}</TableCell>
									<TableCell>{inspection.CodePostal}</TableCell>
									<TableCell>{inspection.Inespecteur}</TableCell>
									<TableCell>{inspection.DateInspection}</TableCell>
									<TableCell>
										<Box display="flex" justifyContent={"space-evenly"} >
											<Button onClick={() => handleDelete(inspection._id)} startIcon={<DeleteForeverRoundedIcon />} />
											<Link
												to={{
													pathname: `/inspection-print/${inspection._id}`,
													state: { inspectionData: inspection }
												}}
											>
											<Button startIcon={<LocalPrintshopRoundedIcon />} />
											</Link>
										</Box>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</div>
  )
}

export default InspectionList