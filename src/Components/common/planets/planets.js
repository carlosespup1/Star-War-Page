import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Planet from './planet_card';

const Planets = () => {
    const [planetsAll, setPlanets] = useState([]);

    const fetchData = async () => {
        const API = 'https://swapi.dev/api/planets/';
        const data = await fetch(API);
        const parseData = await data.json();

        setPlanets(parseData.results);
    }

    const printData = planetsAll.map((item, index) => {
        return <Planet key={index} name={item.name} population={item.population}/>
    })

    useEffect(() => {
        fetchData()
    }, [])


    return(
        <Container className="my-5">
            <Row>
                <Col xs={12}>
                    <h1 className="text-danger">Planets</h1>
                </Col>
                <Col xs={12} className="d-flex character-container mt-3">
                    { printData }
                </Col>
            </Row>
        </Container>
    )
}

export default Planets;