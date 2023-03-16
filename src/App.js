import "./App.css"
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";


export default function App() {
  const data = [
    {
      productImage: "https://www.kalyanjewellers.net/images/menu-banner/jewellery/gold-2.jpg",
      productName: "Fancy Product",
      price: "$40.00-$80.00",
      button:"Add Cart",
     

    },
    {
      productImage:
        "https://5.imimg.com/data5/GG/AY/KF/SELLER-5611737/cotton-fancy-formal-wear-shirt-500x500.jpg",
      productName: "Special Item",
      span: "⭐",
      price1: "$20.00", price2: "$18.00",
      button1: "Add Cart",
      sale: "Sale",
      star: "star"
    },
    {
      productImage:
        "https://cdn.shopify.com/s/files/1/2961/7182/products/image_43b0ccd5-6c7d-4486-927c-c205dbfc428f.png?v=1666308677",
      productName: "Sale Item ",
      price3: "$50.00", price4: "$25.00",
      button: "Add Cart",
      sale: "Sale"
    },
    {
      productImage:
        "https://m.economictimes.com/thumb/height-450,width-600,imgsize-45376,msid-94360089/iphone-14-check-out-new-features-colours-of-apples-upcoming-phone.jpg",
      productName: "Popular Item",
      span: "⭐",
      price: "$40.00",
      button: "Add Cart"
    },
    {
      productImage: "https://rukminim1.flixcart.com/image/416/416/jjkbhjk0/kit/e/z/f/cricket-world-storm-red-premium-nine-9-item-most-essential-original-imaf6v6vwhzbwnyr.jpeg?q=70",
      productName: "Sale Item ",
      price5: "$50.00", price6: "$25.00",
      button: "Add Cart",
      sale: "Sale"
    },
    {
      productImage:
        "https://dillibazar.in/wp-content/uploads/FB_IMG_1449484704641.jpg",
      productName: "Fancy Product",
      price: "$120.00 - $280.00",
      button: "Add Cart"
    },
    {
      productImage:
        "https://us.123rf.com/450wm/serezniy/serezniy2103/serezniy210389252/166508957-different-modern-devices-on-dark-background.jpg?ver=6",
      productName: "Special Item",
      span: "⭐",
      price7: "$20.00", price8: "$18.00",
      button: "Add Cart",
      sale: "Sale"
    },
    {
      productImage:
        "https://www.notebookcheck.net/fileadmin/_processed_/b/1/csm_teaser_87a40a99d2.jpg",
      productName: "Popular Item",
      span: "⭐",
      price: "$40.00",
      button: "Add Cart"
    },
  ];
  const [count, setcount] = useState(0)
  return (

    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Start Bootstrap</a>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#!">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <ul className="dropdown-menu" aria-aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">All Products</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">Popular Items</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">New Arrivals</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <form className="d-flex">
          <button className="btn btn-outline-dark" type="submit">
            <span className=" badge bg-dark text-white ms-1">CART</span>
            <span className="  badge bg-dark text-white ms-1 rounded-pill">{count}</span>
          </button>
        </form>
      </nav>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in Style</h1>
            <p className="lead fw-normal text-white-50 mb-0 ">With this shop hompeage template</p>
          </div>
        </div>
      </header>

      <div className="card-container">
        {data.map((prod, idx) => <Cards
          idx={idx}
          prod={prod}
          setcount={setcount}
          count={count}
         
        />)}
      </div>
    </div>
  );
}
function Cards({ prod, idx, setcount, count }) {
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
