import React from "react";
import styled, { useTheme } from "styled-components";
import { SectionDark } from "../../layout";

const Heading = styled.h1`
  color: white;
  font-size: ${props => (props.theme.screens.md ? "2rem" : "2.6rem")};
`;
const SubHeading = styled.h2``;
const FormHeading = styled.h2``;
const FormSubHeading = styled.h3``;

const RegistrationForm: React.FC = () => {
  return (
    <SectionDark>
      <Heading>Register for the event</Heading>
    </SectionDark>
  );
};

export { RegistrationForm };
