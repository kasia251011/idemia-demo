
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import Skeleton from '@mui/material/Skeleton';
import { Person } from './MainDashboard'; 
import Typography from '@mui/material/Typography';

interface EmployeesTableProps {
  data: Person[] | undefined;
  loading: boolean;
}

const EmployeesTable = ({ data, loading }: EmployeesTableProps) => {
  const skeletonArray = Array(10).fill('');

  return (
    <TableContainer component={Paper} sx={{width: "90%", margin: "auto", marginTop: "2rem", marginBottom:"2rem"}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Surname</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {!loading ? (data?.length ? (data.map((person: Person, index: number) => (
            <TableRow key={index}>
              <TableCell>{person.name.title}</TableCell>
              <TableCell>{person.name.first}</TableCell>
              <TableCell>{person.name.last}</TableCell>
              <TableCell>{person.email}</TableCell>
              <TableCell>{person.phone}</TableCell>
            </TableRow> 
          ))) : (
            <TableRow>
              <TableCell colSpan={5} align="center">
                <img src={require('../../resources/no_data.png')} alt="No data" width="200px"></img>
                <Typography sx={{marginBottom: '15px'}} > Empty data sheet </Typography>
              </TableCell>
            </TableRow>
            ) ): (
            skeletonArray.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton />
                </TableCell>
                <TableCell>
                  <Skeleton />
                </TableCell>
                <TableCell>
                  <Skeleton />
                </TableCell>
                <TableCell>
                  <Skeleton />
                </TableCell>
                <TableCell>
                  <Skeleton />
                </TableCell>
              </TableRow>)
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default EmployeesTable;