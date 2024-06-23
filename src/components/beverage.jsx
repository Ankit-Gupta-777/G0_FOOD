import React from 'react';
import '../App.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Beverage = () => {
  const arr = [1,2,3,4,5,6];

  return (
    <>

    <div className='container menu_items_block'>
    {
      arr.map((item,index)=>(
        <Card className='card_block'>
        <Card.Img variant="top" src="https://thumbs.dreamstime.com/z/indian-plate-meals-chapatti-rasam-sambar-23038458.jpg?ct=jpeg" className='card_image'/>
        <Card.Body className='card_body'>
          <div className='card_title'>
          <Card.Title>This is a delicious BEVERAGE.</Card.Title>
          <span><strong> $7.77 </strong></span>
          </div>
          <hr style={{borderStyle:'dotted',background:'#000'}}/>
          <div className='card_text'>
          <Card.Text>
            Some quick example text to build on the card title.
          </Card.Text>
          <Button variant="light" className='card_btn'>Shop Now →</Button>
          </div>
        </Card.Body>
      </Card>

      ))
    }
  </div>
  </>
  )
}
