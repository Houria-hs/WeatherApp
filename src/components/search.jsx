import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Search = ({ onSearchChange }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
        console.log('Input changed:', e.target.value); // Debugging
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearchChange(searchQuery);
    };

    return (
        <>
            <Navbar className="Navbar display-flex justify-content-center">
                <Form inline onSubmit={handleSubmit} >
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={handleInputChange}
                                className="mr-sm-2"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button
                            style={{backgroundColor:"rgb(20, 64, 160)", border:"none"}}
                            type="submit">Search</Button>
                        </Col>
                    </Row>
                </Form>
            </Navbar>
        </>
    );
};
export default Search;




