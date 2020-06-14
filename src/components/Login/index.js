import React, { useContext } from "react";
import { UserContext } from "../../context/user";
import { Modal, Button } from "react-rainbow-components";
import { LoginWrapper } from "./LoginStyle";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const {
    registerin,
    loginIsOpen,
    handleLoginClose,
    handleRegisterOpen,
    handleLoginSubmit,
  } = useContext(UserContext);

  const { register, errors, handleSubmit } = useForm();

  const notify = () => {
    toast.error(
      <div>
        <h6 style={{ fontSize: "16px" }}>Error, wrong email or password!</h6>
      </div>,
      {
        draggable: true,
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      }
    );
  };

  const onSubmit = (data, e) => {
    // limpiar campos
    e.target.reset();

    handleLoginClose();
    const { passwordlogin, emaillogin } = data;
    const { passwordregistro, emailregistro } = registerin;
    if (passwordlogin !== passwordregistro || emaillogin !== emailregistro) {
      notify();
    } else {
      handleLoginSubmit();
    }

    //console.log(passwordregistro, passwordlogin);
    //console.log(emailregistro, emaillogin);
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <Modal
        isOpen={loginIsOpen}
        title="Sign In"
        onRequestClose={() => {
          handleLoginClose();
        }}
      >
        <LoginWrapper>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <label htmlFor="emaillogin">
              <strong>Email</strong>
            </label>
            <input
              placeholder="johndoe@gmail.com"
              type="email"
              id="emaillogin"
              name="emaillogin"
              ref={register({
                required: {
                  value: true,
                  message: "Email is required!",
                },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email address!",
                },
              })}
            />
            <span style={{ color: "#FE4849" }}>
              <strong>{errors.emaillogin && errors.emaillogin.message}</strong>
            </span>
            <br />
            <br />
            <label htmlFor="passwordlogin">
              <strong>Password</strong>
            </label>
            <input
              placeholder="*************"
              type="password"
              id="passwordlogin"
              name="passwordlogin"
              ref={register({
                required: {
                  value: true,
                  message: "Password is required!",
                },
                maxLength: {
                  value: 20,
                  message:
                    "Your password cannot contain more than 20 characters!",
                },
                minLength: {
                  value: 4,
                  message: "Your password need minmium 4 charcaters!",
                },
              })}
            />
            <span style={{ color: "#FE4849" }}>
              <strong>
                {errors.passwordlogin && errors.passwordlogin.message}
              </strong>
            </span>
            <br />
            <br />
            <p>
              Need To Register{" "}
              <strong
                style={{ color: "#3a2fd0" }}
                onClick={() => {
                  handleRegisterOpen();
                }}
              >
                Click Here
              </strong>
            </p>
            <br />
            <br />
            <div className="rainbow-flex rainbow-justify_end">
              <Button type="submit" label="Login" variant="brand" />
            </div>
          </form>
        </LoginWrapper>
      </Modal>
    </React.Fragment>
  );
}
