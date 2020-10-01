import React, { useState } from 'react'
import styled from 'styled-components'
import { SectionDark } from '../../layout'

const Heading = styled.h1`
  color: white;
  font-size: ${(props) => (props.theme.screens.md ? '2.5rem' : '3.1rem')};
`

const SubHeading = styled.h2`
  color: #93c2db;
  font-weight: 500;
  font-size: ${(props) => (props.theme.screens.md ? '1.3rem' : '1.8rem')};
`

const FormContainer = styled.form`
  background-color: #183d5d;
  border-radius: 10px;
  padding: ${(props) => (props.theme.screens.md ? '1.6rem' : '3rem')};
`

const FormHead = styled.h1`
  color: white;
  font-size: ${(props) => (props.theme.screens.md ? '1.6rem' : '2.2rem')};
`

const FormSubHead = styled.p`
  color: #93c2db;
  font-weight: 500;
  font-size: ${(props) => (props.theme.screens.md ? '1rem' : '1.3rem')};
  margin-top: 0.4rem;
`

const FormInputsContainer = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: ${(props) =>
    props.theme.screens.md ? 'repear(1,1fr)' : 'repeat(2,1fr)'};
  grid-gap: 2rem;
  width: ${(props) => (props.theme.screens.md ? '100%' : '70%')};
`

const FormInput = styled.input.attrs((props) => ({
  type: props.type || 'text',
}))`
  border-radius: 4px;
  padding: 1rem;
  border: none;
  background-color: #072540;
  color: white;
  font-size: ${(props) =>
    props.theme.screens.md
      ? '1rem'
      : props.theme.screens.xs
      ? '0.6rem'
      : '1.3rem'};
`

const SubmitButton = styled.input.attrs((props) => ({
  type: 'submit',
  value: props.value || 'SUBMIT',
}))`
  background-color: #0069ff;
  border: none;
  color: white;
  border-radius: 110px;
  padding: 1rem 4rem 1rem 4rem;
  font-weight: 700;
  font-size: 1.1rem;
`

const SubmissionNote = styled.p`
  color: #93c2db;
  margin: 1.5rem 0 2rem 0;
