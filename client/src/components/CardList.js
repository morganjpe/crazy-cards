import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import { BeatLoader } from "react-spinners";

import Card from "./Card";

const CardList = ({ cards }) => {
  const renderedCards = cards.filtered.length ? cards.filtered : cards.cache;

  return (
    <CardList.Container>
      <h2>
        {cards.filtered.length
          ? "You are eligible for..."
          : "Use the eligibiliy calculator"}
      </h2>
      {renderedCards.length ? (
        <ol>
          {renderedCards.map((card) => (
            <Card
              status={cards.filtered.length}
              key={`card-${card.id}`}
              card={card}
            />
          ))}
        </ol>
      ) : (
        <div className="loader" style={{ margin: "0 auto" }}>
          <BeatLoader color={tw`bg-blue-400`} />
        </div>
      )}
    </CardList.Container>
  );
};

CardList.Container = styled.section`
  ${tw`w-full lg:w-3/4 bg-white flex flex-wrap content-start border-l border-gray-200 relative`}
  height: 1131px;
  padding: 15px;

  h2 {
    ${tw`w-full mb-4 text-xl font-bold`}
  }

  .loader {
    ${tw`flex justify-center absolute`}
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
  }
`;

const cardType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    apr: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    BTOD: PropTypes.number.isRequired,
    POD: PropTypes.number.isRequired,
    creditAvailable: PropTypes.number.isRequired,
  })
);

CardList.propTypes = {
  cards: PropTypes.shape({
    cache: cardType || PropTypes.array,
    filtered: cardType || PropTypes.array,
  }).isRequired,
};

export default CardList;
