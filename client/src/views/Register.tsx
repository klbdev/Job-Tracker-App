import RegisterForm from "../components/RegisterForm";
import BuildingBackground from "../components/BuildingBackground";
import HomeCard from "../components/HomeCard";

function Register() {
  return (
    <>
      <BuildingBackground>
        <HomeCard maxWidth="600px">
        <RegisterForm />
        </HomeCard>
      </BuildingBackground>
    </>
  );
}

export default Register;