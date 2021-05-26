import "./birthday-list.css";
import React, { useState } from "react";
import data from "../data";
import {
  Button,
  Container,
  Row,
  Image,
  Col,
  Modal,
  Form,
} from "react-bootstrap";

const BirthdayList = () => {
  // const [person, setPerson] = useState({ name: "", age: "", image: "" });
  const [people, setPeople] = useState(data);
  const [modalShow, setModalShow] = React.useState(false);

  const removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const addPerson = (img, name, age, birthday) => {};

  return (
    <>
      <Container>
        <h1>Birthdays List </h1>
        <p>number of people: {people.length}</p>
        <Row>
          <Col></Col>
          <Col>
            <p className="tag">name:</p>
          </Col>
          <Col>
            <p className="tag">age:</p>
          </Col>
          <Col>
            <p className="tag">birthday date:</p>
          </Col>
          <Col></Col>
        </Row>
        <List people={people} removePerson={removePerson} />
        <Button
          variant="success"
          className="btn-add"
          onClick={() => setModalShow(true)}
        >
          Add person
        </Button>
      </Container>

      <AddPersonModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, date, image } = person;
        return (
          <div key={id}>
            <Row className="justify-content-md-center" id="b-row">
              <Col>
                <Image id="b-img" src={image} alt={name} rounded />
              </Col>
              <Col className="center">
                <h4>{name}</h4>
              </Col>
              <Col className="center">
                <p>{age}</p>
              </Col>
              <Col className="center">
                <p>{date}</p>
              </Col>
              <Col className="center">
                <Button variant="danger" onClick={() => removePerson(id)}>
                  Remove person
                </Button>
              </Col>
            </Row>
          </div>
        );
      })}
    </>
  );
};

const AddPersonModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a person to Birthday List
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" placeholder="Enter image source link" />
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter person name" />
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" placeholder="Enter person age" />
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" placeholder="Enter person age" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BirthdayList;
