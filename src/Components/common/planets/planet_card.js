import { Card, Button } from 'react-bootstrap';
import "./planet.css"

const Planet = (props) => {
    return(
        <Card style={{ width: '18rem' }} className="character mr-3">
            <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/27/999/737/star-wars-wallpaper-preview.jpg" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.population}
                </Card.Text>
               <div className="d-flex justify-content-between">
                    <Button variant="primary">Information</Button>
                    <Button variant="danger" onClick={props.printer}>Like</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Planet;