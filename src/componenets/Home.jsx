import React from "react";
import styled from "styled-components";
import Section from "./Section";
function home() {
  return (
    <Container>
      <Section
        title="MODEL S"
        description="Order Online For Contactless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightbtnText="Existing Inventory"
      />

      <Section
      title="MODEL 3"
      description="Order Online For Contactless Delivery"
      backgroundImg="model-3.jpg"
      leftBtnText="Custom Order"
      rightbtnText="Existing Inventory"
      
      />
      <Section 
      
      title="MODEL X"
      description="Order Online For Contactless Delivery"
      backgroundImg="model-x.jpg"
      leftBtnText="Custom Order"
      rightbtnText="Existing Inventory"
      
      
      
      
      />
      <Section
      
      
      title="MODEL Y"
      description="Order Online For Contactless Delivery"
      backgroundImg="model-y.jpg"
      leftBtnText="Custom Order"
      rightbtnText="Existing Inventory"
      
      
      />
      <Section
      
      title="Lowest Cost Solar Panel in America"
      description="Money-Back guarentee"
      backgroundImg="solar-panel.jpg"
      leftBtnText="Order now"
      rightbtnText="Learn More"
      
      
      
      />
      <Section
      
      title="Solar foe new Roofs"
      description="Solar Roof Costs Less Than A New Roof"
      backgroundImg="solar-roof.jpg"
      leftBtnText="Order now"
      rightbtnText="Learn More"
      
      
      
      />
      <Section
      
      title="Acecssories"
      description=""
      backgroundImg="accessories.jpg"
      leftBtnText="Shop now"
      
      
      
      
      />
    </Container>
  );
}

export default home;
const Container = styled.div`
  height: 100vh;
`;
