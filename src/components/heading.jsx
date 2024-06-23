import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';



export const Heading = () => {
    const categories = ["FRUITS AND VEGETABLES","BAKERY","MEAT AND SEAFOOD","BEVERAGE","BISCUIT AND SNACKS"];

  return (
    <>
        <div className='container categories_heading'>
            <h4>
                Shop By Category
            </h4>
            <h1 className='h1'>
                Top Category of Organic Food
            </h1>
        </div>
        <br></br>
        <div className='container categories_list'> 
            {
                categories.map( (category,key) => (
                    <Link to={`/${category}`} key={key} className='category_buttons'>
                    {
                        category
                    }
                    </Link>   


                ))

            }
        </div>
        <hr style={{width:'70%',margin:' 20px auto'}}/>
      
    </>
  )
}
