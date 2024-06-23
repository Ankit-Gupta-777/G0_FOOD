import React, { useEffect,useState} from 'react';
import '../App.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const Bakery = () => {
  const url = "https://themealdb.com/api/json/v1/1/random.php";
  let bakeryData = [];
  const BakeryDataSetter = (data)=>{
    bakeryData = data;
  }
  //WE CAN ALSO USE useState HOOK HERE...
  const arr = [1,2,3,4,5,6];
  
  const getBakeryData = async ()=>{
    try{
      await fetch(url)
     .then((res)=> res.json())
     .then(data => BakeryDataSetter(data))
     .catch(err => console.log(err));

    //  if (!response.ok) {
    //    console.log("Error in if Block")
    //    throw new Error(`HTTP error: Status ${response.status}`);
    //  }

    }catch(error){
     console.log("error in catch block");
     throw error;
    } 
    console.log(bakeryData);


   }

  useEffect(()=>{
     getBakeryData();
    // console.log(data);

},[]);


  return (
    <>
    <div className='container menu_items_block'>
      {
        arr.map((item,index)=>(
          <Card className='card_block'>
          <Card.Img variant="top" src="https://thumbs.dreamstime.com/z/indian-plate-meals-chapatti-rasam-sambar-23038458.jpg?ct=jpeg" className='card_image'/>
          <Card.Body className='card_body'>
            <div className='card_title'>
            <Card.Title>This is a delicious Bakery Dish</Card.Title>
            <span><strong>$7.77 </strong></span>
            </div>
            <hr style={{borderStyle:'dotted',background:'#000'}}/>
            <d  iv className='card_text'>
            <Card.Text>
              Some quick example text to build on the card title.
            </Card.Text>
            <Button variant="light" className='card_btn'>Shop Now →</Button>
            </d>
          </Card.Body>
        </Card>

        ))
      }
    
    </div>
    </>
  )
}
