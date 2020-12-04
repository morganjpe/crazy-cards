import Page from "./components/Page";

// components
import Content from "./components/Content";
import CardList from "./components/CardList";
import Form from "./components/Form";

const App = () => {
  const MockCards = [
    {
      id: 1,
      name: "Student Life",
      apr: 18.9,
      BTOD: 0,
      POD: 6,
      creditAvailable: 1200,
    },
    {
      id: 2,
      name: "Anywhere Card",
      apr: 33.9,
      BTOD: 0,
      POD: 6,
      creditAvailable: 300,
    },
    {
      id: 3,
      name: "Liquid Card",
      apr: 33.9,
      BTOD: 12,
      POD: 6,
      creditAvailable: 3000,
    },
  ];

  return (
    <Page>
      <Content>
        <Form />
        <CardList cards={MockCards} />
      </Content>
    </Page>
  );
};

export default App;
