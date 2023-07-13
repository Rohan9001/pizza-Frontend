import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Who we are ?</h1>
        <p>
          Welcome to our pizza delivery website! We are a dedicated team of
          pizza enthusiasts who are passionate about delivering delicious pizzas
          right to your doorstep. We understand that pizza is more than just a meal—it's an experience.
          That's why we strive to provide you with the best possible pizza delivery service.

          Our team consists of skilled chefs who handcraft each pizza with care and attention to detail.
          We use only the freshest ingredients, including locally sourced produce and high-quality meats.
          Whether you're a fan of classic Margherita or adventurous with toppings,
          we have a wide variety of options to satisfy your pizza cravings.

          We take pride in our fast and reliable delivery service.
          Our delivery drivers are friendly, professional, and committed
          to ensuring that your pizza arrives piping hot and on time.
          We understand that prompt delivery is essential, especially when hunger strikes!<br /><br />
          Customer satisfaction is our top priority. We value your feedback and strive to continually
          improve our service to meet your expectations. Ordering from our website is easy and convenient,
          allowing you to customize your pizza.

          So sit back, relax, and let us take care of your pizza cravings.
          We are here to make your pizza delivery experience enjoyable, convenient,
          and absolutely delicious. Thank you for choosing our pizza delivery website,
          and we look forward to serving you!

        </p>
        <h1>Our Speciality</h1>
        <Row>
          <Col md={6}>
            <p>
              At our pizza delivery website, our specialty lies in creating mouthwatering and innovative pizzas
              that are sure to tantalize your taste buds. We pride ourselves on offering unique
              flavor combinations and using the freshest ingredients to deliver an exceptional pizza experience.<br />

              Here are some highlights of our specialty pizzas:<br />
              <ul>
                <li>Gourmet Pizzas: Our chefs have crafted a selection of gourmet pizzas
                  that go beyond the ordinary. From truffle-infused creations to artisanal
                  cheese blends, these pizzas are designed to bring a touch of elegance and
                  sophistication to your dining experience.
                </li>
                <li>
                  Signature Pizzas: Our signature pizzas are carefully curated and designed
                  to showcase the best of our culinary expertise. These pizzas feature a perfect
                  balance of flavors and are made with premium ingredients, ensuring a truly memorable
                  eating experience.
                </li>
              </ul>



            </p>
          </Col>
          <Col md={6}>
            <p>
              <ul>
                <li>
                  Customizable Options: We believe in catering to individual preferences,
                  which is why we offer a wide range of toppings, sauces, and crust options
                  to create your own personalized pizza masterpiece. Whether you're a fan of classic
                  combinations or love experimenting with unique flavors, our customization options
                  have got you covered.
                </li>
                <li>
                  Vegan Pizzas: We understand the importance of catering
                  to various dietary requirements. That's why we offer vegan and gluten-free
                  pizza options, made with specially selected ingredients to ensure that
                  everyone can enjoy a delicious pizza, regardless of dietary restrictions.
                </li>
                <li>
                  Seasonal Specials: To keep things fresh and exciting, we introduce seasonal
                  specials that reflect the flavors of the season. These limited-time offerings
                  feature unique ingredients and flavor profiles that celebrate the best of each season.
                </li>
              </ul>
            </p>
          </Col>
        </Row>
        <Row>
          <h1>Our Chef</h1>
          <Col md={6}>
            Chef Ravi Kapoor<br />
            <ul>
              <li>
                Biography: Chef Ravi Kapoor is a highly skilled Indian culinary expert with a
                deep understanding of regional flavors and spices. Having trained under
                renowned chefs across India, Ravi's passion for Indian cuisine is reflected
                in his diverse repertoire of traditional and contemporary dishes. His culinary
                journey has taken him from street food stalls to prestigious fine dining establishments,
                where he continues to push the boundaries of Indian gastronomy.
              </li>
              <li>
                Signature Pizzas:
                <ul>
                  <li>
                    Butter Chicken Delight: A fusion of Indian and Italian flavors,
                    this pizza features succulent tandoori chicken tikka, creamy butter
                    chicken sauce, mozzarella cheese, diced onions, and a sprinkle of fresh cilantro.
                  </li>
                  <li>
                    Paneer Tikka Masala: Experience the richness of Indian cottage cheese marinated
                    in fragrant spices, grilled to perfection, and topped on a pizza with a spicy
                    tomato-based masala sauce, bell peppers, red onions, and a touch of grated paneer.
                  </li>
                </ul>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            Chef Priya Sharma
            <ul>
              <li>
                Biography: Chef Priya Sharma is a culinary innovator who combines her passion
                for Indian cuisine with global influences. With a background in molecular gastronomy
                and a deep appreciation for local ingredients, Priya creates culinary masterpieces that
                are both visually stunning and bursting with flavor. She draws inspiration from her
                extensive travels across India, exploring diverse regional cuisines and incorporating
                unique elements into her creations.
              </li>
              <li>
                Signature Pizzas:
                <ul>
                  <li>
                    Tikka Masala Margherita: A delightful fusion of Indian and Italian flavors, this pizza
                    features a creamy tikka masala sauce, fresh mozzarella, cherry tomatoes, basil
                    leaves, and a sprinkle of roasted cumin seeds.
                  </li>
                  <li>
                    Palak Paneer Supreme: A vegetarian delight that showcases the richness of creamy spinach
                    (palak) sauce, marinated paneer cubes, roasted garlic, diced tomatoes, and a sprinkle of
                    kasuri methi (dried fenugreek leaves).
                  </li>
                </ul>
              </li>
            </ul>
          </Col>

        </Row>
      </Container>
    </>
  );
};

export default About;
