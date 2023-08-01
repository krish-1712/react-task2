import { useState } from "react";
import { Button, Card } from "react-bootstrap";

export function Cards({ prod, idx, setcount, count }) {
  const [show, setshow] = useState(false);
  function addToCart() {
    setshow(!show)
    setcount(count + 1)
  } 
  function removeToCart() {
    setshow(!show)
    setcount(count - 1)
  }
  return (
    <Card key={idx} style={{ width: '18rem' }}>

      <Card.Img variant="top" className="role" src={prod.productImage} />
      <Card.Body>
        <Card.Title>{prod.productName}</Card.Title>
        <div className="d-flex justify-content-center small text-warning mb-2">
            <div className=" rope">{prod.span}</div>
            <div className=" rope">{prod.span}</div>
            <div className="rope">{prod.span}</div>
            <div className="rope ">{prod.span}</div>
            <div className="rope ">{prod.span}</div>
        </div>
        <Card.Text>{prod.price}</Card.Text>
        <Card.Text >
          <span className="text-muted text-decoration-line-through">{prod.price1}</span>
          <span> {prod.price2}</span>
          <div className="badge bg-dark text-white position-absolute">{prod.sale}</div>
        </Card.Text>
        <Card.Text >
          <span className="text-muted text-decoration-line-through">{prod.price3}</span>
          <span> {prod.price4}</span>
          <div className="badge bg-dark text-white position-absolute">{prod.sale}</div>
        </Card.Text>
        <Card.Text >
          <span className="text-muted text-decoration-line-through">{prod.price5}</span>
          <span> {prod.price6}</span>
          <div className="badge bg-dark text-white position-absolute">{prod.sale}</div>
        </Card.Text>
        <Card.Text >
          <span className="text-muted text-decoration-line-through">{prod.price7}</span>
          <span> {prod.price8}</span>
          <div className="badge bg-dark text-white position-absolute">{prod.sale}</div>
        </Card.Text>


        {!show ? <Button className="roll" variant="primary" onClick={addToCart}>{prod.button}{prod.button1}</Button> : ""}
        {show ? <Button variant="danger" onClick={removeToCart} >Remove Cart</Button> : ""}


      </Card.Body>
    </Card>

  )
}
