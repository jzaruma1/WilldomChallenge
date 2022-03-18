import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import "../../css/Heading.css";
const Heading = () => {
    const { pathname } = useLocation();
    
    return (<div>
        <div className='flex items-center'>
            <Link to='/' className='link-item'>
                <h5 className='text-gray-100 font-bold mr-5'>
                    Post
                </h5>
            </Link>
            <Row className='bg-row'
            >
                <Col className="bg-col">
                    <div>
                        <Link to="/">
                            <Button color='info' className={pathname === '/' ? 'active' : ''}>
                                Local
                            </Button>
                        </Link>
                        {' '}
                        <Link to="/remote">
                            <Button color='info' className={pathname === '/remote' ? 'active' : ''}>
                                Remote
                            </Button>
                        </Link>
                        {' '}
                        <Link to="/remote-plus" >
                            <Button color='info' className={pathname === '/remote-plus' ? 'active' : ''}>
                                Remote +
                            </Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    </div>)
}

export default Heading;