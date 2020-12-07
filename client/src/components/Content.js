import tw, { styled } from "twin.macro";

const Content = ({ children }) => {
  return <Content.Container>{children}</Content.Container>;
};

Content.Container = styled.section`
  ${tw`mx-auto container flex flex-wrap`}
  height: 100%;
`;

export default Content;
