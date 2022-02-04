import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Stack from '@mui/material/Stack';


export default function BasicCard(props) {
  console.log("PROPS IN CARD: ",props)
    
  var userDate = JSON.parse(props.logDetails)
  console.log(userDate)

    // '2014-08-18T21:11:54'
//     day: "1"
// hour: "3"
// minute: "48"
// month: "2"
// second: "29"
// station: "KABX"
// // year: "2022"

  var date = new Date(userDate.year, userDate.month, userDate.day, userDate.hour, userDate.minute, userDate.second);
  var result = date.toLocaleDateString("en-US", { // you can use undefined as first argument
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }, { hour12: false });


  console.log(result);

  return (
    <Card sx={{ minWidth: 100 }}>
        <CardContent>
          <Typography component="div">
            <a href={props.url}> See the plot</a>
          </Typography>

          <Typography component="div">
            <a href={props.url}> See the plot</a>
          </Typography>
          <Typography>{result}</Typography>


          <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                {/* <DateTimePicker
                  renderInput={(params) => <TextField {...params} />}
                  value={date}

                /> */}
              </Stack>
            </LocalizationProvider>
        </CardContent>
        <CardActions>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
  );
}
