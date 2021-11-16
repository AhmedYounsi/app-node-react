import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {

    CCard,
    CContainer,
    CCardBody,


} from '@coreui/react'
import './StepsDemo.css'
import 'antd/dist/antd.css';
import GeneralInfo from './GeneralInfo';
import { Steps, Button, message } from 'antd';
import { createProfile } from '../../../actions/user';
const WorkInfo = React.lazy(() => import('./WorkInfo'))

import { useHistory } from "react-router-dom";




const NewUser = ({ createProfile }) => {

    let history = useHistory();

    // GeneralInfo
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Lastname, setFLastname] = useState("")
    const [Firstname, setFirstname] = useState("")
    const [Adresse, setAdresse] = useState("")
    const [BirthDay, setBirthDay] = useState("")
    const [Tel, setTel] = useState("")
    //    WorkInfo
    const [Office, setOffice] = useState("")
    const [Dep, setDep] = useState("")
    const [Post, setPost] = useState("")
    const [Contrat, setContrat] = useState("")
    const [Report, setReport] = useState("")

    const [current, setCurrent] = useState(0);



    const { Step } = Steps;

    const steps = [
        {
            title: 'General Information',
            content: <GeneralInfo
                HandleEmail={(text) => setEmail(text)}
                HandlePassword={(text) => setPassword(text)}
                HandleLastname={(text) => setFLastname(text)}
                HandleFirstName={(text) => setFirstname(text)}
                HandleAdresse={(text) => setAdresse(text)}
                HandleBirthday={(text) => setBirthDay(text)}
                HandleTel={(text) => setTel(text)}
                adresseMail={Email}

            />,
        },
        {
            title: 'Job Information ',
            content: <WorkInfo
                HandleOffice={(text) => setOffice(text)}
                HandleDep={(text) => setDep(text)}
                HandlePost={(text) => setPost(text)}
                HandleContract={(text) => setContrat(text)}
                HandleReported={(text) => setReport(text)}
                Office={Office}
                Dep={Dep}
                Post={Post}
                Contrat={Contrat}
                Report={Report}

            />,
        }

    ];



    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const SaveUser = async () => {
        const userData =
        {
            name: Firstname,
            email: Email,
            avatar: '',
            password: Password,
            lastName: Lastname,
            tel: Tel,
            address: Adresse,
            DateOfBirth: BirthDay,
            office: Office,
            departement: Dep,
            post: Post,
            reportsTo: Report,
            typeContrat: Contrat,
            from: ''

        }
        if (createProfile(userData))
            history.push("/employees");
    }

    return (
        <CContainer lg >
            <CCard>

                <CCardBody>

                    <Steps current={current}>
                        {steps.map(item => (
                            <Step key={item.title} title={item.title} />
                        ))}
                    </Steps>
                    <div >{steps[current].content}</div>
                    <div className="steps-action">
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => next()}>
                                Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary" onClick={() => {
                                message.success('Processing complete!')
                                SaveUser()
                            }}>
                                Done
                            </Button>
                        )}
                        {current > 0 && (
                            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                Previous
                            </Button>
                        )}
                    </div>




                </CCardBody>
            </CCard>
        </CContainer>
    )
}

NewUser.propTypes = {
    createProfile: PropTypes.func.isRequired
};

export default connect(
    null,
    { createProfile }
)(NewUser);




