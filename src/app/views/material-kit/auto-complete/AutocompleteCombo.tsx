import { Autocomplete, styled, TextField } from '@mui/material';
import { createFilterOptions } from '@mui/material/Autocomplete';
import React, { Fragment } from 'react';

const AutoComplete = styled(Autocomplete)(() => ({
  width: 300,
  marginBottom: '16px',
}));

const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' },
];

const filter = createFilterOptions();

const AutocompleteCombo = () => {
  const [value, setValue]: any = React.useState(null);

  const handleChange = (_: any, newValue: any) => {
    if (newValue && newValue.inputValue) {
      setValue({ label: newValue.inputValue });
      return;
    }
    setValue(newValue);
  };

  const filterOptions = (options: any, params: any) => {
    const filtered = filter(options, params);
    if (params.inputValue !== '') {
      filtered.push({ inputValue: params.inputValue, label: `Add "${params.inputValue}"` });
    }
    return filtered;
  };

  return (
    <Fragment>
      <AutoComplete
        options={suggestions}
        getOptionLabel={(option: any) => option.label}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" fullWidth />
        )}
      />

      <AutoComplete
        value={value}
        options={suggestions}
        onChange={handleChange}
        filterOptions={filterOptions}
        getOptionLabel={(option: any) => {
          // e.g value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.label;
        }}
        renderOption={(option: any) => option.label}
        style={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="Free solo with text demo" variant="outlined" fullWidth />
        )}
      />

      <AutoComplete
        options={suggestions}
        getOptionLabel={(option: any) => option.label}
        getOptionDisabled={(option) => option === suggestions[0] || option === suggestions[2]}
        renderInput={(params) => (
          <TextField {...params} label="Disabled option" variant="outlined" fullWidth />
        )}
      />
    </Fragment>
  );
};

export default AutocompleteCombo;
