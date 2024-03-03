import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
import "./InpectionList.css"
import { useDispatch } from 'react-redux';
import { deleteSoumission } from '../redux/actions/soumissionActions';


const SoumissionList = () => {
	const dispatch = useDispatch();
	const [soumissions, setsoumissions] = useState([])
	const url = 'http://localhost:5000/soumissions'

  useEffect(() => {
    // Use the useEffect hook to fetch data when the component mounts
    axios.get(url).then((response) => {
      setsoumissions(response.data);
    });
  }, []);

  const handleDelete = (soumissionId) => {
	dispatch(deleteSoumission(soumissionId));
	window.location.reload() // Dispatch the action
};




  return (
    <div>
			<Box>

			<Box style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', width: "100%" }}>
				<h2>soumissions</h2>
				<Link to="/soumission-add" style={{ width : "auto" ,textDecoration: 'none',marginLeft: "auto" }}>
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
									Name
									</h3>
								</TableCell>
								<TableCell>
									<h3>
									Email
									</h3>
								</TableCell>
								<TableCell>
									<h3>
									Adresse
									</h3>
								</TableCell>
								<TableCell>
									<h3>
									Phone
									</h3>
								</TableCell>
								<TableCell>
									<h3>
									Date de paiment
									</h3>
								</TableCell>
								<TableCell>
									<h3>
									Status
									</h3>
								</TableCell>
								<TableCell>
									<h3>
									Total
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
							{soumissions.map((soumission) => (
								<TableRow key={soumission._id}>
                                    <TableCell>
                                        <h4>{soumission.number}</h4>
                                    </TableCell>
                                    <TableCell>
                                        <h4>{soumission.receiver.businessName}</h4>
                                    </TableCell>
                                    <TableCell>
                                        <h4>{soumission.receiver.email}</h4>
                                    </TableCell>
                                    <TableCell>
                                        <h4>{soumission.receiver.address}</h4>
                                    </TableCell>
                                    <TableCell>
                                        <h4>{soumission.receiver.telephone}</h4>
                                    </TableCell>
                                    <TableCell>
                                        <h4>{soumission.invoiceDate}</h4>
                                    </TableCell>
                                    <TableCell>
                                        <h4>{soumission.status}</h4>
                                    </TableCell>
                                    <TableCell>
                                        <h4>${(soumission.total).toFixed(2)}</h4>
                                    </TableCell>
									<TableCell>
										<Box display="flex" justifyContent={"space-evenly"} >
											<Button onClick={() => handleDelete(soumission._id)} startIcon={<DeleteForeverRoundedIcon />} />
											<Link
												to={{
													pathname: `/soumission-print/${soumission._id}`,
													state: { soumissionData: soumission }
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

export default SoumissionList