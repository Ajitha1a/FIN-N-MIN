import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row } from 'react-bootstrap';

function Discover() {
  return (
    <div className='discovercontent'>
      <h2 className='heading'>Discover</h2>
      <div style={{padding: '30px 0'}}>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className='card rosecard'>
              <Card.Body>
                <Card.Title className='card-title'>Class Activities</Card.Title>
                <Card.Text className='card-content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices laoreet massa et vestibulum. Nam mattis arcu et nunc.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='card greencard'>
              <Card.Body>
                <Card.Title className='card-title'>Professional Talk</Card.Title>
                <Card.Text className='card-content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices laoreet massa et vestibulum. Nam mattis arcu et nunc.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='card yellowcard'>
              <Card.Body>
                <Card.Title className='card-title'>Education Program</Card.Title>
                <Card.Text className='card-content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices laoreet massa et vestibulum. Nam mattis arcu et nunc.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Discover;