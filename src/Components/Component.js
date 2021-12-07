import { Typography, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import "./Component.css";
import React from "react";

function Component() {
  return (
    <Box
      className="main"
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={8}
    >
      <Typography className="heading" variant="h2" component="h2">
        How Does This Work?
      </Typography>
      <Stack direction="row" spacing={7} mt={5}>
        <Box className="item" alignItems="center">
          <Stack
            direction="column"
            spacing={2}
            className="stack"
            alignItems="center"
          >
            <Typography
              sx={{
                width: 30
              }}
              variant="h6"
              component="div"
            >
              Physical Profiling
            </Typography>
            <Typography
              sx={{
                width: 160
              }}
            >
              At the start, every user is diagnosed on various physical
              parameters to create a physical profile to get a training plan.
            </Typography>
          </Stack>
        </Box>
        <Box className="item">
          {" "}
          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            className="stack"
          >
            <Typography
              sx={{
                width: 30
              }}
              variant="h5"
              component="h5"
              align="center"
            >
              Personalized Training Sessions
            </Typography>
            <Typography
              sx={{
                width: 160
              }}
              variant="body1"
            >
              Based on the physical profiles generated at the start of training
              we create personalized training programs.
            </Typography>
          </Stack>
        </Box>
        <Box className="item">
          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            className="stack"
          >
            <Typography
              sx={{
                width: 30
              }}
              variant="h6"
              component="div"
            >
              Measurable Result
            </Typography>
            <Typography
              sx={{
                width: 160
              }}
            >
              There are definite parameters which are regularly monitored to
              measure the growth of each athlete.
            </Typography>
          </Stack>{" "}
        </Box>
      </Stack>
    </Box>
  );
}
export default Component;
