import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Policy = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
      <Row>
          <Col md={1}></Col>
          
          <Col md={10}>
          <h1 >Terms and policy</h1>     
            <p>
              <ol>
                <li>
                Ordering and Delivery:
                <ul>
                  <li>
                  Orders: All orders placed through our website are subject to acceptance and availability.
                   We reserve the right to refuse or cancel any order for any reason at any time.
                  </li>
                  <li>
                  Delivery: We strive to deliver your order within the estimated delivery time. However, delivery
                   times may vary based on factors beyond our control, such as weather conditions or unforeseen circumstances.
                  </li>
                  <li>
                  Delivery Areas: We have specific delivery areas. Please check our website or contact our customer
                   support team to verify if your location is within our delivery radius.
                  </li>
                </ul> 
                </li>
                <br />
                <li>
                Pricing and Payment:
                <ul>
                  <li>
                  Prices: All prices displayed on our website are in indian ruppees
                  and are inclusive of applicable taxes unless stated otherwise.
                  </li>
                  <li>
                  Payment: We accept various payment methods, including credit/debit cards and online payment platforms.
                   By placing an order, you authorize us to charge the provided payment method for the total amount of your order.
                  </li>
                </ul>
                </li>
                <br />
                <li>
                Refunds and Returns:
                <ul>
                  <li>
                  Refunds: Refunds or replacements for incorrect or unsatisfactory orders will be provided at our discretion.
                   Please contact our customer support team within [X] hours of receiving your order to report any issues.
                  </li>
                  <li>
                  Returns: We do not accept returns of food items for safety and hygiene reasons. If you have any 
                  concerns about the quality or preparation of your order, please contact us immediately.
                  </li>
                </ul>
                </li>
                <br />
                <li>
                Intellectual Property:
                <ul>
                  <li>
                  Website Content: All content on our website, including text, graphics, logos, images,
                   and software, is protected by copyright and intellectual property laws. You may not 
                   reproduce, distribute, or modify any content without our prior written consent.
                  </li>
                  <li>
                  Trademarks: All trademarks, logos, and service marks displayed on our website are the 
                  property of their respective owners. Any unauthorized use of these trademarks is strictly prohibited.
                  </li>
                </ul>
                </li>
                <br />
                <li>
                Privacy Policy:
                <ul>
                  <li>
                  Data Collection: We collect and process personal information in accordance with our Privacy Policy.
                   By using our website, you consent to the collection, use, and storage of your personal information 
                   as described in our Privacy Policy.
                  </li>
                </ul>
                </li>
                <br />
                <li>
                Limitation of Liability:
                <ul>
                  <li>
                  We strive to provide accurate and up-to-date information on our website. However, we make
                 no representations or warranties of any kind, express or implied, regarding the accuracy,
                  reliability, or completeness of the information provided.
                  </li>
                <li>
                We shall not be liable for any direct, indirect, incidental, consequential, or punitive 
                damages arising out of your access or use of our website or any errors or omissions in the content.
                </li>
                </ul>
                </li>
                <br />
                <li>
                Governing Law and Jurisdiction:
                <ul>
                  <li>
                  These terms and conditions are governed by the laws of India.
                  </li>
                  <li>
                  Any disputes arising from or related to these terms and conditions, including but not 
                  limited to disputes regarding the interpretation, validity, or termination of the agreement,
                   shall be subject to the exclusive jurisdiction of the courts in India.
                  </li>
                  <li>
                  Both parties agree to submit to the personal jurisdiction of the courts mentioned above
                   for resolving any such disputes.
                  </li>
                </ul>
                </li>
              </ol>
              <div>
              By using our website, you acknowledge that you have read, understood, and agreed to these terms and conditions. If you do not agree with any 
              part of these terms, please refrain from using our website.
              </div>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Policy;
