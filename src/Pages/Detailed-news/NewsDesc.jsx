import React from 'react';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';

const NewsDesc = (props) => {
    const { location } = props.location;

    console.log(location);
    return (
        <Container className="py-5">
            {/* <Row>
                <Col lg={8} className="mb-4">
                    <section className="page-content">
                        <h2 className="page-content__title h1">Just a Sample Page.</h2>

                        <p className="lead">
                            Molestias aperiam sapiente illo velit ipsam impedit vero ut ut. Ut repudiandae temporibus labore aut.
                            Commodi corporis in non ut. Explicabo libero dolorem omnis quo facere. Et et qui alias ad. Ratione
                            perferendis sunt voluptatibus culpa. Alias ullam at voluptatibus sed nemo. Dolor irure velit commodo
                            cillum sit nulla
                        </p>

                        <p>
                            Voluptas voluptatibus dolores. Voluptatum illum odio. Fugiat voluptas eos et non ducimus possimus illum
                            harum. Qui omnis repudiandae. Repellat sequi quibusdam animi molestiae non. Ducimus ut eos sed nihil
                            reiciendis incidunt dolorem. Molestiae facilis rerum. Harum dignissimos et est maxime alias reiciendis.
                            Provident eum consequatur recusandae laborum ut ducimus. Hic est ea voluptates tenetur et eum voluptates.
                            Porro perferendis nobis omnis odit commodi eveniet quos. Aut nihil qui et.
                        </p>

                        <p>
                            Possimus magnam et omnis laudantium atque similique nostrum. Repudiandae nihil magni omnis
                            necessitatibus aliquid fuga voluptates. Quae incidunt quo repellendus vero totam porro. Recusandae et qui.
                            Officia fuga dicta fugit quam eum enim. Aperiam impedit non sint perspiciatis iste. Assumenda consequatur
                            dolorum eius ea in accusamus aut. Consequuntur voluptatem necessitatibus soluta doloribus. Vero nobis nisi
                            molestias reprehenderit voluptatem quidem est reprehenderit sit.
                        </p>

                        <Row className="block-large-1-2 block-tab-full">
                            <Col>
                                <h5>Our Process.</h5>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                                </p>
                            </Col>

                            <Col>
                                <h5>Our Approach.</h5>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                                </p>
                            </Col>

                            <Col>
                                <h5>Our Goal.</h5>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                                </p>
                            </Col>

                            <Col>
                                <h5>Our Mission.</h5>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                                </p>
                            </Col>
                        </Row>
                    </section>
                </Col>

                <Col lg={4} className="s-content__sidebar">
                    <div className="widget widget--search">
                        <h3 className="h6">Search</h3>
                        <Form>
                            <Form.Control type="text" placeholder="Search here..." className="text-search" />
                            <Button type="submit" variant="light" className="submit-search"></Button>
                        </Form>
                    </div>

                    <div className="widget widget--categories">
                        <h3 className="h6">Categories.</h3>
                        <ul>
                            <li>
                                <Badge pill bg="primary">
                                    Wordpress (2)
                                </Badge>
                            </li>
                            <li>
                                <Badge pill bg="primary">
                                    Ghost (14)
                                </Badge>
                            </li>
                            <li>
                                <Badge pill bg="primary">
                                    Joomla (5)
                                </Badge>
                            </li>
                            <li>
                                <Badge pill bg="primary">
                                    Drupal (3)
                                </Badge>
                            </li>
                            <li>
                                <Badge pill bg="primary">
                                    Magento (2)
                                </Badge>
                            </li>
                            <li>
                                <Badge pill bg="primary">
                                    Uncategorized (9)
                                </Badge>
                            </li>
                        </ul>
                    </div>

                    <div className="widget widget_text group">
                        <h3 className="h6">Widget Text.</h3>
                        <p>
                            Lorem ipsum Ullamco commodo laboris sit dolore commodo aliquip incididunt fugiat esse dolor aute fugiat
                            minim eiusmod do velit labore fugiat officia ad sit culpa labore in consectetur sint cillum sint
                            consectetur voluptate adipisicing Duis irure magna ut sit amet reprehenderit.
                        </p>
                    </div>

                    <div className="widget widget_tags">
                        <h3 className="h6">Post Tags.</h3>
                        <div className="tagcloud group">
                            <a href="#0">Corporate</a>
                            <a href="#0">Onepage</a>
                            <a href="#0">Agency</a>
                            <a href="#0">Multipurpose</a>
                            <a href="#0">Blog</a>
                            <a href="#0">Landing Page</a>
                            <a href="#0">Resume</a>
                        </div>
                    </div>

                    <div className="widget widget_popular">
                        <h3 className="h6">Popular Post.</h3>
                        <ul className="link-list">
                            <li>
                                <a href="#0">Sint cillum consectetur voluptate.</a>
                            </li>
                            <li>
                                <a href="#0">Lorem ipsum Ullamco commodo.</a>
                            </li>
                            <li>
                                <a href="#0">Fugiat minim eiusmod do.</a>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row> */}

        </Container>
    );
};

export default NewsDesc;
