import { withHandlers, withState, compose } from "recompose";

const funcs = withHandlers({
  setTab: (props) => (tab, isLogged) => () => {
    if (isLogged) 
      return props.setCurrentTab(tab);
    
    return undefined;
  },
});

const enhance = compose(
  withState("currentTab", "setCurrentTab", (props) => props.items[0]),
  funcs
);

export default enhance;
