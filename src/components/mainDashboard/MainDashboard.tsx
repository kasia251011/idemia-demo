import Box from '@mui/material/Box';
import EmployeesTable from './EmplyeesTable';
import Navbar from './Navbar';

import {useState, useEffect} from 'react';
import Filters from './Filters';

interface Name {
  title: string,
  first: string,
  last: string
}

export interface Person {
  gender: string;
  name: Name,
  email: string,
  phone: string  
}

const MainDashboard = () => {
  const [data, setData] = useState<Person[] | undefined>();
  const [dataFiltered, setDataFiltered] = useState<Person[] | undefined>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=1000")
      .then((results) => results.json())
      .then((json) => {
        setData(json.results);
        setDataFiltered(json.results);
        setLoading(false);
      });
  }, []);

  const updateData = (newData : Person[]) => {
    setDataFiltered(newData);
  }

  return (
    <Box>
      <Navbar></Navbar>
      <Filters setData={updateData} data={data}></Filters>
      <EmployeesTable data={dataFiltered} loading={loading}></EmployeesTable>
    </Box>
  );
};

export default MainDashboard;