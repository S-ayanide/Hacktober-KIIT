import React from "react";
import styled, { useTheme } from "styled-components";
import { SectionDark } from "../../layout";

const Heading = styled.h1`
    color: white;
    font-size: ${(props) => (props.theme.screens.md ? "2.5rem" : "3.1rem")};
`;

const SubHeading = styled.h2`
    color: #93c2db;
    font-weight: 500;
    font-size: ${(props) => (props.theme.screens.md ? "1.3rem" : "1.8rem")};
`;

const FormContainer = styled.div`
    background-color: #183d5d;
    border-radius: 10px;
    padding: 3rem;
`;

const FormHead = styled.h1`
    color: white;
    font-size: ${(props) => (props.theme.screens.md ? "1.6rem" : "2.2rem")};
`;

const FormSubHead = styled.p`
    color: #93c2db;
    font-weight: 500;
    font-size: ${(props) => (props.theme.screens.md ? "1rem" : "1.3rem")};
    margin-top: 0.4rem;
`;

const FormInputsContainer = styled.div`
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    width: 70%;
`;

const FormInput = styled.input.attrs((props) => ({
    type: props.type || "text",
}))`
    border-radius: 4px;
    padding: 1rem;
    border: none;
    background-color: #072540;
    color: white;
    font-size: 1.3rem;
`;

const PersonalDetails: React.FC = () => {
    return (
        <div>
            <FormHead>Personal Detail</FormHead>
            <FormSubHead>
                This information will be used by Mayadata and partnered
                organisations to deliver our limited edition swags.
            </FormSubHead>

            <FormSubHead>
                Important : You will need to register for the event after
                filling this form to get our limited edition swags.
            </FormSubHead>

            <br />
            <br />

            <form>
                <FormInputsContainer>
                    <FormInput required placeholder="* First Name"></FormInput>
                    <FormInput required placeholder="* Last Name"></FormInput>
                    <FormInput
                        required
                        type="email"
                        placeholder="* Personal Email"
                    ></FormInput>
                    <FormInput
                        required
                        type="email"
                        placeholder="* KIIT Email"
                    ></FormInput>
                    <FormInput placeholder="KIIT Roll Number"></FormInput>
                    <FormInput
                        required
                        placeholder="* Github Username"
                    ></FormInput>
                </FormInputsContainer>
            </form>
        </div>
    );
};

const PrizesAddress: React.FC = () => {
    return (
        <div>
            <FormHead>Prizes and Address</FormHead>
            <FormSubHead>
                Please provide the address where we will deliver your prize and
                also T-Shirt Size.
            </FormSubHead>

            <br />
            <br />

            <FormInputsContainer>
                <FormInput required placeholder="* Address Line 1"></FormInput>
                <FormInput required placeholder="* Address Line 2"></FormInput>
                <FormInput
                    required
                    placeholder="* State / Province"
                ></FormInput>
                <FormInput required placeholder="* City"></FormInput>
                <FormInput
                    required
                    type="number"
                    placeholder="* Postal / Zip Code"
                ></FormInput>
                <FormInput required type="tel" placeholder="* Phone Number"></FormInput>

                <FormInput required
                    list="tshirt-sizes"
                    placeholder="* Pick a your tshirt size"
                ></FormInput>
                <datalist id="tshirt-sizes">
                    <option value="Men's/Unisex S" />
                    <option value="Men's/Unisex M" />
                    <option value="Men's/Unisex L" />
                    <option value="Men's/Unisex XL" />
                    <option value="Men's/Unisex XXL" />
                </datalist>
            </FormInputsContainer>
        </div>
    );
};

const RegistrationForm: React.FC = () => {
    return (
        <SectionDark>
            <Heading>Register for the event</Heading>
            <SubHeading>
                Fill the personal detail form to get limited edition additional
                swags by Mayadata and also register the event at Digital Ocean.
            </SubHeading>

            <br />
            <br />
            <br />
            <FormContainer>
                <PersonalDetails></PersonalDetails>

                <hr
                    style={{
                        height: "1px",
                        backgroundColor: "#93C2DB",
                        margin: "2rem 0 2rem 0",
                    }}
                ></hr>

                <PrizesAddress />
            </FormContainer>
        </SectionDark>
    );
};

export { RegistrationForm };
