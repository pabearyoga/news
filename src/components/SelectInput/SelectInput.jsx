import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
    },
  },
};

const getStyles = (name, personName, theme) => {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const SelectInput = ({ names, title, name, value, handleOptionSelect }) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState(value || []);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    const selectedArray = typeof value === 'string' ? value.split(',') : value;
    setPersonName(selectedArray);

    handleOptionSelect(event);
  };

  const renderValue = (selected) => {
    const selectedArray = Array.isArray(selected) ? selected : [selected];

    if (selectedArray.length === 0) {
      return <em>Select</em>;
    }

    return selectedArray.join(', ');
  };

  return (
    <div>
      <FormControl sx={{ width: 300, mb: 2 }}>
        <p style={{ marginBottom: '10px' }}>{title}</p>
        <Select
          displayEmpty
          name={name}
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          size="small"
          renderValue={() => renderValue(personName)}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Select</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default SelectInput