import React from "react";
import { Form, redirect } from "react-router-dom";

function ElementThree() {
  return (
    <Form className="container" method="POST">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          name="userName"
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
}
export async function submitData(data){
    const formData = await data.request.formData()
    const newData = Object.fromEntries(formData)
    console.log(newData);
    return redirect('/')
}

export default ElementThree;
