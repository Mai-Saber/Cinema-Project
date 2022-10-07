import { useForm } from "react-hook-form";
import "./form.css";

function Form(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="mainDivForLoginScreen">
        <div className="login-content">
          <h1 className="login-title">Welcome to our Cinema</h1>
          <p className="note"> (For now write any email and password)</p>
        </div>
        <div className="form-box">
          <form
            onSubmit={handleSubmit((data) =>
              sessionStorage.setItem(
                "email",
                data.email
              )((window.location = "/movies"))
            )}
            // onSubmit={handleSubmit((data) =>
            //   data.email !== null || data.password !== null || data !== null
            //     ? JSON.stringify(sessionStorage.setItem("email", data.email))(
            //         (window.location = "/movies")
            //       )
            //     : null
            // )}
          >
            <div className="form-inputs">
              <input
                {...register("email", { required: true, type: "password" })}
                type="email"
                placeholder="email"
              />
              {errors.email && (
                <p className="alert alert-danger">Email is required.</p>
              )}
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="password"
              />
              {errors.password && (
                <p className="alert alert-danger">Password is required.</p>
              )}
            </div>
            <input className="button" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
