import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Formik, Form } from "formik";
import Button from "@mui/material/Button";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";

interface Values {
  firstname: String;
  lastname: String;
  jobtitle: String;
  department: String;
}
interface Props {
  onSubmit: (values: Values) => void;
}
const NewForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              jobtitle: "",
              department: "",
            }}
            onSubmit={(values) => {
              console.log("inside");
              onSubmit(values);
            }}
          >
            {({ values, handleChange }) => (
              <Form>
                <div className="row justify-content-between align-items-center">
                  <div className="col-5">
                    <TextField
                      name="firstname"
                      value={values.firstname}
                      onChange={handleChange}
                      id="standard-basic"
                      label="First Name"
                      variant="standard"
                    />
                    <TextField
                      name="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                      id="standard-basic"
                      label="Last Name"
                      variant="standard"
                      margin="dense"
                    />
                  </div>
                  <div className="col-5">
                    <TextField
                      name="jobtitle"
                      value={values.jobtitle}
                      onChange={handleChange}
                      id="standard-basic"
                      label="Job Title"
                      variant="standard"
                    />
                    <TextField
                      name="department"
                      value={values.department}
                      onChange={handleChange}
                      id="standard-basic"
                      label="Department"
                      variant="standard"
                      margin="dense"
                    />
                  </div>
                </div>
                <Button
                  className="mt-2"
                  variant="contained"
                  color="primary"
                  endIcon={<HowToRegOutlinedIcon />}
                  type="submit"
                >
                  Register
                </Button>
                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
              </Form>
            )}
          </Formik>
        </Box>
      </div>
    </div>
  );
};

export default NewForm;
