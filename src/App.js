import React, { useState } from 'react';
import './App.css';

// import bootstrap classes from react-bootstrap installed inside the project
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack';

// import bootstrap styling
import "bootstrap/dist/css/bootstrap.min.css";

// People array with sample placeholders
const People = [
    { name: "John Doe", favoriteFood: "Pizza", favoriteColor: "Blue" },
    { name: "Jane Smith", favoriteFood: "Sushi", favoriteColor: "Green" },
    { name: "Alice Johnson", favoriteFood: "Burger", favoriteColor: "Red" },
    { name: "Charles Smith", favoriteFood: "Pasta", favoriteColor: "Orange" }
];

// CardComponent to display each person's details
// likeCount is the state variable initialized to 0
// setLikeCount to update the likeCount when incremented
const CardComponent = ({ person }) => {
    const [likeCount, setLikeCount] = useState(0);

    return (
        <Card style={{ margin: "10px", position: "relative", border: "1px solid #b7b8b9" }}>
        <Card.Body>
    <Card.Title style={{ color: "#2b73ae" }}>{person.name}</Card.Title>
    <Card.Text>
    <strong>Favorite Food:</strong> {person.favoriteFood}
    <br />
    <strong>Favorite Color:</strong> {person.favoriteColor}
    </Card.Text>
    <Button variant="success" size="sm" style={{ position: "absolute", bottom: "5px", right: "5px" }} onClick={() => setLikeCount(likeCount + 1)}>Like ({likeCount})</Button>
    </Card.Body>
    </Card>
);
};

// Main App Component
// The People array is mapped using .map() to generate a CardComponent for each person
const App = () => {
    return (
        <Container className="mt-5">
        <h1 className="text-center mb-4"  style={{ color: "#a81f1f " }}>My Classmates</h1>
    <Stack gap={3} className="col-md-3 mx-auto">
        <div className="p-2">{People.map((person, index) => (<CardComponent key={index} person={person} />))}</div>
    </Stack>
    </Container>
);
};

    export default App;
