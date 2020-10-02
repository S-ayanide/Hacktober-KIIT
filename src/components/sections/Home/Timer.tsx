import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Button } from '../../button'
import {
	BoundedContainer,
	Center,
	ResponsiveRow,
	SectionLight,
} from "../../../components/layout";
import { Heading, SubHeading, SmallText } from "../../../components/texts";


const ImageWrapper = styled.div`
  margin: ${(props) =>
		props.theme.screens.md
			? '3rem 0'
			: props.theme.screens.xl
				? '10rem 0'
				: '5rem 0 5rem 3rem'};
  width: ${(props) => (props.theme.screens.md ? '50%' : '35%')};
`





const TimeBanner: React.FC = () => {
	const calculateTimeLeft = () => {
		let year = new Date().getFullYear();
		const difference = +new Date(`${year}-10-11`) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
	const [year] = useState(new Date().getFullYear());

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	});

	const difference = +new Date(`${year}-10-11`) - +new Date();
	// console.log(difference);
	const flexibleButton = <Button gradientColor="purple">REGISTER NOW</Button>

	return (
		<BoundedContainer breakpoint="lg" width="75%" margin="0">
			<SmallText>
				Closing in &rarr;
			</SmallText>
			<Heading style={{ fontSize: '2rem' }}>
				{difference > 0 ?
					`
					${Object.values(timeLeft)[0]} ${"  Days "}
					${Object.values(timeLeft)[1]} ${"  Hours "}
					${Object.values(timeLeft)[2]} ${"  Minutes "}
				` : `Time's Up`}
			</Heading>
			<div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
				<a
					rel="noopener noreferrer"
					target="_blank"
					href="https://hacktoberfest.digitalocean.com/register"
				>
					{flexibleButton}
				</a>
			</div>
			<SubHeading>This year make contributions that you are proud of.</SubHeading>
		</BoundedContainer>
	);
}

const TimerThumbnail: React.FC = () => {
	// const data = useStaticQuery(graphql'
	// 	query {

	// }
	// ')
	return (
		<ImageWrapper>
			<img src="/icons/HacktoberFestIcon.png" alt="Hacktober Logo" />
		</ImageWrapper >

	);
}

// Component

const TimerComponent: React.FC = () => {
	return (
		<SectionLight>
			<ResponsiveRow breakpoint="lg">
				<TimeBanner />
				<BoundedContainer
					breakpoint="lg"
					width="40%"
					margin="-4rem 0 -4rem 2rem"
				>
					<Center>
						<TimerThumbnail />
					</Center>
				</BoundedContainer>
			</ResponsiveRow>
		</SectionLight>
	);
}

export { TimerComponent };
