import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './Item.css';
import StockCounter from '../../../Hooks/Counter/StockCounter';

// inStock maximo, onAdd debe sumar stock hasta que alcance el valor de inStock, y no puede haber menos de 0

function Item ({img, name, date, description}) {
  return(
    <Card>
    <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>{date}</span>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
      <StockCounter />
    </Card.Content>
  </Card>
  );
}

export default Item;