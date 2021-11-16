import React, { useState } from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {

    CContainer,

} from '@coreui/react'










const Leave = () => {
    const [activeIndex, setActiveIndex] = useState(0);





    return (

        <CContainer lg style={{ minHeight: '100vh' }}>


            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel header="Pending">
                </TabPanel>
                <TabPanel header="Approved">
                </TabPanel>
                <TabPanel header="Rejected">
                </TabPanel>

            </TabView>
        </CContainer>

    )

}


export default Leave
