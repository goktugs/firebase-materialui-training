import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <Container maxWidth="md">
      <Stack direction="column" alignItems="center" gap={4}>
        <Card sx={{ maxWidth: 320 }}>
          <CardContent>
            <TextField
              id="outlined-basic"
              fullWidth
              placeholder="New Title"
              variant="standard"
              InputProps={{
                style: { fontSize: 22, color: "#C17254", fontWeight: "bold" },
                disableUnderline: true,
              }}
            />

            <TextField
              placeholder="New Description"
              id="outlined-multiline-static"
              multiline
              maxRows={Infinity}
              fullWidth
              inputProps={{
                style: { fontSize: 16, height: "200px", overflowY: "scroll" },
              }}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .Mui-focused ": {
                  border: "1px solid black",
                },
              }}
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
            />

            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Stack>
    </Container>
  );
}

export default App;
