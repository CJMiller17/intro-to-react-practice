import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import ButtonClicker from "./ButtonClicker";

function Contacts() {
  return (
    <div className="p-5">
      <Link to="/">{"<- Back"}</Link>
      <h1>Contacts Page</h1>

      <ListGroup as="ul">
        <ListGroup.Item as="li" active action variant="info">
          Brandon Heisler
        </ListGroup.Item>
        <ListGroup.Item as="li" action variant="info">
          Caitlyn Schaeffer
        </ListGroup.Item>
        <ListGroup.Item as="li" disabled action variant="info">
          Cody Miller
        </ListGroup.Item>
        <ListGroup.Item as="li" action variant="info">
          Duke McClellan
        </ListGroup.Item>
        <ListGroup.Item as="li" action variant="info">
          Eoin MDonnell
        </ListGroup.Item>
        <ListGroup.Item as="li" action variant="info">
          Henry Knollenberg
        </ListGroup.Item>
        <ListGroup.Item as="li" action variant="info">
          Jacinta Helm
        </ListGroup.Item>
        <ListGroup.Item as="li" action variant="info">
          Jay Miller
        </ListGroup.Item>
        <ListGroup.Item as="li" action variant="info">
          Maddie Carlson
        </ListGroup.Item>
        <ListGroup.Item as="li" action variant="info">
          Nathan Wilson
        </ListGroup.Item>
        <ListGroup.Item as="li" action variant="info">
          Neal Sharma
        </ListGroup.Item>
        <ListGroup.Item as="li" action variant="info">
          Owen Coombs
        </ListGroup.Item>
        <ListGroup.Item as="li" action variant="info">
          Mystery Person{" "}
        </ListGroup.Item>
        <ListGroup.Item as="li" action variant="info">
          Ryan Anderson
        </ListGroup.Item>
          </ListGroup>
        <ButtonClicker/>
    </div>
  );
}

export default Contacts;
