import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import "./Radio.scss";

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  value: PropTypes.any,
};

export default function UseRadioGroup() {
  return (
    <>
      <div className="text-group">
        <p>Change Language</p>
        <a href="#">Learn more</a>
      </div>
      <RadioGroup name="use-radio-group" defaultValue="">
        <MyFormControlLabel
          value="English - EN"
          label="English - EN"
          control={<Radio style={{ height: 30 }} />}
        />

        <hr />
        <MyFormControlLabel
          value="Español - ES
          "
          label="Español - ES
          "
          control={<Radio style={{ height: 30 }} />}
        />
        <MyFormControlLabel
          value="简体中文 - ZH
          "
          label="简体中文 - ZH
          "
          control={<Radio style={{ height: 30 }} />}
        />
        <MyFormControlLabel
          value="Deutsch - DE
          "
          label="Deutsch - DE
          "
          control={<Radio style={{ height: 30 }} />}
        />
        <MyFormControlLabel
          value="Português - PT
          "
          label="Português - PT
          "
          control={<Radio style={{ height: 30 }} />}
        />
        <MyFormControlLabel
          value="繁體中文 - ZH
          "
          label="繁體中文 - ZH
          "
          control={<Radio style={{ height: 30 }} />}
        />
        <MyFormControlLabel
          value="한국어 - KO
          "
          label="한국어 - KO
          "
          control={<Radio style={{ height: 30 }} />}
        />
        <MyFormControlLabel
          value="עברית - HE"
          label="עברית - HE"
          control={<Radio style={{ height: 30 }} />}
        />
        <MyFormControlLabel
          value="العربية - AR

          "
          label="العربية - AR

          "
          control={<Radio style={{ height: 30 }} />}
        />
      </RadioGroup>
    </>
  );
}
