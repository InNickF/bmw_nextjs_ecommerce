import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import LoginModal from '../../containers/LoginModal'
import {
  Container,
  Labels,
  Content,
  Pane,
  TabButton,
  TabButtonsContainer,
} from "./styles";

function Tabs({ items, initialTab, isLogged, loginModal }) {

  const [currentTab, setCurrentTab] = useState(items[0])

  useEffect(() => {
    if (initialTab)
      setCurrentTab(initialTab)
  }, [initialTab])


  return (
    <Container>
      <TabButtonsContainer>
        <Labels>
          {items.map((item) => (
            <TabButton
              key={item.id}
              onClick={() => {
                if (isLogged || item.label == "Mis datos") {
                  setCurrentTab(item)
                } else {
                  loginModal()
                }
              }}
              isActived={item === currentTab}
            >
              {item.icon}
              <div>{item.label}</div>
            </TabButton>
          ))}
        </Labels>
      </TabButtonsContainer>

      <Content>
        <Pane>
          <currentTab.component />
        </Pane>
      </Content>
      {/* <LoginModal brandId={process.env.BRAND_ID} /> */}
    </Container>
  );
}

Tabs.propTypes = {
  items: PropTypes.array.isRequired,
  currentTab: PropTypes.object.isRequired,
  setTab: PropTypes.func.isRequired,
};

export default Tabs;
