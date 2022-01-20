import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {useForm} from "react-hook-form";


function Summary() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [modalShow, setModalShow] = useState(false);
  const {register,handleSubmit,reset} = useForm();

  const Submit = async(data) => {
    setModalShow(false)
    console.log(data);
    reset()
  }
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Book Movie Ticket
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Form onSubmit = {handleSubmit(Submit)}>
             <Row>
               <Col className = "mt-2">
                   <Form.Label>Movie Name</Form.Label>
                   <Form.Control
                      type="text"
                     
                      value = {movDetails.show.name}
                      name = "name"
                      {...register('name')}
                      style={{ border: "1.5px solid black" }}
                      readOnly
                  />
               </Col>

               <Col className = "mt-2">
                   <Form.Label>Movie Status</Form.Label>
                   <Form.Control
                      type="text"
                      
                      name = "movieStatus"
                      value = {movDetails.show.status}
                      {...register('movieStatus')}
                      style={{ border: "1.5px solid black" }}
                      readOnly
                  />
               </Col>
             </Row>

             <Row>
               <Col className = "mt-2">
                   <Form.Label>Premiered Date</Form.Label>
                   <Form.Control
                      type="text"
                     
                      name = "premieredDate"
                      value = {movDetails.show.premiered}
                      {...register('premieredDate')}
                      style={{ border: "1.5px solid black" }}
                      readOnly
                  />
               </Col>

               <Col className = "mt-2">
                   <Form.Label>Customer Name </Form.Label>
                   <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name = "customerName"
                     
                      {...register('customerName')}
                      style={{ border: "1.5px solid black" }}
                      
                  />
               </Col>
             </Row>
             
             <Row>
               <Col className = "mt-2">
                   <Form.Label>Email*</Form.Label>
                   <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name = "email"
                      {...register('email')}
                      style={{ border: "1.5px solid black" }}
                  />
               </Col>

               <Col className = "mt-2">
                   <Form.Label>Phone No*</Form.Label>
                   <Form.Control
                      type="number"
                      placeholder="Enter Phone No."
                      name = "phoneNumber"
                      {...register('phoneNumber')}
                      style={{ border: "1.5px solid black" }}
                  />
               </Col>
             </Row>
             
             <Modal.Footer>
                <Button type="submit">Submit</Button>
            </Modal.Footer>

           </Form>
          
           </Modal.Body>
       
      </Modal>
    );
  }

  let movID = searchParams.get("id");
  console.log(movID);

  let movDetails = JSON.parse(localStorage.getItem(movID));
  console.log(movDetails.show.summary);

  return (
    <Container fluid style = {{height: '100vh',maxHeight:'100vh', background: "#ADD8E6"}}>
      <Row className="d-flex justify-content-center align-content-center  w-75 mx-auto" style={{position:"relative",top:"50%",transform: 'translateY(-50%)'}}>
        <Col >
          <Card className = "d-flex flex-row okay"  style={{height: 'auto', width: 'auto', border:"10px solid black"}}>
            <Card.Img variant="top" src={movDetails.show.image.medium} className = " p-2" style={{minHeight: '100%', width: '50rem'}}/>
            <Card.Body>
              <Card.Title style = {{fontWeight:"bold" , textAlign:"center" , fontSize: "30px"}}>{movDetails.show.name}</Card.Title>
              <Card.Text className = "mt-4 w-100 mx-auto" dangerouslySetInnerHTML={{__html: `${movDetails.show.summary}`}}>
                 
              </Card.Text>
              <Card.Text className = "mt-5 ">
                  <span style = {{fontWeight:"bold"}}>Genres :</span> {movDetails.show.genres.join(" | ")}
                  <br/>
                  <span style = {{fontWeight:"bold"}}>Status :</span> {movDetails.show.status}
                  <br/>
                  <span style = {{fontWeight:"bold"}}>Premiered :</span> {movDetails.show.premiered}
                  <br/>
                  {movDetails.show.officialSite!=null?<div> <span style = {{fontWeight:"bold"}}>Official Site : </span><a href = {movDetails.show.officialSite}>{movDetails.show.officialSite}</a> </div> : <div><span style = {{fontWeight:"bold"}}>Ofiicial Site : </span>null</div>}
                  
                  {movDetails.show.network!=null?<div> <span style = {{fontWeight:"bold"}}>Country : </span> {movDetails.show.network.country.name}</div> : <div><span style = {{fontWeight:"bold"}}>Country : </span>null</div>}
                  {movDetails.show.schedule!=null?<div> <span style = {{fontWeight:"bold"}}>Schedule : </span> {movDetails.show.schedule.days} at {movDetails.show.schedule.time} </div> : <div><span style = {{fontWeight:"bold"}}>Schedule : </span>show ended</div>}
              </Card.Text>
              <div className = " d-flex justify-content-center mt-5" >
                <Button variant="dark" onClick={() => setModalShow(true)} style = {{fontWeight:"bold", background:"red"}}>Book Now!</Button>
              </div>
              
            </Card.Body>
          </Card>
          </Col>
      </Row>
      <>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    </Container>
  );
}

export default Summary;
