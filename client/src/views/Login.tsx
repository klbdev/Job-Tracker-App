import LoginForm from "../components/LoginForm";
import BuildingBackground from "../components/BuildingBackground";
import HomeCard from "../components/HomeCard";

function Login() {
  return (
    <>
      <BuildingBackground>
        <HomeCard maxWidth="600px">
        <LoginForm />
        </HomeCard>
      </BuildingBackground>
    </>
  );
}

export default Login;