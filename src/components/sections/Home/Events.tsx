import React from "react";
import styled from "styled-components";
// import { FontAwesomeIcon } from 'react-fontawesome'
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  SectionLight
} from "../../../components/layout";

const Agenda = [
  { title: "Welcome Address", start: "11:00", end: "11:15" },
  { title: "Introduction to Hacktoberfest", start: "11:15", end: "11:30" },
  {
    title: "Workshop for Open Source Contribution",
    start: "11:30",
    end: "12:00"
  },
  { title: "Opportunities to Contribute", start: "12:00", end: "12:30" },
  { title: "Breakout Rooms for Icebreaking", start: "12:30", end: "13:30" },
  { title: "Get Hacking", start: "13:30", end: "15:30" },
  { title: "Show and Tell", start: "15:30", end: "16:30" }
];

const Title = styled.h2`
  font-size: ${props => (props.theme.screens.md ? "1rem" : "1.8rem")};
  font-weight: 800;
  color: black;
`;

const Date = styled.div`
	// position: absolute;
  font-weight: 800;
`;

const CardsContainer = styled.div`
max-width: 40rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 2rem;
`;

const Card = styled.div`
	border: 1px solid black;
	border-radius: 6px;
	padding: 1rem;
`

const Events: React.FC = () => {

	const CardContent = (
		<CardsContainer>
        {Agenda.map(item => (
          <Card>
            {" "}
            <Title>{item.title}</Title>
            <Date>October 11, 2020<br />
              {item.start} to {item.end}
            </Date>
          </Card>
        ))}
      </CardsContainer>
	) 
  return (
    <SectionLight>
      {CardContent}
    </SectionLight>
  );
};

export { Events };
