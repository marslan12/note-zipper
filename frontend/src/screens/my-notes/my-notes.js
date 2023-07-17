import { Link } from "react-router-dom";
import MainScreen from "../../components/main-screen";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

const MyNotes = () => {

    const [notes, setNotes] = useState([]);
    const getNotes = async () => {
        const { data } = await axios("/api/notes/");
        setNotes(data);
    }


    useEffect(() => {
        getNotes();
    }, [])

    return (
        <MainScreen title="Welcome Back Arslan..">
            <Link to="create-note">
                <Button style={{marginLeft: 10, marginBottom: 6,}} size="lg">
                    Create New Note
                </Button>
            </Link>

            {notes.map((note) => (
                <Accordion defaultActiveKey="0" key = {note._id}>
                    <Accordion.Item eventKey="0">
                    <Card style={{margin: 10}}>
                        <Card.Header style={{display: "flex"}}>
                            <span
                                style={{
                                    color: "black",
                                    textDecoration: "none",
                                    flex: 1,
                                    cursor: "pointer",
                                    alignSelf: "center",
                                    fontSize: 18
                                }}
                            >
                                <Accordion.Header>
                                    {note.title}
                                </Accordion.Header>
                            </span>

                            <div>
                                <Button>Edit</Button>
                                <Button variant="danger" className="mx-2">Delete</Button>
                            </div>
                        </Card.Header>
                        <Accordion.Body>
                            <Card.Body>
                                <Badge bg="success">
                                    Category - {note.category}
                                </Badge>
                                <blockquote className="blockquote mb-0">
                                <p>{note.content}</p>
                                <footer className="blockquote-footer">
                                    created on - date
                                </footer>
                                </blockquote>
                            </Card.Body>
                        </Accordion.Body>
                    </Card>
                    </Accordion.Item>
                </Accordion>
            ))}
        </MainScreen>
    );
}

export default MyNotes;