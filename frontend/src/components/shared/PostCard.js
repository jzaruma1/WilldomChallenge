import React from "react";
import { Col, Card, CardBody, CardSubtitle, CardText, Button, CardImg, CardFooter, Badge } from "reactstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import * as timeago from 'timeago.js';

const PostCard = ({ post, deletePost }) => {
    const { pathname } = useLocation();

    let footerButtons;

    if (pathname === "/") {
        footerButtons = <>
            <Button color='danger' className='py-2 px-4 mr-2 float-right' onClick={() => deletePost(post.id)}>
                <AiFillDelete />
            </Button>
            <Link to={`edit/${post.id}`} >
                <button className='bg-green-400 hover:bg-green-500 text-white rounded py-2 px-4  mr-2 float-right'>
                    <AiFillEdit />
                </button>
            </Link>
        </>
    }

    return (
        <>
            <Col lg="4" md="4" sm="1" key={post.id}>
                <Card className="card-post mb-4">
                    <CardImg
                        className="img-post"
                        alt="Card image cap"
                        src={post.image}
                        top
                        width="100%"
                    />
                    <Badge color="dark" className="publishedAt bg-cyan-700 ml-4">
                        {timeago.format(post.publishedAt)}
                    </Badge>
                    <div className="body-post">
                        <CardBody>
                            <CardSubtitle
                                className="mb-2 text-muted font-bold"
                                tag="h6">
                                {post.title}

                            </CardSubtitle>
                            <CardText>
                                {post.description}
                            </CardText>
                        </CardBody>
                    </div>
                    <CardFooter className="bg-transparent footer-post">
                        {footerButtons}
                    </CardFooter>
                </Card>
            </Col>
        </>
    )

}

export default PostCard;