import { useState, useEffect } from "react";
import axios from "axios";
import { isEmpty } from "lodash";

// components
import Page from "./components/Page";
import Content from "./components/Content";
import CardList from "./components/CardList";
import Form from "./components/Form";

const MockCards = [
  {
    id: 1,
    name: "Student Life",
    apr: 18.9,
    BTOD: 0,
    POD: 6,
    creditAvailable: 1200,
    successCriteria: { employmentStatus: "student" },
  },
  {
    id: 2,
    name: "Anywhere Card",
    apr: 33.9,
    BTOD: 0,
    POD: 6,
    creditAvailable: 300,
    successCriteria: {}, // any
  },
  {
    id: 3,
    name: "Liquid Card",
    apr: 33.9,
    BTOD: 12,
    POD: 6,
    creditAvailable: 3000,
    successCriteria: { income: 16000 },
  },
];

const App = () => {
  const [eligiblityCheck, setEligibilityCheck] = useState({});
  const [cards, setCards] = useState(MockCards);

  useEffect(() => {
    if (!isEmpty(eligiblityCheck)) {
      setCards(
        MockCards.filter(({ successCriteria }) => {
          if (isEmpty(successCriteria)) return true;

          if (successCriteria?.income <= eligiblityCheck.income) {
            return true;
          }

          if (
            successCriteria?.employmentStatus ===
            eligiblityCheck.employmentStatus
          ) {
            return true;
          }

          return false;
        })
      );

      console.log(cards);
    }
  }, [eligiblityCheck]);

  return (
    <Page>
      <Content>
        <Form setEligibilityCheck={setEligibilityCheck} />
        <CardList cards={cards} />
      </Content>
    </Page>
  );
};

export default App;
