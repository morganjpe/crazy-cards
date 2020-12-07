import tw, { styled } from "twin.macro";

const Header = () => (
  <Header.Container>
    <Header.Inner>
      <Header.Title>Crazy Cards</Header.Title>
    </Header.Inner>
  </Header.Container>
);

Header.Container = styled.header`
  /* background: linear-gradient(135deg, #42e695 0%, #3bb2b8 100%); */
`;

Header.Inner = styled.div`
  ${tw`mx-auto container py-10 bg-blue-900`}
  padding-left: 15px;
`;

Header.Title = styled.h1`
  ${tw`text-4xl font-extrabold tracking-tight leading-relaxed text-white`}/* background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: var(--padding);
  padding-right: var(--padding);
  background-image: linear-gradient(135deg, #42e695 0%, #3bb2b8 100%);
  position: relative;
  z-index: 1;
  display: inline-block;
  padding-right: 5px; */
`;

export default Header;
