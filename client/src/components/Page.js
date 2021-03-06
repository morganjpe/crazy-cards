import { GlobalStyles } from "twin.macro";
import { injectGlobal } from "@emotion/css";
import tw from "twin.macro";

import Header from "./Header";

injectGlobal`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700;800&display=swap");
  body {
    font-family: "Inter", sans-serif;
    ${tw`bg-gray-50`}
  }
`;

const Page = ({ children }) => {
  return (
    <>
      <Header />
      <GlobalStyles />
      {children}
    </>
  );
};

export default Page;
