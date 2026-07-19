import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert, {type AlertTypes } from "./Alert";

function LoginForm() {
  const [alert, setAlert] = useState<AlertTypes>(null);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const formValues = Object.fromEntries(formData.entries());
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();
      if (response.ok) {
        sessionStorage.setItem("userId", data.user.id);
        sessionStorage.setItem("email", data.user.email);
        sessionStorage.setItem("token", data.token);
        console.log("Login successful.");
        navigate("/dashboard");
        formElement.reset();
      } else {
        setAlert("danger");
        setAlertMessage(data.message);
      }
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };

  return (
    <>
      {alert && <Alert type={alert} onClose={() => setAlert(null)}>{alertMessage}</Alert>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Login</legend>
          <div className="mb-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required
            />
            <small>Never share your password with anyone.</small>
          </div>
          <button type="submit" className="btn btn-secondary">
            Login
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default LoginForm;
