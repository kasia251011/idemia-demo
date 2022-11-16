import Box from '@mui/material/Box';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useState, useEffect, ChangeEvent, useCallback} from 'react';
import { Person } from './MainDashboard';

interface EmployeesTableProps {
  data: Person[] | undefined;
  setData: (newData: Person[]) => void;
}

enum SORTS {
  ASC = 'Surname A-Z',
  DESC = 'Surname Z-A'
}

const EmployeesTable = ({data, setData}: EmployeesTableProps) => {
  const [sorting, setSorting] = useState<SORTS>(SORTS.ASC);
  const [female, setFemale] = useState(true);
  const [male, setMale] = useState(true);

  const comparePersonsOnSurname = useCallback((person1: Person, person2: Person) => {
    if(person1.name.last < person2.name.last) {
      return -1;
    }
    if(person1.name.last > person2.name.last) {
      return 1;
    }
    return 0;
  }, []);

  const handleChangeSorting = useCallback((event: SelectChangeEvent) => {
    setSorting(event.target.value as SORTS);
  },[]);

  const handleCheckFemale = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFemale(event.target.checked);
  },[]);

  const handleCheckMale = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setMale(event.target.checked);
  },[]);

  useEffect(() => {
    //deep copy
    let newData = data ? JSON.parse(JSON.stringify(data)) as Person[] : [];

    if(sorting === SORTS.ASC) {
      newData.sort(comparePersonsOnSurname);
    } else if(sorting === SORTS.DESC) {
      newData = newData.sort(comparePersonsOnSurname).reverse();
    }

    if(!female) {
      newData = newData.filter((person) => person.gender !== 'female');
    } 
    if(!male) {
      newData = newData.filter((person) => person.gender !== 'male');
    }

    setData(newData);
    
  }, [sorting, female, male]);

  return (
      <Box sx={{width: "90%", margin: "auto", marginTop: "2rem"}} >
        <FormControl sx={{display: "flex", flexDirection: "row"}} size="small">
          <InputLabel id="sorting-label">Sorting</InputLabel>
          <Select
            labelId="sorting-label"
            value={sorting}
            label="Sorting"
            onChange={handleChangeSorting}
            sx={{marginRight:"2rem" , width: "200px"}}
          >
            <MenuItem value={SORTS.ASC}>Surname A-Z</MenuItem>
            <MenuItem value={SORTS.DESC}>Surname Z-A</MenuItem>
          </Select>
          <FormControlLabel control={<Checkbox defaultChecked onChange={handleCheckFemale}/>} label="woman" />
          <FormControlLabel control={<Checkbox defaultChecked onChange={handleCheckMale}/>} label="man" />
        </FormControl>
      </Box>

    );
  };
  
  export default EmployeesTable;