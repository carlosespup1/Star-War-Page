import { Card, Button } from 'react-bootstrap';
import './characters.css';

const Character = (props) => {
    return(
        <Card style={{ width: '18rem' }} className="character mr-3">
            <Card.Img variant="top" src="https://www.xtrafondos.com/wallpapers/resized/selfie-de-star-wars-venganza-de-los-cinco-6873.jpg?s=large" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.height}
                </Card.Text>
                <div className="d-flex justify-content-between">
                    <Button variant="primary">Information</Button>
                    <Button variant="danger" onClick={props.printer}>Like</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Character;