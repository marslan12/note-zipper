import { Container, Row } from "react-bootstrap";

const MainScreen = ({title, children}) => {
    return (
        <div className="mainBack">
            <Container>
                <Row>
                    <div className="page">
                        {title && <>
                            <h1>{title}</h1>
                            <hr />
                        </>}
                        {children}
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default MainScreen;