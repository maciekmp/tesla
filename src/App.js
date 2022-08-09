import styled from "@emotion/styled";
import { Card, Divider, Grid, IconButton, Stack } from "@mui/material";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Battery4BarIcon from "@mui/icons-material/Battery4Bar";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LockIcon from "@mui/icons-material/Lock";

const Footer = styled.div`
  background: #000;
  height: 128px;
  display: flex;
  padding: 24px;
`;
const Speed = styled.span`
  font-size: 50px;
`;
const Right = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;
const RightFooter = styled.div`
  background: #cbcde2;
`;

function App() {
  return (
    <Grid
      container
      direction="column"
      sx={{
        height: "100vh",
      }}
    >
      <Grid item flexGrow={1}>
        <Grid container height="100%">
          <Grid item sx={{ width: 580, p: 3 }}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <strong>P</strong>
                  <strong>R</strong>
                  <strong>N</strong>
                  <strong>D</strong>
                  <IconButton component="span">wheel</IconButton>
                </Stack>
              </Grid>
              <Grid item>
                <strong>73%</strong>
                <Battery4BarIcon />
              </Grid>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between">
              <Grid item>
                <Speed>90</Speed>
              </Grid>
              <Grid item>75 MAX</Grid>
            </Grid>
          </Grid>
          <Grid item flex="1" sx={{ position: "relative" }}>
            <Map
              initialViewState={{
                longitude: -122.4,
                latitude: 37.8,
                zoom: 14,
              }}
              style={{ width: "100%", height: "100%" }}
              mapStyle="mapbox://styles/mapbox/light-v10"
            />
            <Right>
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                sx={{ height: "100%" }}
              >
                <Grid item sx={{ p: 3 }}>
                  <Grid container justifyContent="space-between">
                    <Grid item sx={{ mb: 3 }}>
                      <Stack direction="row" spacing={2}>
                        <LockIcon />
                        <span>10:09</span>
                        <span>23°C</span>
                      </Stack>
                    </Grid>
                    <Grid item>airbag</Grid>
                  </Grid>
                  <Card>Navigation</Card>
                </Grid>
                <Grid item>
                  <RightFooter>songs</RightFooter>
                </Grid>
              </Grid>
            </Right>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Footer>
          <IconButton component="span" color="primary">
            <DirectionsCarIcon />
          </IconButton>
        </Footer>
      </Grid>
    </Grid>
  );
}

export default App;
