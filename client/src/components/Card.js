/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

const Card = ({ card, status }) => {
  const { apr, name, BTOD, POD, creditAvailable } = card;
  return (
    <Card.Container>
      <Card.Title>{name}</Card.Title>
      <Card.Eligible>
        {status ? "You are eligible" : "Check Eligiblity"}
      </Card.Eligible>
      <Card.CreditCard>
        <Card.CreditCard.Logo>
          <span />
          <span />
        </Card.CreditCard.Logo>
      </Card.CreditCard>
      <Card.List>
        <li>
          <p tw="text-sm leading-snug text-gray-400">
            Balance Transfer offer duration
          </p>
          <h6 tw="leading-loose font-bold m-1">{BTOD} Months</h6>
        </li>
        <li>
          <p tw="text-sm leading-snug text-gray-400">
            0% Purchase offer duration
          </p>
          <h6 tw="leading-loose font-bold m-1">{POD} Months</h6>
        </li>
        <li>
          <p tw="text-sm leading-snug text-gray-400">
            Representative % APR (variable)
          </p>
          <h6 tw="leading-loose font-bold m-1">{apr}%</h6>
        </li>
        <li>
          <p tw="text-sm leading-snug text-gray-400">Credit Available</p>
          <h6 tw="leading-loose font-bold m-1">£{creditAvailable}</h6>
        </li>
      </Card.List>
    </Card.Container>
  );
};

Card.Container = styled.li`
  padding: 15px 15px 25px 15px;
  border-radius: 5px;
  border: 1px solid #eee;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin-bottom: 30px;
  background-color: white;
`;

Card.Title = styled.h3`
  ${tw`text-2xl font-bold leading-loose mb-2`}
  grid-column: 1 / 10;
  grid-row: 1;
`;

Card.Eligible = styled.div`
  ${tw`bg-yellow-100 border-yellow-400 flex justify-center items-center border border-dashed text-yellow-600`}
  grid-column: 10 / 13;
  grid-row: 1;
  padding: 5px;
  border-radius: 2px;
`;

Card.CreditCard = styled.div`
  grid-row: 2 / span 2;
  grid-column: 1 / 4;
  width: 100%;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  width: 210px;
  height: 130px;
  background: linear-gradient(135deg, #17ead9 0%, #6078ea 100%);
  border: 1px solid rgba(255, 255, 255, 0.5);

  &::after {
    content: "";
    top: 10px;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(135deg, #17ead9 0%, #6078ea 100%);
    filter: blur(8px);
    opacity: 0.5;
    z-index: -1;
  }
`;

Card.CreditCard.Logo = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;

  span {
    display: block;
    width: 25px;
    height: 25px;
    background: white;
    border-radius: 50%;
    opacity: 0.5;
    border: 1px solid white;
  }
  span:nth-of-type(2) {
    margin-left: -8px;
    opacity: 0.3;
  }
`;

Card.List = styled.ul`
  grid-row: 2 / 4;
  grid-column: 4 / 12;
  display: flex;
  align-items: center;
  li {
    padding: 0 15px;
  }
`;

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    apr: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    BTOD: PropTypes.number.isRequired,
    POD: PropTypes.number.isRequired,
    creditAvailable: PropTypes.number.isRequired,
  }),
  status: PropTypes.bool,
};

export default Card;
