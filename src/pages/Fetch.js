import React, { createContext, useContext, useEffect, useState } from 'react';
// import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import { FixedSizeList } from 'react-window';
import Table from '../pages/Table';
import DataTable from '../pages/Datagrid';
import { ThemeContext, UserContext } from '../Context.js';

const Fetch = () => {
  const theme = useContext(ThemeContext);
  console.log(theme, 'PPPPPPPPPPPPPPPPPPP');
  const userDetail = useContext(UserContext);
  console.log(userDetail, 'OOOOOOOOOOOOOOO')
  const [data, setdata] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);


  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await res.json();

      setdata(data);
      console.log(`fetched data `, data);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // const handlebutton = ()=> {
  //   console.log(data)
  //   }
  useEffect(() => {
    console.log(selectedRow);
  }, [selectedRow]);

  const indexx = data.map((users) => {
    return <ListItem component="div" disablePadding>
      <ListItemButton onClick={() => setSelectedRow(users)}>
        <ListItemText
          primary={users.username}
        />
        <ListItemText
          primary={users.name}
        />
      </ListItemButton>
    </ListItem>
  });

  return (
    <>
      <DataTable name="selection data grid" data={data} />
        <Table name="User details" data={data} />
      {indexx}
    </>
  );
}

export default Fetch
