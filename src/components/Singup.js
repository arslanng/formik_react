import React from "react";
import { useFormik } from "formik";
import validations from "./validation";

function Singup() {
  const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordComfirm: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validations
    // validations import edilirken validationSchema adıyla alınırsa bu eşleştirmeye gerek kalmadan sadece "validationSchema" yazılarak da kullanılabilir.
  });

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br />
        {errors.email && touched.email && <div className="error"><br/>{errors.email}</div>}
        <br />
        <label>Password</label>
        <input
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br />
        {errors.password && touched.password && <div className="error"><br/>{errors.password}</div>}
        <br />
        <label>Password Comfirm</label>
        <input
          name="passwordComfirm"
          value={values.passwordComfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br />
        {errors.passwordComfirm && touched.passwordComfirm && <div className="error"><br/>{errors.passwordComfirm}</div>}
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}

export default Singup;
