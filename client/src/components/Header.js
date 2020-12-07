import tw, { styled } from "twin.macro";

const Header = () => (
  <header>
    <Header.Inner>
      <Header.Title>Crazy Cards</Header.Title>
    </Header.Inner>
  </header>
);

Header.Inner = styled.div`
  ${tw`mx-auto container py-10 bg-blue-900`}
  padding-left: 15px;
`;

Header.Title = styled.h1`
  ${tw`text-4xl font-extrabold tracking-tight leading-relaxed text-white`}
`;

export default Header;
