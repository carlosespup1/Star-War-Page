import { Navbar, NavDropdown, Container } from 'react-bootstrap';
import { DataContext } from '../../../DataContext/DataProvider';
import { useContext } from 'react';

const Navigation = () => {

    const { favorities } = useContext( DataContext );

    const favoritiesList = favorities.map((item, index) => {
        return(
            <NavDropdown.Item href="#" key={index}>{ item }</NavDropdown.Item>
        )
    });

    return (
        <Container>
            <Navbar expand="lg">
                <Navbar.Brand href="#">Star War</Navbar.Brand>
                <NavDropdown className="ml-auto" title={"Favoritos " + favorities.length} id="basic-nav-dropdown">
                    {
                        favoritiesList
                    }
                </NavDropdown>
            </Navbar>
        </Container>
    )
}

export default Navigation;