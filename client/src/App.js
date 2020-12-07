import { useState, useEffect } from "react";
import axios from "axios";
import { isEmpty } from "lodash";

// components
import Page from "./components/Page";
import Content from "./components/Content";
import CardList from "./components/CardList";
import Form from "./components/Form";

const App = () => {
  const [eligiblityCheck, setEligibilityCheck] = useState({});

  const [cards, setCards] = useState({
    cache: [],
    filtered: [],
  });

  const filterCache = () => {
    return cards.cache.filter(({ successCriteria }) => {
      if (isEmpty(successCriteria)) return true;

      if (successCriteria?.income <= eligiblityCheck.income) {
        return true;
      }

      if (
        successCriteria?.employmentStatus === eligiblityCheck.employmentStatus
      ) {
        return true;
      }

      return false;
    });
  };

  useEffect(() => {
    if (!cards.cache.length) {
      axios.get("http://localhost:7000/cards").then(({ data }) => {
        setCards({
          cache: data,
          filtered: data,
        });
      });
    }

    if (!isEmpty(eligiblityCheck)) {
      setCards({ ...cards, filtered: filterCache() });
    }
  }, [eligiblityCheck]);

  return (
    <Page>
      <Content>
        <Form setEligibilityCheck={setEligibilityCheck} />
        <CardList cards={cards.filtered} />
      </Content>
    </Page>
  );
};

export default App;
