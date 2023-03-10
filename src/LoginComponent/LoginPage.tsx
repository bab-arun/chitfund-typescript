import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextFieldMUi } from "../components/TextFieldMui";
import { Box, Button, Stack, Typography } from "@mui/material";
import useSnackbarHook from "../components/useSnackbarHook";


interface Login {
  userCode: string,
  password: string,
}

export const LoginPage = () => {
   // snackbar custom hook
   const{setMysnackbar}=useSnackbarHook();
   // --------------------------------------
  const [userCode, setUserCode] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [mismatch, setMismatch] = useState<boolean>(false);

  const navigate = useNavigate();

  const errorMsg: Login = {
    userCode,
    password,
  };
  const [errors, setErrors] = useState<Login>(errorMsg);

  const loginValidate = () => {
    const temp: Login = errorMsg;
    temp.userCode = userCode ? '' : 'email is required';
    temp.password = password ? '' : 'password is required';
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === '');
  }

  const passwordValidation = (e: any) => {
 
    if (!loginValidate()) {
      return
    }

    axios
      .post("http://localhost:8081/usercode-password/check", {
        userCode: userCode,
        password: password,
      })
      .then((response) => {

        if (response.data === "admin") {
          return navigate("/adminhomepage");
        } else if (response.data === "user") {
          return navigate("/userhomepage");
        } else if (response.data === "Invalid Password") {
          setMismatch(true)

        }
      })
      .catch((error) => {
        setMysnackbar(`Oops Unable to login`,"error");
      });
  };

  const handleUserCode = (e: any) => {

    setMismatch(false);
    setErrors({ ...errors, userCode: '' });
    setUserCode(e.target.value);
    sessionStorage.setItem("userCode", e.target.value);
  }

  const handlePassword = (e: any) => {
    setMismatch(false);
    setErrors({ ...errors, password: '' });
    setPassword(e.target.value);
  }


  return (
    <>
      <div
        style={{
          marginTop: "154px",
          marginLeft: "550px",
        }}
      >
        <Typography style={{ marginRight: "900px", fontSize: "40px", fontWeight: "20px", marginBottom: "20px" }}>Chitfund</Typography>
        {mismatch === true &&(<Typography sx={{ color: "red", marginBottom: "5px" }}>*Credentials are mismatched</Typography>)}
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack direction="column" spacing={3}>
            <TextFieldMUi
              id="outlined-basic"
              label="Email"
              variant="outlined"
              style={{ width: "300px" }}
              onChange={handleUserCode}
              {...(errors.userCode !== '' && { error: true, helperText: errors.userCode })}
              required
            />
            <TextFieldMUi
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              style={{ width: "300px" }}
              onChange={handlePassword}
              {...(errors.password !== '' && { error: true, helperText: errors.password })}
              required
            />
          </Stack>


          <Box sx={{ marginLeft: "100px", marginTop: "20px" }}>
            <Button variant="contained" onClick={passwordValidation}>Submit</Button>
          </Box>
        </form>
      </div>
    </>
  );
};
