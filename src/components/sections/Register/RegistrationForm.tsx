import React, { useState } from 'react'
import styled from 'styled-components'
import config from '../../../config'
import { SectionDark } from '../../layout'
import { Heading as Message } from '../../texts'

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

const SimpleButton = styled.div`
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

interface FormDataProps {
  first_name: string
  last_name: string
  personal_email: string
  kiit_roll_number: string
  github_username: string
  address_line_1: string
  address_line_2: string
  state_province: string
  city: string
  postal_zip_code: string
  phone_number: string
  t_shirt_size: string

  team_name: string
  team_members: string

  first_name_1: string
  last_name_1: string
  personal_email_1: string
  phone_number_1: string
  kiit_roll_number_1: string
  github_username_1: string

  first_name_2: string
  last_name_2: string
  personal_email_2: string
  phone_number_2: string
  kiit_roll_number_2: string
  github_username_2: string

  first_name_3: string
  last_name_3: string
  personal_email_3: string
  phone_number_3: string
  kiit_roll_number_3: string
  github_username_3: string
}

interface form_prop {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  formData: FormDataProps
}

const PersonalDetails: React.FC<form_prop> = ({ changeHandler, formData }) => {
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
          value={formData.first_name}
          onChange={changeHandler}
          placeholder="* First Name"
        ></FormInput>

        <FormInput
          required
          name="last_name"
          value={formData.last_name}
          onChange={changeHandler}
          placeholder="* Last Name"
        ></FormInput>

        <FormInput
          required
          type="email"
          name="personal_email"
          value={formData.personal_email}
          onChange={changeHandler}
          placeholder="* Personal Email"
        ></FormInput>

        <FormInput
          required
          type="number"
          name="phone_number"
          value={formData.phone_number}
          onChange={changeHandler}
          placeholder="* Contact Number"
        ></FormInput>

        <FormInput
          type="number"
          name="kiit_roll_number"
          value={formData.kiit_roll_number}
          onChange={changeHandler}
          placeholder="KIIT Roll Number"
        ></FormInput>

        <FormInput
          name="github_username"
          onChange={changeHandler}
          value={formData.github_username}
          required
          placeholder="* Github Username"
        ></FormInput>
      </FormInputsContainer>
    </div>
  )
}

const Teams: React.FC<form_prop> = ({ changeHandler, formData }) => {
  return (
    <div>
      <FormHead>Team Registration</FormHead>
      <FormSubHead>
        Please provide the details of your team if you are participating
        together as a team.
      </FormSubHead>

      <br />
      <br />

      <FormInputsContainer>
        <FormInput
          name="team_name"
          onChange={changeHandler}
          value={formData.team_name}
          placeholder="Team Name"
        ></FormInput>

        <FormInput
          type="number"
          name="team_members"
          onChange={changeHandler}
          value={formData.team_members}
          placeholder="Team Members"
        ></FormInput>
      </FormInputsContainer>

      <hr
        style={{
          height: '1px',
          backgroundColor: '#93C2DB',
          margin: '2rem 0 2rem 0',
        }}
      ></hr>

      <FormSubHead>Member 1</FormSubHead>

      <br />

      <FormInputsContainer>
        <FormInput
          name="first_name_1"
          value={formData.first_name_1}
          onChange={changeHandler}
          placeholder="First Name"
        ></FormInput>

        <FormInput
          name="last_name_1"
          value={formData.last_name_1}
          onChange={changeHandler}
          placeholder="Last Name"
        ></FormInput>

        <FormInput
          type="email"
          name="personal_email_1"
          value={formData.personal_email_1}
          onChange={changeHandler}
          placeholder="Personal Email"
        ></FormInput>

        <FormInput
          type="number"
          name="phone_number_1"
          value={formData.phone_number_1}
          onChange={changeHandler}
          placeholder="Contact Number"
        ></FormInput>

        <FormInput
          type="number"
          name="kiit_roll_number_1"
          value={formData.kiit_roll_number_1}
          onChange={changeHandler}
          placeholder="KIIT Roll Number"
        ></FormInput>

        <FormInput
          name="github_username_1"
          onChange={changeHandler}
          value={formData.github_username_1}
          placeholder="Github Username"
        ></FormInput>
      </FormInputsContainer>

      <hr
        style={{
          height: '1px',
          backgroundColor: '#93C2DB',
          margin: '2rem 0 2rem 0',
        }}
      ></hr>

      <FormSubHead>Member 2</FormSubHead>

      <br />

      <FormInputsContainer>
        <FormInput
          name="first_name_2"
          value={formData.first_name_2}
          onChange={changeHandler}
          placeholder="First Name"
        ></FormInput>

        <FormInput
          name="last_name_2"
          value={formData.last_name_2}
          onChange={changeHandler}
          placeholder="Last Name"
        ></FormInput>

        <FormInput
          type="email"
          name="personal_email_2"
          value={formData.personal_email_2}
          onChange={changeHandler}
          placeholder="Personal Email"
        ></FormInput>

        <FormInput
          type="number"
          name="phone_number_2"
          value={formData.phone_number_2}
          onChange={changeHandler}
          placeholder="Contact Number"
        ></FormInput>

        <FormInput
          type="number"
          name="kiit_roll_number_2"
          value={formData.kiit_roll_number_2}
          onChange={changeHandler}
          placeholder="KIIT Roll Number"
        ></FormInput>

        <FormInput
          name="github_username_2"
          onChange={changeHandler}
          value={formData.github_username_2}
          placeholder="Github Username"
        ></FormInput>
      </FormInputsContainer>

      <hr
        style={{
          height: '1px',
          backgroundColor: '#93C2DB',
          margin: '2rem 0 2rem 0',
        }}
      ></hr>

      <FormSubHead>Member 3</FormSubHead>

      <br />

      <FormInputsContainer>
        <FormInput
          name="first_name_3"
          value={formData.first_name_3}
          onChange={changeHandler}
          placeholder="First Name"
        ></FormInput>

        <FormInput
          name="last_name_3"
          value={formData.last_name_3}
          onChange={changeHandler}
          placeholder="Last Name"
        ></FormInput>

        <FormInput
          type="email"
          name="personal_email_3"
          value={formData.personal_email_3}
          onChange={changeHandler}
          placeholder="Personal Email"
        ></FormInput>

        <FormInput
          type="number"
          name="phone_number_3"
          value={formData.phone_number_3}
          onChange={changeHandler}
          placeholder="Contact Number"
        ></FormInput>

        <FormInput
          type="number"
          name="kiit_roll_number_3"
          value={formData.kiit_roll_number_3}
          onChange={changeHandler}
          placeholder="KIIT Roll Number"
        ></FormInput>

        <FormInput
          name="github_username_3"
          onChange={changeHandler}
          value={formData.github_username_3}
          placeholder="Github Username"
        ></FormInput>
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
        <a
          href="https://organize.mlh.io/participants/events/4819-hacktoberfest-kiit-university-vitual-meetup"
          target="_blank"
        >
          <SimpleButton>REGISTER</SimpleButton>
        </a>
        <div>
          <ClosingInText>Closing in &rarr;</ClosingInText>
          <Timer id="registerTimer"></Timer>
        </div>
      </ButtonTimerContainer>
    </div>
  )
}

const RegistrationForm: React.FC = () => {
  const responseCode = 200

  const [eventMessage, setEventMessage] = useState<string>('')
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    personal_email: '',
    phone_number: '',
    kiit_roll_number: '',
    github_username: '',
    address_line_1: '',
    address_line_2: '',
    state_province: '',
    city: '',
    postal_zip_code: '',
    t_shirt_size: '',

    team_name: '',
    team_members: '',

    first_name_1: '',
    last_name_1: '',
    personal_email_1: '',
    phone_number_1: '',
    kiit_roll_number_1: '',
    github_username_1: '',

    first_name_2: '',
    last_name_2: '',
    personal_email_2: '',
    phone_number_2: '',
    kiit_roll_number_2: '',
    github_username_2: '',

    first_name_3: '',
    last_name_3: '',
    personal_email_3: '',
    phone_number_3: '',
    kiit_roll_number_3: '',
    github_username_3: '',
  })

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const formDataTyped = new FormData()
    formDataTyped.append('first_name', formData.first_name)
    formDataTyped.append('last_name', formData.last_name)
    formDataTyped.append('personal_email', formData.personal_email)
    formDataTyped.append('phone_number', formData.phone_number)
    formDataTyped.append('kiit_roll_number', formData.kiit_roll_number)
    formDataTyped.append('github_username', formData.github_username)
    formDataTyped.append('address_line_1', formData.address_line_1)
    formDataTyped.append('address_line_2', formData.address_line_2)
    formDataTyped.append('state_province', formData.state_province)
    formDataTyped.append('city', formData.city)
    formDataTyped.append('postal_zip_code', formData.postal_zip_code)
    formDataTyped.append('phone_number', formData.phone_number)
    formDataTyped.append('t_shirt_size', formData.t_shirt_size)

    formDataTyped.append('team_name', formData.team_name)
    formDataTyped.append('number_of_team_members', formData.team_members === '' ? '0' : formData.team_members)

    formDataTyped.append('member_2_first_name', formData.first_name_1)
    formDataTyped.append('member_2_last_name', formData.last_name_1)
    formDataTyped.append('member_2_personal_email', formData.personal_email_1)
    formDataTyped.append('member_2_phone_number', formData.phone_number_1)
    formDataTyped.append('member_2_kiit_roll_number', formData.kiit_roll_number_1)
    formDataTyped.append('member_2_github_username', formData.github_username_1)

    formDataTyped.append('member_3_first_name', formData.first_name_2)
    formDataTyped.append('member_3_last_name', formData.last_name_2)
    formDataTyped.append('member_3_personal_email', formData.personal_email_2)
    formDataTyped.append('member_3_phone_number', formData.phone_number_2)
    formDataTyped.append('member_3_kiit_roll_number', formData.kiit_roll_number_2)
    formDataTyped.append('member_3_github_username', formData.github_username_2)

    formDataTyped.append('member_4_first_name', formData.first_name_3)
    formDataTyped.append('member_4_last_name', formData.last_name_3)
    formDataTyped.append('member_4_personal_email', formData.personal_email_3)
    formDataTyped.append('member_4_phone_number', formData.phone_number_3)
    formDataTyped.append('member_4_kiit_roll_number', formData.kiit_roll_number_3)
    formDataTyped.append('member_4_github_username', formData.github_username_3)

    fetch(`${config.registration.url}/register_team`, {
      method: 'POST',
      body: formDataTyped,
    })
      .then((response) => {
        console.log(response)
        if (response.status !== responseCode) {
          setEventMessage('❌ Registration Unsuccessful!')
          window.alert(response.statusText);
        } else {
          setEventMessage('✅ Successfully Registered for the event.')    
        setFormData({
          first_name: '',
          last_name: '',
          personal_email: '',
          phone_number: '',
          kiit_roll_number: '',
          github_username: '',
          address_line_1: '',
          address_line_2: '',
          state_province: '',
          city: '',
          postal_zip_code: '',
          t_shirt_size: '',

          team_name: '',
          team_members: '',

          first_name_1: '',
          last_name_1: '',
          personal_email_1: '',
          phone_number_1: '',
          kiit_roll_number_1: '',
          github_username_1: '',

          first_name_2: '',
          last_name_2: '',
          personal_email_2: '',
          phone_number_2: '',
          kiit_roll_number_2: '',
          github_username_2: '',

          first_name_3: '',
          last_name_3: '',
          personal_email_3: '',
          phone_number_3: '',
          kiit_roll_number_3: '',
          github_username_3: '',
        })
      }
        return response.json()
      })
      .then((data) => {
        if ('error' in data) {
          console.error(data)
        } else {
          console.log('Registration successful.')
        }
      })
      .catch((err) => {
        console.error(err)
      })
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
        <PersonalDetails changeHandler={onChangeHandler} formData={formData} />

        <hr
          style={{
            height: '1px',
            backgroundColor: '#93C2DB',
            margin: '2rem 0 2rem 0',
          }}
        ></hr>

        <Teams changeHandler={onChangeHandler} formData={formData} />

        <SubmissionNote>
          Important : Once Submitted the details cannot be changed, so please
          review the filled up details before submitting.
        </SubmissionNote>
        <SubmitButton />
        <Message style={{ color: 'white', margin: '2rem 0' }}>
          {eventMessage}
        </Message>
      </FormContainer>

      <br></br>

      <FormContainer>
        <MLHRegister></MLHRegister>
      </FormContainer>
    </SectionDark>
  )
}

export { RegistrationForm }
