import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

import "./Carts.css"

const Carts = ({ carts, setCarts }) => {
  return (
    <div className="carts-container">
      <div className="carts-items-container">
        {carts.map((cart) => {
          return (
            <Card key={cart.id} className="carts-card">
              <Card.Img variant="top" src={cart.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{cart.title}</Card.Title>
                <Card.Text>
                  <b>${cart.price.toFixed(2)}</b>
                </Card.Text>
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    setCarts(carts.filter((c) => c.id !== cart.id))
                  }}
                >
                  Remove from Carts
                </Button>
              </Card.Body>
            </Card>
          )
        })}
      </div>
      <h4>
        <span className="carts-summary">
          Item: <span className="badge bg-danger">{carts.length} items</span> -
          Total Price:{" "}
          <span className="badge bg-success">
            ${carts.reduce((prev, cart) => prev + cart.price, 0).toFixed(2)}
          </span>
        </span>
      </h4>
      <span className="badge bg-warning text-black">
        Checkout<i class="bi bi-wallet ms-2"></i>
      </span>
    </div>
  )
}

export default Carts
