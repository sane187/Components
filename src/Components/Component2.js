import "./Component2.css";
import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Yoga from "../Assets/image (3).png";
import Dance from "../Assets/image (1).png";
import Fitness from "../Assets/image.png";

const Component2 = () => {
  return (
    <Box
      className="main"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack direction="row">
        <Box alignItems="center">
          <img
            style={{ height: "50vh", widht: "10vw" }}
            src={Yoga}
            alt="Yoga"
          />
          <Button
            className="btn"
            variant="contained"
            component="div"
            align="left"
          >
            Join
          </Button>
        </Box>
        <Box>
          <img style={{ height: "50vh" }} src={Dance} alt="dance" />
          <Button className="btn" variant="contained">
            Join
          </Button>
        </Box>
        <Box>
          <img style={{ height: "50vh" }} src={Fitness} alt="Fitness" />
          <Button className="btn" variant="contained">
            Join
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
export default Component2;
