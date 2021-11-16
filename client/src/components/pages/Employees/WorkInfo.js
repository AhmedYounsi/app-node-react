import React, { useState, useEffect } from 'react'
import { Dropdown } from 'primereact/dropdown';
import { getUsers } from '../../../actions/user';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';



const WorkInfo = (props) => {


    const getUsers = props.getUsers
    const user = props.user

    useEffect(() => {
        getUsers()
    }, [])



    const [Data, setData] = useState([user]);
    const [reprtedto, setreprtedto] = useState([])


    useEffect(() => {

        Label()
    }, [Data])
    const officeItems = [
        { label: 'Centre Urbain Nord Tunisie', value: 'Centre Urbain Nord Tunisie' },
        { label: 'Tozeur Tunisie', value: 'Tozeur Tunisie' },
        { label: 'France', value: 'France' }
    ];

    const departmentItems = [
        { label: 'RH', value: 'RH' }
    ];

    const contractItems = [
        { label: 'CDD', value: 'CDD' },
        { label: 'CDI', value: 'CDI' },
        { label: 'CVP', value: 'CVP' }

    ];

    const postItems = [
        { label: 'Ingenieur', value: 'Ingenieur' }

    ];



    const Label = () => {
        const arr = []
        Data[0].users.map(el => {

            arr.push({ label: el.name, value: el.name })
        }
        )
        setreprtedto(arr)
    }






    return (


        <form>


            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col">
                    <label htmlFor="office">Offfice</label>
                    <Dropdown
                        value={props.Office}
                        options={officeItems} onChange={(e) => props.HandleOffice(e.target.value)} placeholder="Select office" />

                </div>

                <div className="p-field p-col">
                    <label htmlFor="department">Department</label>
                    <Dropdown
                        value={props.Dep}
                        options={departmentItems} onChange={(e) => props.HandleDep(e.target.value)} placeholder="Select Department" />
                </div>

            </div>

            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col">
                    <label htmlFor="post">Post Title</label>
                    <Dropdown
                        value={props.Post}
                        options={postItems}
                        onChange={(e) => props.HandlePost(e.target.value)}
                        placeholder="Select Post Title" />

                </div>

                <div className="p-field p-col">
                    <label htmlFor="contract"> Contract Type</label>
                    <Dropdown options={contractItems}
                        value={props.Contrat}
                        onChange={(e) => props.HandleContract(e.target.value)}
                        placeholder="Select Type Contract " />
                </div>

            </div>

            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col">
                    <label htmlFor="office">Reported To</label>
                    <Dropdown options={reprtedto}
                        value={props.Report}
                        onChange={(e) => props.HandleReported(e.target.value)}
                        placeholder="Reported To" />

                </div>

            </div>


        </form>

    );
}


WorkInfo.propTypes = {
    getUsers: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.user
});

export default connect(
    mapStateToProps,
    { getUsers }
)(WorkInfo);
