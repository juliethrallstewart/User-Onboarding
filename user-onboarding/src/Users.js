import React from 'react';

const Users = ({users}) => {
    return (
        <>
        <div className="user-list">
        {users.map((item) => {
                // return <p>{item.name}</p>;
                return <table>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    </tr>
                    <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    </tr>
                </table>
			})}
        </div>
        </>
    )
}

export default Users;