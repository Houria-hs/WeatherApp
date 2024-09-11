
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



function Temperature({ data }) {
    if (!data) return <div className='Loading-div'>loading...</div>;

    const {
        description, iconURL, temp, country, name 
    } = data;

    return (
        <Card className='Card' style={{ margin: 'auto' , width:"40%", height:"30%" }}>
            <Card.Img style={{width:"50%"}} variant="top" src={iconURL} />
            <Card.Body>
                <Card.Title>{name}, {country}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className='temp'>{temp}°C</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}
export default Temperature;