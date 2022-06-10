import React from "react";
import Avatar from "../atoms/Avatar/Avatar";
import "./tableStyles.css";

const Table = props => {
  const { userData } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {userData.map(user => {
          return (
            <tr key={user.id}>
              <td>
                <Avatar
                  srcImage={user.avatar}
                  altImage={`${user.first_name} img`}
                />
              </td>
              <td>
                <span className="name">{user.first_name}</span>
                <br />
                <span>{user.last_name}</span>
              </td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
