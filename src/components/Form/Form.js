import { Button } from "../Button";
import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";

const schema = yup.object().shape({
  name: yup.string().required("Please tell us your name"),
  email: yup.string().email().required("We require your email"),
  userMessage: yup.string().required("This field cannot be empty"),
});

const Form = ({ setIsFormSubmitted }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const userID = process.env.REACT_APP_EMAILJS_USER_ID;
  console.log(templateID, serviceID, userID);

  const formSubmit = (data, e) => {
    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
    setIsFormSubmitted(true);
  };

  const activeField = (e) => {
    const label = e.target.parentElement.firstElementChild;
    label.classList.add(styles.active);
  };

  const inactiveField = (e) => {
    const label = e.target.parentElement.firstElementChild;
    label.classList.remove(styles.active);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            onFocus={activeField}
            onBlur={inactiveField}
          />
          <small>{errors.name?.message}</small>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            id="email"
            {...register("email")}
            onFocus={activeField}
            onBlur={inactiveField}
          />
          <small>{errors.email?.message}</small>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="userMessage">How can we help you?</label>
          <textarea
            id="userMessage"
            rows="3"
            {...register("userMessage")}
            onFocus={activeField}
            onBlur={inactiveField}
          />
          <small>{errors.userMessage?.message}</small>
        </div>
        <Button type="submit" className="btn">
          Send
        </Button>
      </form>
    </>
  );
};

export default Form;
