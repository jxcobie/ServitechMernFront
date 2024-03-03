import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Certificat from '../pages/Certificat'
import Soumission from '../pages/Soumission'
import Inspection from '../pages/Inspection'
import Facture from '../pages/Facture'
import InspectionList from '../pages/InspectionList'
import InspectionPrint from '../pages/InspectionPrint'
import SoumissionList from '../pages/SoumissionList'
import SoumissionPrint from '../pages/SoumissionPrint'



const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/certificat' component={Certificat}/>
            <Route path='/soumission-add' component={Soumission}/>
            <Route path='/soumission' component={SoumissionList}/>
            <Route path='/soumission-print/:id' component={SoumissionPrint}/>
            <Route path='/inspection' component={InspectionList}/>
            <Route path='/inspection-add' component={Inspection}/>
            <Route path='/inspection-print/:id' component={InspectionPrint}/>
            <Route path='/facture' component={Facture}/>
        </Switch>
    )
}

export default Routes
