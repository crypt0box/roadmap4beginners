import { GetServerSideProps } from "next";
import { withSSRContext } from "aws-amplify";

type ProtectedProps = {
  username: string;
};

function Protected({ username }: ProtectedProps) {
  return <h1>Hello {username} from SSR route!</h1>;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { Auth } = withSSRContext({ req });
  try {
    const user = await Auth.currentAuthenticatedUser();
    return {
      props: {
        authenticated: true,
        username: user.username,
      },
    };
  } catch (err) {
    res.writeHead(302, { Location: "/profile" });
    res.end();
  }
  return { props: {} };
};

export default Protected;
