import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>

            <p>
            We'd love to hear from you! Whether you have a question, feedback,
             or simply want to get in touch, feel free to reach out using any of the following methods:
             <ol>
              <li>
                Email:
                <ul>
                  <li>
                  General Inquiries: Send an email for any general 
                  inquiries or information you may need.
                  </li>
                  <li>
                  Customer Support: If you require assistance with an order or have any
 specific questions related to our products or services, please email 
 for dedicated customer support.
                  </li>
                </ul>
              </li>
              <li>
                Phone:
                <ul>
                  <li>
                  Customer Support Hotline: Call our customer support hotline number
                  to speak with one of our representatives. Our team is available during our
                   business hours to assist you with any inquiries or concerns you may have.
                  </li>
                </ul>
              </li>
              <li>
              Social Media:
              <ul>
                <li>
                Connect with us on social media platforms such as Facebook, Twitter, and Instagram.
                 Follow our accounts and send us a direct message. We'll be happy to engage with you
                  and address any questions or comments you may have.
                </li>
              </ul>
              </li>
             </ol>
             Please note that our customer support team aims to respond to all inquiries promptly.
              However, response times may vary based on the volume of requests we receive. We appreciate 
              your patience and assure you that we value your feedback and strive to provide the best service 
              possible.
            </p>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --- Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>0123-456789</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Call</td>
                  <td>1234567890</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>Help@homepizza.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/farmhouse.jpg" 
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
