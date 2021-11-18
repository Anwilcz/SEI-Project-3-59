import React, { useState } from 'react'
import axios from 'axios'
// import { getTokenFromLocalStorage } from './Helpers/auth'
import ExperienceForm from './ExperienceForm'


const ExperienceNew = () => {

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    duration: '',
    locationCoord: 
      {
        latitude: '',
        longitude: ''
      },
    date: 
      [
        {
          day: '',
          month: '',
          year: ''
        }
      ],
    description: '',
    category: '',
    price: '',
    thingsToKnow: 
    [
      { text: '' },
      { text: '' },
      { text: '' }
    ],
    languages: '',
    whatIsIncluded: '',
    uploadImage: ''
  })



  const [errorData, setErrorData] = useState({
    name: '',
    location: '',
    duration: '',
    locationCoord: 
      {
        latitude: '',
        longitude: ''
      },
    date: 
      [
        {
          day: '',
          month: '',
          year: ''
        }
      ],
    description: '',
    category: '',
    //image: ''
    price: '',
    thingsToKnow: 
    [
      { text: '' },
      { text: '' },
      { text: '' }
    ],
    languages: '',
    whatIsIncluded: [''],
    uploadImage: ''
  })

  // const handleChange = (event) => {
  //   // const { target } = event
  //   const newFormData = { ...formData, [event.target.name]: event.target.value }
  //   console.log('Form Data ->', formData)
  //   console.log('Event Target Value ->', event.target.value)
  //   setFormData(newFormData)
  //   console.log('formData - look at this one!!-> ', formData)
  // }

  const handleInputChanges = level => e => {
    if (!level) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    } else {
      setFormData({
        ...formData,
        [level]: {
          ...formData[level],
          [e.target.name]: e.target.value
        }
      })
    }
  }

  // console.log(formData.date[0].day)

  const handleDateChanges = level => e => {
    if (!level) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    } else {
      setFormData({
        ...formData,
        [level]: [{
          ...formData.date[0],       
          [e.target.name]: e.target.value
        }]
      })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('Submitted Form Data ->', formData)
    try {
      await axios.post('/api/experiences',
        formData,
        {
          headers: { 
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTk2MmZmY2RhY2Q0NmQzZWM2MjcxMDQiLCJpYXQiOjE2MzcyMzkyMjYsImV4cCI6MTYzNzQ5ODQyNn0.C3K1Tyhee0ZC_6FxT4oSJv_zuGH8N0J9CXhDsJTSgZc' }
        }
      )
    } catch (err) {
      console.log('Error ->', err)
      setErrorData(err.response.data.errors)
    }
  }

  return (
    <section>
      <div>
        <ExperienceForm
          handleSubmit={handleSubmit}
          handleInputChanges={handleInputChanges}
          formData={formData}
          errors={errorData}
          setFormData={setFormData}
          handleDateChanges={handleDateChanges}
        />
      </div>
    </section>
  )

}

export default ExperienceNew



