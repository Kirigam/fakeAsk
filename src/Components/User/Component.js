import React from 'react';

const UserInfo = ({user}) => {
    return <React.Fragment>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
            </React.Fragment>
}

export default UserInfo;