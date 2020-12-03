import { GlobalStyles } from "twin.macro";
import { injectGlobal } from "@emotion/css";

injectGlobal`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700&display=swap");

  body {
    font-family: "Inter", sans-serif;
  }
  `;

const Page = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default Page;
