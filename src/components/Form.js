import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  setShouldSHowUserForm,
  setUserDetails,
  setuserClickedOnEditIcon,
  updateUserData,
} from "../store/userDataSlice";
import { useEffect, useState } from "react";

const FormComponent = () => {
  const dispatch = useDispatch();
  const shouldShowForm = useSelector(
    (state) => state?.user?.shouldShowUserForm
  );
  const isClickedOnEditIcon = useSelector(
    (state) => state.user?.userClickedOnEditIcon
  );
  const [id,setId] = useState()
  const editData = useSelector((state) => state.user?.editUserData);

  const handleSubmit = (values) => {
    if (isClickedOnEditIcon) {
        const payload = {...values,id:id}
      dispatch(updateUserData(payload));
    } else {
      dispatch(setUserDetails(values));
    }
    dispatch(setShouldSHowUserForm(false));
    dispatch(setuserClickedOnEditIcon(false));
    formik.setFieldValue("name", "");
    formik.setFieldValue("email", "");
    formik.setFieldValue("number", "");
    formik.setFieldValue("age", "");
  };

  useEffect(() => {
    if (editData) {
      formik.setFieldValue("name", editData?.name);
      formik.setFieldValue("email", editData?.email);
      formik.setFieldValue("number", editData?.number);
      formik.setFieldValue("age", editData?.age);
      setId(editData?.id)
    }
  }, [editData]);

  const formik = useFormik({
    initialValues: { name: "", email: "", number: 0, age: 0 },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <div className="border-solid border-2 grey rounded-md p-7 m-4">
      <h1 className="text-center">
        {shouldShowForm ? "User Details Form" : "Click Add button to show Form"}
      </h1>
      {shouldShowForm && (
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center m-5">
              <TextField
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                name="name"
                variant="outlined"
                label="Name"
                style={{ margin: 10, width: "300px" }}
                id="name"
              />
              {formik.errors.name && (
                <div id="feedback">{formik.errors.name}</div>
              )}
              <TextField
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                name="email"
                variant="outlined"
                label="Email"
                id="email"
                style={{ margin: 10, width: "300px" }}
              />
              {formik.errors.email && (
                <div id="feedback">{formik.errors.email}</div>
              )}
            </div>
            <div className="flex flex-row justify-center items-center mb-2">
              <TextField
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
                name="number"
                variant="outlined"
                label="Number"
                id="number"
                style={{ margin: 10, width: "300px" }}
              />
              {formik.errors.number && (
                <div id="feedback">{formik.errors.number}</div>
              )}
              <TextField
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.age}
                name="age"
                variant="outlined"
                label="Age"
                id="age"
                style={{ margin: 10, width: "300px" }}
              />
            </div>
            {formik.errors.age && <div id="feedback">{formik.errors.age}</div>}
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormComponent;
