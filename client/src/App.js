import { Component } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import Custmer from './components/customer';

const styles = {
  root: {
    width: '80%',
    margin: '20px auto',
    overFlowX: 'auto',
  },
  table: {
    minwidth: 1080
  }
}

const customers = [
  {
    'id': 1,
    'image': 'http://placeimg.com/64/64/1',
    'name': 'bracket1',
    'birthday': '650729',
    'gender': 'male',
    'job': 'business'
  },
  {
    'id': 2,
    'image': 'http://placeimg.com/64/64/2',
    'name': 'bracket2',
    'birthday': '750729',
    'gender': 'famale',
    'job': 'student'
  },
  {
    'id': 3,
    'image': 'http://placeimg.com/64/64/3',
    'name': 'bracket3',
    'birthday': '850729',
    'gender': 'male',
    'job': 'nojob'
  }
]

class App extends Component {
  render() {
    return (
      <Paper style={styles.root}>
        <Table style={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map(c => {
                return (<Custmer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />)
              })
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default App;
