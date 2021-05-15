import React from 'react';
import { Box, TextField, Button, Grid } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { countries } from "../../utils/countries";

// Service
import { sendMessage } from '../../services/message.service';

export function HomePage() {
  const defaultCountry = countries.find(c => c.code === "DO");

  const flagFromCode = (isoCode) => {
    return isoCode.toUpperCase().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
  }

  const onSubmitHandle = (ev) => {
    ev.preventDefault();

    let data = new FormData(ev.target);
    let code = data.get('code').match(/[0-9]+/g)[0];
    let to = code + data.get('phone');
    let text = data.get('text');

    sendMessage({ to, text })
  }

  return <Box className="HomePage" padding={3}>
    <form method="POST" onSubmit={onSubmitHandle}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Autocomplete
            options={countries}
            defaultValue={defaultCountry}
            getOptionLabel={(option) => `${flagFromCode(option.code)} ${option.label} (+${option.phone})`}
            renderOption={(option) => (
              <React.Fragment>
                <span className="flag">{flagFromCode(option.code)} </span>
                {`${option.label} (+${option.phone})`}
              </React.Fragment>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                required
                name="code"
                label="Choose a Country"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'off'
                }}
              />
            )}
          />

        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            name="phone"
            label="Phone Number"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={5}
            name="text"
            placeholder="Type here what you want to send"
            label="Message"
          />
        </Grid>
      </Grid>

      <Box marginTop={5}>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          type="submit"
        >Send Message</Button>
      </Box>
    </form>
  </Box>
}