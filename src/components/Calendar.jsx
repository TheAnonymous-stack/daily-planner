import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//line 65 add: <TableCell align="right">{row.calories}</TableCell> 
function createData(hour) {
    
    return (hour);
}

const rows = [
  createData('0h'),
  createData('1h'),
  createData('2h'),
  createData('3h'),
  createData('4h'),
  createData('5h'),
  createData('6h'),
  createData('7h'),
  createData('8h'),
  createData('9h'),
  createData('10h'),
  createData('11h'),
  createData('12h'),
  createData('13h'),
  createData('14h'),
  createData('15h'),
  createData('16h'),
  createData('17h'),
  createData('18h'),
  createData('19h'),
  createData('20h'),
  createData('21h'),
  createData('22h'),
  createData('23h'),
  createData('24h'),
];

function Calendar() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell align="right">Task</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.hour}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.hour}
              </TableCell>
              
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Calendar; 
