import { Container, Row, Col } from "reactstrap";
import BannerImg from "../assets/images/banner.webp";
import BannerSide from "../assets/images/banner_side.webp";
import Button from '../UI_components/Button'
import StarIcon from '../assets/images/icons/star.svg'
import StarIcon2 from '../assets/images/icons/star_square.svg'
import { FinancialStabilityIcon, ClientsIcon, CustomerRatingIcon, PlayIcon } from "../data/icons"
import { Link } from "react-router-dom"
const Banner = () => {
  return (
    <section className="section_banner">
      <Container fluid>
        <Row>
          <Col lg={6} sm={12} className="text-section">
            <div>
              <span> <img src={StarIcon} alt="star" /> Google Rating
                {
                  Array.from({ length: 5 }).map((_, index) => (
                    <img src={StarIcon2} alt="star" key={index} />
                  ))
                }
              </span>
              <h1>Your trusted partner <br /> for compliance business needs</h1>
              <div className="line"></div>
              <p>
                An online business compliance platform that helps entrepreneurs
                and other individuals with various <strong> registrations, tax filings</strong>, and other <strong>legal matters</strong>.
              </p>
              <div className="stars">
                <div>
                  <div>
                    <CustomerRatingIcon />
                  </div>
                  <div>
                    <h5>4.5+</h5>
                    <p>Customer Rating</p>
                  </div>
                </div>

                <div>
                  <div>
                    <ClientsIcon />
                  </div>
                  <div>
                    <h5>20,000+</h5>
                    <p>Clients</p>
                  </div>
                </div>
                <div>
                  <div>
                    <FinancialStabilityIcon />
                  </div>
                  <div>
                    <h5>99.8%</h5>
                    <p>Financial Stability</p>
                  </div>
                </div>
              </div>
              <div className="">
                <Button color={"var(--blue-color)"} text={"Talk An Expert"} />
                <Button text="See how it works" color="transparent" textcolor={"var(--text-dark-3)"} previcon={<PlayIcon />} />
              </div>
            </div>
          </Col>
          <Col lg={6} sm={12} className="image-section mt-auto">
            <div className="d-flex align-items-baseline">
              <img
                src={BannerImg}
                alt="Business Compliance"
                className="img-fluid"
              />
              <img
                src={BannerSide}
                alt="Business Compliance"
                className="img-fluid"
              />
            </div>

          </Col>
        </Row>
      </Container>

      <div className="vertical-buttons">
        <Link to="/annual-compliance" className="btn btn-light">
          Annual Compliance
        </Link>
        <Link to="/payroll-services" className="btn btn-light">
          Payroll Services
          </Link>
        <Link to="/company-formation" className="btn btn-light">
          Company Formation
        </Link>
        <Link to="/annual-compliance" className="btn btn-light">
          Annual Compliance
        </Link>
      </div>
    </section>
  );
};

export default Banner;