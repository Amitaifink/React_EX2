import React from 'react'
import dishesArr from './dishArr';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Recipe(props) {


    return (
        <div style={{ margin: 14 }} className="p-auto flip-card col-md-4 mx-auto ">

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imgUrl} style={{ width: "100%", height: "120px" }} />

                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.desc}
                    </Card.Text>
                    <Button onClick={() => props.getDish(props.name)} variant={props.class}>{props.btnTxt}</Button>
                </Card.Body>
            </Card>

        </div>

    )

}



export default Recipe



