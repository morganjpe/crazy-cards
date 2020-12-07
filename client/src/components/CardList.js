import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

import Card from "./Card";

const CardList = ({ cards }) => {
  return (
    <>
      <CardList.Container>
        {cards.map((card) => (
          <Card key={`card-${card.id}`} card={card} />
        ))}
      </CardList.Container>
    </>
  );
};

CardList.Container = styled.ol`
  ${tw`w-full md:w-3/4 bg-gray-50 flex border-l border-gray-200`}
  flex-flow: column;
  height: calc(100vh - 154px);
  padding: 15px;
`;

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      apr: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      BTOD: PropTypes.number.isRequired,
      POD: PropTypes.number.isRequired,
      creditAvailable: PropTypes.number.isRequired,
    })
  ),
};

export default CardList;
