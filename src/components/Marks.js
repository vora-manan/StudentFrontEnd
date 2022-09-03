import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Marks(props) {
  return (
    <TableContainer>
      <Table aria-label="customized table" style={{ margin: 'auto', border: '2px solid grey' }} >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" style={{ fontWeight: 'bold', fontFamily: 'Audiowide' }}>Subject</StyledTableCell>
            <StyledTableCell align="center" style={{ fontWeight: 'bold', fontFamily: 'Audiowide' }}>Marks</StyledTableCell>
            <StyledTableCell align="center" style={{ fontWeight: 'bold', fontFamily: 'Audiowide' }}>Highest</StyledTableCell>
            <StyledTableCell align="center" style={{ fontWeight: 'bold', fontFamily: 'Audiowide' }}>Grade</StyledTableCell>
            <StyledTableCell align="center" style={{ fontWeight: 'bold', fontFamily: 'Audiowide' }}>Remarks</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <StyledTableRow key={row.subject}>
              <StyledTableCell component="th" scope="row" style={{ borderLeft: '1px solid black', fontWeight: 'bold', fontFamily: 'Audiowide' }} align="center">
                {row.subject}
              </StyledTableCell>
              <StyledTableCell style={{ borderLeft: '1px solid black', fontWeight: 'bold', fontFamily: 'Audiowide' }} align="center">{row.marks}</StyledTableCell>
              <StyledTableCell style={{ borderLeft: '1px solid black', fontWeight: 'bold', fontFamily: 'Audiowide' }} align="center">{row.highest}</StyledTableCell>
              <StyledTableCell style={{ borderLeft: '1px solid black', fontWeight: 'bold', fontFamily: 'Audiowide' }} align="center">{row.grade}</StyledTableCell>
              <StyledTableCell style={{ borderLeft: '1px solid black', fontWeight: 'bold', fontFamily: 'Audiowide' }} align="center">{row.remark}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
