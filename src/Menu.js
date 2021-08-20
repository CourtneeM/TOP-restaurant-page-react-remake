import React from 'react';
import Header from './components/Header';

const Menu = () => {
  const classicSnowcones = [
                             {name: 'Cherry', price: 3},
                             {name: 'Green Apple', price: 2.50},
                             {name: 'Strawberry', price: 3},
                             {name: 'Grape', price: 3.50},
                             {name: 'Orange', price: 2.75}
                            ];
  const newSnowcones = [
                         {name: 'Pickle', price: 4},
                         {name: 'Red Velvet', price: 5},
                         {name: 'Mango', price: 4},
                         {name: 'Sugar Cookie', price: 4},
                         {name: 'Sour Patch', price: 4.50},
                       ];

  const displaySnowcones = list => {
    return (
      list.map(snowcone => {
        const {name, price} = {...snowcone};
        return (
          <div className='menu-item'>
            <p>{name}</p>
            <p>${price.toFixed(2)}</p>
          </div>
        );
      })
    );
  }

  return (
    <>
      <Header />
      <div className='menu-container'>
        <h2>Menu</h2>
        <div className='menu-items'>
          <div className='classic-snowcones'>
            <h3>Classic Snowcones</h3>
            { displaySnowcones(classicSnowcones) }
          </div>
          <div className='new-snowcones'>
            <h3>New Snowcones</h3>
            { displaySnowcones(newSnowcones) }
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
