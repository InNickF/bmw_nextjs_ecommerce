import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '-36px',
    width: 215
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};



const AirbnbSlider = withStyles({
  root: {
    color: '#8b8b8b',
    height: 3,
    marginTop: 0,
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: '#1C69D4',
    border: 'none',
    marginTop: -10,
    marginLeft: -13,
    boxShadow: '#ebebeb 0px 2px 2px',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0px 2px 3px 1px',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: '#7FB5FF',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 1,
  },
  rail: {
    color: '#8b8b8b',
    opacity: 1,
    height: 5,
    borderRadius: 10,
    marginLeft: 10
  },
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

export default function SliderBar({ min, max, setValues, values }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AirbnbSlider
        /* value={values} */
        /* onChange={(event, value) => { min = value[0] }} */
        onChangeCommitted={(evenxtx, value) => { setValues({ min: value[0], max: value[1] }) }}
        max={max}
        min={min}
        step={10000}
        ThumbComponent={AirbnbThumbComponent}
        getAriaLabel={index => (index === 0 ? 'Minimum price' : 'Maximum price')}
        defaultValue={[min, max]}
      />
    </div>
  );
}