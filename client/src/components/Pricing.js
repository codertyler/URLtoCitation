import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Pricing.css";

export default function Pricing() {
  return (
    <div className="pricing_container">
      <br />
      <h1>
        <b>Choose the right plan for you</b>
      </h1>
      <div className="cards_container">
        <Card border="primary" style={{ width: "13rem" }}>
          <Card.Header>Try out the generator</Card.Header>
          <Card.Body>
            <Card.Title><b>Free</b></Card.Title>
            <h6>0.00 CAD</h6>
            <Button variant="outline-primary">Try it out</Button>
            <br/>
            <br/>

            <Card.Text className="card_text">
              <ul>
                <li>Create 5 Citations</li>
                <li>One citation at a time</li>
                <li>No registration necessary</li>
                <li>APA Style</li>


              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="primary" style={{ width: "13rem" }}>
          <Card.Header>Become our proud user</Card.Header>
          <Card.Body>
          <Card.Title><b>Pro</b></Card.Title>
            <h6>4.99 CAD</h6>
            <Button variant="outline-primary">Get Started</Button>
            <Card.Text className="card_text">
            <br/>
            <ul>
                <li>10,000 citations a month</li>
                <li>Save your citations</li>
                <li>Generate 50 citations at a time</li>
                <li>Any style available</li>

              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="primary" style={{ width: "13rem" }}>
          <Card.Header>Beyond Pro</Card.Header>
          <Card.Body>
            <Card.Title><b>Pro Plus</b></Card.Title>
            <h6>9.99 CAD</h6>
            <Button variant="outline-primary">Get Started</Button>
            <Card.Text className="card_text">
            <br/>
            <ul>
                <li>Unlimited citations</li>
                <li>Save your citations</li>
                <li>Generate 100 citations at a time</li>
                <li>Any style available</li>
                <li>Request to include custom sources</li>


              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="primary" style={{ width: "13rem" }}>
          <Card.Header>Lifetime</Card.Header>
          <Card.Body>
            <Card.Title><b>Lifetime access</b></Card.Title>
            <h6>99.99 CAD</h6>
            <Button variant="outline-primary">Get Started</Button>
            <Card.Text className="card_text">
            <br/>
            <ul>
                <li>Unlimited citations</li>
                <li>Save your citations</li>
                <li>Generate 100 citations at a time</li>
                <li>Any style available</li>
                <li>Request to include custom sources</li>


              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
