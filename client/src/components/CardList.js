import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import { BeatLoader } from "react-spinners";

import Card from "./Card";

const CardList = ({ cards }) => {
  return (
    <CardList.Container>
      {cards.length ? (
        <ol>
          {cards.map((card) => (
            <Card key={`card-${card.id}`} card={card} />
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
  ${tw`w-full lg:w-3/4 bg-white flex border-l border-gray-200 relative`}
  height: 1131px;
  padding: 15px;

  .loader {
    ${tw`flex justify-center absolute`}
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
  }
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
