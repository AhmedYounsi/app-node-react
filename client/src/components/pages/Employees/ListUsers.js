
import React, { useState, useEffect } from 'react';
import { getUsers } from '../../../actions/user';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';



export const ListUsers = ({ getUsers, user: { users } }) => {

    useEffect(() => {
        getUsers();
    }, []);

    const [Sorted, setSorted] = useState(null);
    const [UserFilter, setUserFilter] = useState([users]);
    const [Data, setData] = useState([users]);

    const [Selected, setSelected] = useState([]);





    const SortBy = (att) => {
        setSorted(att);
        if (!Sorted)
            setUserFilter((el) => [
                ...el.sort((a, b) => (a[att] > b[att] ? 1 : b[att] > a[att] ? -1 : 0)),
            ]);
        else {
            setUserFilter((el) => [
                ...el.sort((a, b) => (a[att] < b[att] ? 1 : b[att] < a[att] ? -1 : 0)),
            ]);
            setSorted(null);
        }
    };
    const SortIcon = (att) => {
        if (att != Sorted) return <i className="fas fa-sort-amount-down"></i>;
        else {
            return <i className="fas fa-sort-amount-up"></i>;
        }
    };


    const Search = (e) => {
        const text = e.target.value.toLocaleLowerCase();
        var arr = Data.filter((el) => {
            return (
                el.name ||
                el.lastName
            );
        });

        setUserFilter(arr);
    };


    const SelectRow = (_id) => {
        let arr = [...Selected];
        const i = arr.indexOf(_id);
        if (i == -1) {
            arr.push(_id);
        } else {
            setSelectedAllArr(false)
            arr.splice(i, 1);
        }
        setSelected(arr);
    };

    const click = (_id) => {
        const el = document.getElementById(_id);
        SelectRow(_id);
    };





    return (
        <div className="grid crud-demo">
            <div className="col-12">
                <div className="card">

                    <table className="table">
                        <thead>
                            <tr>

                                <th scope="col" onClick={() => SortBy("name")}><div className="att">
                                    {SortIcon("Name")}Name
                                </div></th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Department</th>
                                <th scope="col">post</th>
                                <th scope="col">tel</th>

                            </tr>
                        </thead>

                        {
                            <tbody>
                                {
                                    users.reverse().map((user) => (
                                        <tr
                                            onClick={() => click(user._id)}
                                            key={user._id}
                                        >

                                            <th scope="row">
                                                {user.name}
                                            </th>
                                            <th> {user.lastName}</th>
                                            <th >
                                                {user.departement}

                                            </th>
                                            <th>
                                                {user.post}
                                            </th>
                                            <th>{user.tel}</th>

                                        </tr>
                                    ))}
                            </tbody>
                        }
                    </table>


                </div>
            </div>
        </div>
    );
}

ListUsers.propTypes = {
    getUsers: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.user
});

export default connect(
    mapStateToProps,
    { getUsers }
)(ListUsers);
