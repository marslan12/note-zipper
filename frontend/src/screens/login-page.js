import React, { useState } from "react";
import MainScreen from "../components/main-screen";
import { Alert, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      setError(false);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <MainScreen title="LOGIN">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div style={{ marginTop: 20 }}>
          New Customer? <Link to="/register"> Register Here</Link>
        </div>

        {error && <Alert variant="danger">{error}</Alert>}
      </Form>
    </MainScreen>
  );
};
