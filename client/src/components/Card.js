/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";

import tw, { styled, theme } from "twin.macro";

const Card = ({ card, status }) => {
  const { apr, name, BTOD, POD, creditAvailable } = card;

  /**
   * Creates a gradient string based on theme properties
   * @returns {string} - gradient string
   */
  const createGradient = () => {
    const path = "linear-gradient(to top right";

    switch (name) {
      case "Student Life":
        return `${path}, ${theme("colors.gradientDirty1")}, ${theme(
          "colors.gradientDirty2"
        )})`;
      case "Anywhere Card":
        return `${path}, ${theme("colors.gradientRed1")}, ${theme(
          "colors.gradientRed2"
        )})`;
      case "Liquid Card":
        return `${path}, ${theme("colors.gradientGreen1")}, ${theme(
          "colors.gradientGreen2"
        )})`;
      default:
        return "";
    }
  };

  return (
    <Card.Container status={status}>
      <Card.Title>{name}</Card.Title>
      <Card.CreditCard gradient={createGradient()}>
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
  ${({ status }) => {
    if (status === 0) {
      return tw`border-gray-200 border bg-white`;
    } else {
      return tw`border-green-200 border bg-green-50`;
    }
  }}
  padding: 15px 15px 25px 15px;
  border-radius: 5px;
  margin-bottom: 30px;

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  @media (min-width: ${theme`screens.md`}) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (min-width: ${theme`screens.lg`}) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

Card.Title = styled.h3`
  ${tw`text-2xl font-bold leading-loose mb-2`}
  grid-column: 1 / 4;
  grid-row: 1;
  text-align: center;

  @media (min-width: ${theme`screens.md`}) {
    grid-column: 1 / 7;
    grid-row: 1;
    text-align: left;
  }

  @media (min-width: ${theme`screens.lg`}) {
    grid-column: 1 / 10;
    grid-row: 1;
  }
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
  margin: 0 auto;

  @media (min-width: ${theme`screens.md`}) {
    margin: initial;
    grid-row: 2 / span 2;
    grid-column: 1 / 4;
  }

  @media (min-width: ${theme`screens.lg`}) {
    margin: initial;
    grid-row: 2 / span 2;
    grid-column: 1 / 4;
  }

  width: 100%;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  width: 210px;
  height: 130px;
  background: ${({ gradient }) => gradient};
  border: 1px solid rgba(255, 255, 255, 0.5);

  &::after {
    content: "";
    top: 10px;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${({ gradient }) => gradient};
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  grid-row: 4 / span 3;
  grid-column: 1 / 4;

  li {
    width: 50%;
    padding: 30px 15px 0 15px;
  }

  @media (min-width: ${theme`screens.md`}) {
    grid-row: 4 / span 3;
    grid-column: 1 / 7;
    flex-wrap: nowrap;
    li {
      width: 100%;
    }
  }

  @media (min-width: ${theme`screens.lg`}) {
    grid-row: 2;
    grid-column: 4 / 12;
    flex-wrap: nowrap;
    li {
      width: 100%;
    }
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
  status: PropTypes.number.isRequired,
};

export default Card;
