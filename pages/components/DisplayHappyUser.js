import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import styles from "../../styles/user.module.css";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function DisplayHappyUser() {
  const [userData, setUserData] = useState([]);
  const [open, setOpen] = useState(false);
  const [singleData, setSingleData] = useState({});
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleClickDeleteOpen = (data) => {
    setDeleteModalOpen(true);
    setSingleData(data);
  };

  const handleDeleteClose = () => {
    setDeleteModalOpen(false);
  };

  const handleClickOpen = (data) => {
    setOpen(true);
    setSingleData(data);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getUser = async () => {
    await fetch("http://localhost:3000/api/postcontact", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setUserData(data));
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No#</StyledTableCell>
              <StyledTableCell>FirstName</StyledTableCell>
              <StyledTableCell align="right">LastName</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Contact No.</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((row, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell component="th" scope="row">
                  {i + 1}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.firstName}
                </StyledTableCell>
                <StyledTableCell align="right">{row.lastName}</StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.contactNo}</StyledTableCell>
                <StyledTableCell align="right">
                  <DeleteIcon
                    className={styles.icons}
                    onClick={() => handleClickDeleteOpen(row)}
                  />
                  <EditIcon
                    className={styles.icons}
                    onClick={() => handleClickOpen(row)}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {open && (
        <EditModal
          open={open}
          handleClose={handleClose}
          singleData={singleData}
          getUser={getUser}
        />
      )}
      {deleteModalOpen && (
        <DeleteModal
          open={deleteModalOpen}
          handleClose={handleDeleteClose}
          singleData={singleData}
          getUser={getUser}
        />
      )}
    </>
  );
}
