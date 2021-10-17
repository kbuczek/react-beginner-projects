import "./BirthdayList.css";
import React, { useState } from "react";
import data from "./data";
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
  const [people, setPeople] = useState(data);
  const [modalShow, setModalShow] = React.useState(false);

  const removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const addPerson = (person) => {
    setPeople([...people, person]);
  };

  return (
    <>
      <Container className="birthday-list-container">
        <h1>Birthday List Bootstrap 5</h1>
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

      <AddPersonModal
        show={modalShow}
        addPerson={addPerson}
        onHide={() => setModalShow(false)}
      />
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
  const [person, setPerson] = useState({
    name: "",
    age: "",
    date: "",
    image: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault(); TYPE="SUBMIT" POWODUJE BŁĘDY
    if (person.name && person.age && person.date) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      props.addPerson(newPerson);
      setPerson({ name: "", age: "", date: "", image: "" });
      console.log(newPerson);
    }
  };

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
            <Form.Control
              type="text"
              placeholder="Enter image source link"
              name="image"
              value={person.image}
              onChange={handleChange}
            />
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter person's name"
              name="name"
              value={person.name}
              onChange={handleChange}
            />
            <Form.Label>Age</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter person's age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
            <Form.Label>Birthday Date</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter month name and number of the day"
              name="date"
              value={person.date}
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            className="btn-submit"
            // type="submit" TYPE SUBMIT POWODUJE BŁĘDY
            onClick={() => {
              console.log(person);
              handleSubmit();
              props.onHide();
            }}
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BirthdayList;
