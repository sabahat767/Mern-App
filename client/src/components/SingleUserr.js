import React from "react";
import { useEffect, useState } from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
//*****Material UI********/
import ReactDOM from "react-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
// Icons
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: 50
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
    color: "black",
    fontSize: 30,
    opacity: 1,
    borderBottom: 0,
    "&:before": {
      borderBottom: 0
    }
  },
  disabled: {
    color: "black",
    borderBottom: 0,
    "&:before": {
      borderBottom: 0
    }
  },
  btnIcons: {
    marginLeft: 10
  }
});

//******************/
const SingleUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
const [edit,setedit]=useState({
  email: user?.email,
    editMode: false,
    mouseOver: false
})
const handleChange = event => {
  setedit({ [event.target.name]: event.target.value });
};
const handleMouseOver = event => {
  if (!edit.mouseOver) {
    setedit({ mouseOver: true });
  }
};
const handleMouseOut = event => {
  // The problem is here!!!
  if (edit.mouseOver) {
   setedit({ mouseOver: false });
  }
};

const handleClick = () => {
  setedit({
    editMode: true,
    mouseOver: false
  });
};


  useEffect(() => {
    fetch("http://localhost:4000/api/users/" + id)
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        setUser(res.data)
        console.log(user)
      })
    .catch((err) => console.log(err));
}, [id]);

return(
  <Paper >
      <Table  aria-label="caption table">
        {/* <caption> Selected User information</caption> */}
        <TableHead>
          <TableRow>
            <TableCell align="left" />
            <TableCell align="left">Edit</TableCell>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
            <TableCell align="left" />
            <TableCell><IconButton ><EditIcon /></IconButton></TableCell>
            <TableCell align="left">{user?._id}</TableCell>
            <TableCell align="left"><TextField name="name"
          // defaultValue={user?.name}
          value={user?.name}
          margin="normal"
          error={edit.email === ""}
          onChange={handleChange}
          disabled={!edit.editMode}
          // className={classes.textField}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOut}
          InputProps={{
            classes: {
              // disabled: classes.disabled
            },
            endAdornment: edit.mouseOver ? (
              <InputAdornment position="end">
                <IconButton onClick={handleClick}>
                <EditIcon />
                </IconButton>
              </InputAdornment>
            ) : (
              ""
            )
          }}
        /></TableCell>
            <TableCell align="left">{user?.email}</TableCell>
            <TableCell align="left">{user?.pwd}</TableCell>
          </TableRow>
        </TableBody>
        </Table>
        </Paper>
)
  // return (
  //   <Row className="mt-5">
  //     <Col lg={3} md={2} sm={1} xs={1}></Col>
  //     <Col lg={6} md={8} sm={10} xs={10}>
  //       <ListGroup>
  //         <ListGroup.Item variant="primary" className="col-headers">
  //           Selected User information
  //         </ListGroup.Item>
  //         <ListGroup.Item variant="light">
  //           <Row>
  //             <Col className="col-headers">ID</Col>
  //             <Col>{user?._id}</Col>
  //           </Row>
  //           <Row>
  //             <Col className="col-headers">Name</Col>
  //             <Col>{user?.name}</Col>
  //           </Row>
  //           <Row>
  //             <Col className="col-headers">Email</Col>
  //             <Col>{user?.email}</Col>
  //           </Row>
  //           <Row>
  //             <Col className="col-headers">Password</Col>
  //             <Col>{user?.pwd}</Col>
  //           </Row>
  //         </ListGroup.Item>
  //       </ListGroup>
  //     </Col>
  //     <Col lg={3} md={2} sm={1} xs={1}></Col>
  //   </Row>
  // );
};

export default SingleUser;
