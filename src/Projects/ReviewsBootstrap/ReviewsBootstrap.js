import React from "react";
import {
  Button,
  Container,
  Row,
  Image,
  Col,
  Modal,
  Form,
} from "react-bootstrap";
import { FaGithubSquare } from "react-icons/fa";
import Review from "./Review";
import data from "./data.js";
import "./ReviewsBootstrap.css";

const ReviewsBootstrap = () => {
  return (
    // <main>
    <Container>
      <div className="reviews-header">
        <h2 className="reviews-title">Our clients review</h2>
        <div className="underline"></div>
      </div>
      <Review />
    </Container>
    // </main>
  );
};

export default ReviewsBootstrap;
