import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Character from './character_card';
import { DataContext } from '../../../DataContext/DataProvider';


const Characters = () => {
    const { charactersAll } = useContext( DataContext );
    const { setFavorities, favorities } = useContext( DataContext );

    const printData = charactersAll.map((item, index) => {
        const printer = () => {
            setFavorities([...favorities, item.name]);
        }

        return <Character key={index} name={item.name} height={item.height} printer={printer}/>;
    })

    return(
        <Container className="my-5">
            <Row>
                <Col xs={12}>
                    <h1 className="text-danger">Characters</h1>

                </Col>
                <Col xs={12} className="d-flex character-container mt-3">
                    {
                        printData
                    }
                </Col>
            </Row>
            
        </Container>
    )
}

export default Characters;