`

interface form_prop {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PersonalDetails: React.FC<form_prop> = ({ changeHandler }) => {
  return (
    <div>
      <FormHead>Personal Detail</FormHead>
      <FormSubHead>
        This information will be used by Mayadata and partnered organisations to
        deliver our limited edition swags.
      </FormSubHead>

      <FormSubHead>
        Important : You will need to register for the event after filling this
        form to get our limited edition swags.
      </FormSubHead>

      <br />
      <br />

      <FormInputsContainer>
        <FormInput
          required
          name="first_name"
          onChange={changeHandler}
          placeholder="* First Name"
        ></FormInput>

        <FormInput
          required
          name="last_name"
          onChange={changeHandler}
          placeholder="* Last Name"
        ></FormInput>

        <FormInput
          required
          type="email"
          name="personal_email"
          onChange={changeHandler}
          placeholder="* Personal Email"
        ></FormInput>

        <FormInput
          required
          type="email"
          name="kiit_email"
          onChange={changeHandler}
          placeholder="KIIT Email"
        ></FormInput>

        <FormInput
          type="number"
          name="kiit_roll_no"
          onChange={changeHandler}
          placeholder="KIIT Roll Number"
        ></FormInput>

        <FormInput
          name="github_username"
          onChange={changeHandler}
          required
          placeholder="* Github Username"
        ></FormInput>
      </FormInputsContainer>
    </div>
  )
}

const PrizesAddress: React.FC<form_prop> = ({ changeHandler }) => {
  return (
    <div>
      <FormHead>Prizes and Address</FormHead>
      <FormSubHead>
        Please provide the address where we will deliver your prize and also
        T-Shirt Size.
      </FormSubHead>

      <br />
      <br />

      <FormInputsContainer>
        <FormInput
          name="addr_line_1"
          onChange={changeHandler}
          required
          placeholder="* Address Line 1"
        ></FormInput>

        <FormInput
          name="addr_line_2"
          onChange={changeHandler}
          required
          placeholder="* Address Line 2"
        ></FormInput>

        <FormInput
          name="state"
          onChange={changeHandler}
          required
          placeholder="* State / Province"
        ></FormInput>

        <FormInput
          required
          name="city"
          onChange={changeHandler}
          placeholder="* City"
        ></FormInput>

        <FormInput
          required
          name="zipcode"
          onChange={changeHandler}
          type="number"
          placeholder="* Postal / Zip Code"
        ></FormInput>

        <FormInput
          required
          name="phone_no"
          onChange={changeHandler}
          type="number"
          placeholder="* Phone Number"
        ></FormInput>

        <FormInput
          required
          name="tshirt_size"
          onChange={changeHandler}
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
  )
}

const MLHRegister: React.FC = () => {
  const ButtonTimerContainer = styled.div`
    display: flexbox;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2rem;
    align-items: center;
  `

  const ClosingInText = styled.p`
    color: white;
    padding: ${(props) =>
      props.theme.screens.sm ? '2rem 0 0 0rem' : '0 0 0 2rem'};
    font-size: 1.2rem;
  `

  const Timer = styled.div`
    color: white;
    font-size: ${(props) => (props.theme.screens.md ? '2rem' : '2.6rem')};
    font-weight: 800;
    padding: ${(props) => (props.theme.screens.sm ? '0rem' : '0 2rem 0 2rem')};
  `

  const startTimer = () => {
    let launchDate = new Date('October 11, 2020 10:00:00').getTime()

    let x = setInterval(() => {
      let now = new Date().getTime()
      let timeLeft = launchDate - now

      let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))

      let hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

      if (document.getElementById('registerTimer') != null) {
        document.getElementById(
          'registerTimer',
        ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`

        // If the count down is finished, write some text
        if (timeLeft < 0) {
          clearInterval(x)
          document.getElementById('registerTimer').innerHTML =
            'Registration Closed.'
        }
      }
    }, 1000)
  }

  startTimer()

  return (
    <div>
      <FormHead>Register</FormHead>
      <FormSubHead>
        Register for the event which is going to held on 11th October, 2020. If
        already filled please ignore it.
      </FormSubHead>
      <FormSubHead>
        Important : You need to register for the event first to get the
        additional limited edition swags by Mayadata.
      </FormSubHead>

      <ButtonTimerContainer>
        <SubmitButton value="REGISTER"></SubmitButton>
        <div>
          <ClosingInText>Closing in &rarr;</ClosingInText>
          <Timer id="registerTimer"></Timer>
        </div>
      </ButtonTimerContainer>
    </div>
  )
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    personal_email: '',
    kiit_email: '',
    kiit_roll_no: '',
    github_username: '',
    addr_line_1: '',
    addr_line_2: '',
    state: '',
    city: '',
    zipcode: '',
    phone_no: '',
    tshirt_size: '',
  })

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const onFormSubmit = (e: React.SyntheticEvent) => {
    // Change submission code here
    e.preventDefault()
    console.log(formData)
  }

  return (
    <SectionDark>
      <Heading>Register for the event</Heading>
      <SubHeading>
        Fill the personal detail form to get limited edition additional swags by
        Mayadata and also register the event at Digital Ocean.
      </SubHeading>

      <br />
      <br />
      <br />
      <FormContainer onSubmit={onFormSubmit}>
        <PersonalDetails changeHandler={onChangeHandler} />

        <hr
          style={{
            height: '1px',
            backgroundColor: '#93C2DB',
            margin: '2rem 0 2rem 0',
          }}
        ></hr>

        <PrizesAddress changeHandler={onChangeHandler} />

        <SubmissionNote>
          Important : Once Submitted the details cannot be changed, so please
          review the filled up details before submitting.
        </SubmissionNote>
        <SubmitButton />
      </FormContainer>

      <br></br>

      <FormContainer>
        <MLHRegister></MLHRegister>
      </FormContainer>
    </SectionDark>
  )
}

export { RegistrationForm }
