import React, { useContext } from "react";
import { UserContext } from "../../context/user";
import { Modal, Button } from "react-rainbow-components";
import { RegisterWrapper } from "./RegisterStyle";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    registerIsOpen,
    handleRegisterClose,
    handleRegisterSubmit,
    handleLoginOpen,
  } = useContext(UserContext);

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    //console.log(data);
    handleRegisterSubmit(data);

    // limpiar campos
    e.target.reset();
    handleRegisterClose();
    handleLoginOpen();
  };
  return (
    <Modal
      isOpen={registerIsOpen}
      title="Create an account"
      onRequestClose={handleRegisterClose}
    >
      <RegisterWrapper>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <label htmlFor="emailregistro">
            <strong>Email</strong>
          </label>
          <input
            placeholder="johndoe@gmail.com"
            type="email"
            id="emailregistro"
            name="emailregistro"
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
            <strong>
              {errors.emailregistro && errors.emailregistro.message}
            </strong>
          </span>
          <br />
          <br />
          <label htmlFor="passwordregistro">
            <strong>Password</strong>
          </label>
          <input
            placeholder="*************"
            type="password"
            id="passwordregistro"
            name="passwordregistro"
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
              {errors.passwordregistro && errors.passwordregistro.message}
            </strong>
          </span>
          <br />
          <br />
          <label htmlFor="usernameregistro">
            <strong>Username</strong>
          </label>
          <input
            placeholder="John Doe"
            type="text"
            id="usernameregistro"
            name="usernameregistro"
            ref={register({
              required: {
                value: true,
                message: "Username is required!",
              },
              maxLength: {
                value: 20,
                message:
                  "Your username cannot contain more than 20 characters!",
              },
              minLength: {
                value: 4,
                message: "Your username need minmium 4 charcaters!",
              },
            })}
          />
          <span style={{ color: "#FE4849" }}>
            <strong>
              {errors.usernameregistro && errors.usernameregistro.message}
            </strong>
          </span>
          <br />
          <br />
          <p>
            Already a Member{" "}
            <strong
              style={{ color: "#3a2fd0" }}
              onClick={() => {
                handleLoginOpen();
              }}
            >
              Click Here
            </strong>
          </p>
          <br />
          <br />
          <div className="rainbow-flex rainbow-justify_end">
            <Button type="submit" label="Register" variant="brand" />
          </div>
        </form>
      </RegisterWrapper>
    </Modal>
  );
}
