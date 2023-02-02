import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom"


function ShowNames() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const response = await axios.get(
      "https://api.tvmaze.com/search/shows?q=all"
    );

    // console.log(response.data);
    console.log(response.data)
    setData(response.data);
  }, []);

  // console.log(data);

  for(let i = 0; i<data.length; i++)
  {
      localStorage.setItem(data[i].show.id, JSON.stringify(data[i]));
  }

   

  return (
    <Container fluid style = {{background:"linear-gradient(to right, #2193b0, #6dd5ed)"}}>
      <Row>
          <h1 className = "text-center text-white my-5 ">AMERICAN SHOWS</h1>
        {data.map((mov) => (
          <Col lg={3} md={4} sm={6} xs={6} className = "d-flex justify-content-center mb-5 "> 
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={mov.show?.image?.medium} />
              <Card.Body>
                <Card.Title className = "text-center">Name : {mov.show.name}</Card.Title>
                <Card.Title className = "text-center">Type : {mov.show.type}</Card.Title>
                <Card.Title className = "text-center">Language : {mov.show.language}</Card.Title>
                <Card.Title className = "text-center">Genres : {mov.show.genres.join(" | ")}</Card.Title>
               
                {/* <Button variant="primary" style = {{marginLeft : "50px"}} onClick={event =>  window.location.href='/summary'}>Summary Details</Button> */}

                <Link
                className="btn  d-flex justify-content-center"
                to={{
                    pathname: `/summary?id=${mov.show.id}`,
                    
                }}
                style = {{background:"#00008b", color:"white"}}
        >
          Summary
        </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ShowNames;
