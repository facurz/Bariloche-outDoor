import { Container, Row, Col } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemListContainer = ( {greeting} ) => {
    return(
        <main>
            <Container>
                <Row className="text-center mt-4">
                    <Col><h2 className="ItemListContainer_h2">{greeting}</h2></Col>
                </Row>
                <Row className="text-center mt-4">
                    <Col><ItemCount stock="5"/></Col>
                </Row>
                <Row>
                    <Col><hr/></Col>
                </Row>
            </Container>
            
            
        </main>
    );
}