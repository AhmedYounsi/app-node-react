import React, { useState } from 'react'
import Lottie from 'react-lottie-player'
import employees from "../../../assets/animation/employees.json";
import team from "../../../assets/animation/team.json";
import { TabView, TabPanel } from 'primereact/tabview';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {
    CRow,
    CCol,
    CContainer,

} from '@coreui/react'
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
const ListUsers = React.lazy(() => import('./ListUsers'))









const Employees = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (

        <CContainer lg style={{ minHeight: '100vh' }}>


            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel header="Personal">
                    <CRow>
                        <CCol sm={10}>
                            <Lottie
                                loop
                                animationData={employees}
                                play
                                style={{ width: 200, height: 200 }}
                            />
                            <h4>Employees</h4>
                            <p>Here are all the employees at your company,including terminated ones. </p>
                            <hr
                                style={{
                                    color: 'danger',
                                    backgroundColor: 'primary',
                                    height: 5
                                }}
                            />
                        </CCol>
                        <CCol sm={2}>
                            <Link to='/employees/newUser'>
                                <Button label="New Employe" icon="pi pi-plus" iconPos="left"></Button></Link>
                        </CCol>

                    </CRow>
                    <ListUsers />
                    <CRow>

                    </CRow>
                </TabPanel>
                <TabPanel header="Teams">
                    <CRow>
                        <CCol sm={10}>
                            <Lottie
                                loop
                                animationData={team}
                                play
                                style={{ width: 200, height: 200 }}
                            />
                            <h4>Configure your teams</h4>
                            <p>Create teams to group employees and filter data in calendars or reports </p>

                        </CCol>
                        <CCol sm={2}>
                            <Button label="New Team" icon="pi pi-plus" iconPos="left"></Button>
                        </CCol>
                    </CRow>
                </TabPanel>

            </TabView>
        </CContainer>

    )

}


export default Employees
