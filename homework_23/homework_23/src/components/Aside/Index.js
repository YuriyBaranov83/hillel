import "./Index.css";
import Text from "../Text/Index";

const Aside = () => {
  return (
    <div className="aside">
      <Text>
        Notice the use of %PUBLIC_URL% in the tags above. It will be replaced
        with the URL of the `public` folder during the build. Only files inside
        the `public` folder can be referenced from the HTML.
      </Text>
      <Text>
        Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running `npm run build`.
      </Text>
    </div>
  );
};

export default Aside;
