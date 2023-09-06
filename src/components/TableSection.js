import React from "react";
import Table from "react-bootstrap/Table";
import "./TableSection.css";

const TableSection = ({ tableData }) => {
  console.log(tableData);
  const users = {
    user: [
      {
        userName: "Rajan",
        email: "user@example.com",
        phone: "123-456",
        nationality: "India",
        city: "India",
        pincode: "123",
        fullName: "Rajan",
      },
      {
        userName: "Rajan",
        email: "user@example.com",
        phone: "123-456",
        nationality: "India",
        city: "India",
        pincode: "123",
        fullName: "Rajan",
      },
      {
        userName: "Rajan",
        email: "user@example.com",
        phone: "123-456",
        nationality: "India",
        city: "India",
        pincode: "123",
        fullName: "Rajan",
      },
    ],
  };
  console.log(users.user[0].userName);

  return (
    <div className="table">
      <h1>Users Table</h1>

      {tableData && tableData.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Nationality</th>
              <th>Phone Number</th>
              <th>City</th>
              <th>Pincode</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((user, i) => (
              <tr key={i}>
                <td>{user.userName}</td>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.nationality}</td>
                <td>{user.phone}</td>
                <td>{user.city}</td>
                <td>{user.pincode}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Nationality</th>
              <th>Phone Number</th>
              <th>City</th>
              <th>Pincode</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={7}>
                <h2 className="font-weight-bold text-danger text-center mt-2">
                  No data available
                </h2>
              </td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default TableSection;
