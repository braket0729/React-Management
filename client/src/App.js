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

class App extends Component {

  state = {
    customers: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/customers')
    const body = await response.json();
    return body;
  }

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
              this.state.customers ? this.state.customers.map(c => {
                return (<Custmer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />)
              }) : ""
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default App;
