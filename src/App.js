import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  Button,
  Container,
  Row,
  Accordion,
  Badge,
  FormGroup,
} from "react-bootstrap";

function App() {
  const counterState = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementFromRedux = () => {
    dispatch({ type: "GET_CAT_FACT" });
  };

  const getCatFactNoDelay = () => {
    dispatch({ type: "GET_CAT_FACT_NO_DELAY" });
  };
  return (
    <div className="App">
      <Container>
        <Row>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Cat fact{" "}
                <Badge bg="secondary" style={{ marginLeft: 10 }}>
                  {counterState.counter}
                </Badge>
              </Accordion.Header>
              <Accordion.Body>
                {counterState.catFact ? (
                  counterState.catFact
                ) : (
                  <p>There is no cat fact :(</p>
                )}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
        <FormGroup style={{ marginTop: 10 }}>
          <Button onClick={incrementFromRedux} variant="primary">
            Get fact cat
          </Button>{" "}
          <Button onClick={getCatFactNoDelay} variant="primary">
            Get fact cat no Delay
          </Button>
        </FormGroup>
      </Container>
    </div>
  );
}

export default App;
