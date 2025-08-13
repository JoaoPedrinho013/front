import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Container, Stack, FormControl, InputLabel, Select, MenuItem, OutlinedInput, InputAdornment, IconButton} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";



export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);


  return (
    <Container className="main" sx={{ alignContent: "center", justifyItems: "center" }}>
      <Stack direction="column" spacing={1}
        sx={{
          backgroundColor: "#2c2c2c",
          alignItems: "center",
          width: "30%",
          padding: "3%",
          borderRadius: "13px",
          boxShadow: "0 0 13px rgba(0, 0, 0, 0.5)"
        }}>

        <FormControl sx={{ width: '100%' }} variant="outlined" className="select-players-box">
          <InputLabel id="login">User</InputLabel>
          <Select
            labelId="login"
            id="selectPlayers"
            autoWidth
            label="Login"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Admin"}>Admin</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: '100%' }} variant="outlined" className="password-box">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}

                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button
          sx={{ width: '100%' }}
          variant="contained"
          component={RouterLink}
          to="/admin-players"
        >
          Sign in
        </Button>
      </Stack>
    </Container>
  );
}

