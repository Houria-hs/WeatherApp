import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// icons imports
import { FaArrowDownLong, FaArrowUp, FaGripfire } from "react-icons/fa6";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import { CgMathDivide } from "react-icons/cg";

const Descriptions = ({ data }) => {
    if (!data ) return <div className='Loading-div'> Loading...</div>

    const {
        temp_min, temp_max, feels_like, pressure, humidity, speed
    } = data;

    return (
        <Container className='GridContainer'>
        <Row className='Grid-child' >
            <Col className='grids'>
                <FaArrowDownLong />
                <small>Min</small>
                <h2>{temp_min}</h2>
            </Col>
            <Col className='grids'>
                <FaArrowUp />
                <small>Max</small>
                <h2>{temp_max}</h2>
            </Col>
            <Col className='grids'>
                <FaGripfire />
                <small>Feels Like</small>
                <h2>{feels_like}</h2>
            </Col>
            <Col className='grids'>
                <CgMathDivide />
                <small>Pressure</small>
                <h2>{pressure}</h2>
            </Col>
            <Col className='grids'>
                <WiHumidity />
                <small>Humidity</small>
                <h2>{humidity}%</h2>
            </Col>
            <Col className='grids'>
                <TiWeatherWindyCloudy />
                <small>Wind Speed</small>
                <h2>{speed}</h2>
            </Col>
        </Row>
    </Container>
    
    );
}
export default Descriptions;

