import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Card, Icon, Grid, Segment } from 'semantic-ui-react'
import Favourites from './Favourites'
import { getTokenFromLocalStorage } from './Helpers/auth'
import { Divider } from 'rsuite'
const UserPage = () => {
  const [profile, setProfile] = useState([])
  const [hasError, setHasError] = useState([])
  // const [experiences, setExperiences] = useState([])
  // const { id } = useParams()

  // const userIsOwner = (currentUserId) => {
  //   const payload = getPayLoad()
  //   if (!payload) return false
  //   return currentUserId === payload.sub
  // }

  //! GET PROFILE DATA
  useEffect(() => {
    const getData = async () => {
      try {
        const token = getTokenFromLocalStorage()
        console.log('token', token)
        const { data } = await axios.get('/api/profile', {
          headers: { Authorization: `Bearer ${token}` }
        })
        console.log('DATA =>', data)
        setProfile(data)
      } catch (err) {
        setHasError(true)
        console.log('ERROR =>', err.response)
      }
    }
    getData()
  }, [])
  //! STORE PROFILE DETAILS
  const userDetails = { ...profile }
  console.log('USER DETAILS =>', userDetails)

  const Page = () => (
    <div>
      {!userDetails ?
        <>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Segment compact>
            <h1>Hi, <span className='coral'> {userDetails.username}</span>!</h1>
            <br />
            <br />
            {profile ? <Favourites wishlist={profile.wishlist} /> : null}
          </Segment>

        </>
        :
        <Grid columns={2} padded='vertically' centered>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={4} computer={4}>
              <div className='custom-card margin-bottom'>
                <Card.Content>
                  <div className='avatar-profile' style={{ background: userDetails.profilePicture ? `url(${userDetails.profilePicture})` : 'rgb(240, 240, 240)' }} />
                </Card.Content>

                <Card.Content>

                  <p className='card-header'>{userDetails.username} {userDetails.firstName && userDetails.lastName && userDetails.mobile ? 'has verified' : 'has not verified yet'} </p>


                  <Card.Meta>
                    <p className='profile-details' padded='vertically'>{userDetails.firstName && userDetails.lastName ? '✓' : '✗'} Identity confirmed</p>
                  </Card.Meta>

                  <Card.Meta>
                    <p className='profile-details' padded='vertically'>{userDetails.email && userDetails.email ? '✓' : '✗'} Email confirmed</p>
                  </Card.Meta>

                  <Card.Meta>
                    <p className='profile-details' padded='vertically'>{userDetails.mobile && userDetails.mobile ? '✓' : '✗'} Phone number confirmed</p>
                  </Card.Meta>
                </Card.Content>
                <Card.Content>
                  <Card.Description>
                    Confirming account info helps keep the Experience community secure.
                  </Card.Description>
                </Card.Content>
              </div>

              <div className='custom-card'>

                <Card.Content>
                  <p className='card-header'>{userDetails.username}&apos;s contact details</p>
                </Card.Content>
                <Card.Content>
                  <Card.Meta>
                    <p className='profile-details'><Icon name='phone' /> {userDetails.mobile ? userDetails.mobile : 'Not provided'}</p>
                  </Card.Meta>

                  <Card.Meta>
                    <p className='profile-details'><Icon name='mail' /> {userDetails.email}</p>
                  </Card.Meta>
                </Card.Content>
              </div>
            </Grid.Column>

            <Grid.Column mobile={16} tablet={8} computer={8}>
              <div className='custom-card'>
                <div className='user-name'>
                  <br />
                  <h3 className='not-indented'>Hi, I&apos;m {userDetails.username}</h3>
                  <p>Joined in 2021</p>
                  <br />
                  <Divider />
                  <p>First name: <span className='normal-text'>{userDetails.firstName ? userDetails.firstName : '-'}</span></p>
                  <p>Last name: <span className='normal-text'>{userDetails.lastName ? userDetails.lastName : '-'}</span></p>
                  <p>Date of birth: <span className='normal-text'>{userDetails.dob ? new Date(userDetails.dob).toLocaleDateString() : '-'}</span></p>
                  <p>Occupation: <span className='normal-text'>{userDetails.occupation ? userDetails.occupation : '-'}</span></p>
                </div>
                <Divider />
                <div className='about-anna'>
                  <h3 className='not-indented'>About {userDetails.username}</h3>
                  <br />
                  <p className='normal-text'>{userDetails.about ? userDetails.about : 'Please tell us something about yourself! No description yet.'}</p>
                </div>
                <br />
                <div>
                  <p><Icon name='home' />  Lives in {userDetails.location ? userDetails.location : '-'}</p>
                  <p><Icon name='talk' /> Can speak {userDetails.languages ? userDetails.languages.length ? userDetails.languages.join(' ') : '-' : null}</p>
                </div>

                <Divider />
                <Card.Content>
                  <h3 className='not-indented'>{userDetails.username}&apos;s Reviews</h3>
                </Card.Content>


                <p className='profile-details'><Icon name='star outline' /> {userDetails.firstName} has no reviews at present.</p>




              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Column width={16}>
            <Divider />
            <div className="similar-experience-card-container">
              {profile ? <Favourites wishlist={profile.wishlist} /> : null}
            </div>
          </Grid.Column>


        </Grid >
      }
    </div>
  )

  //! FILTER FOR EXPERIENCES THEY ARE HOSTING


  return (
    <section className="host-container">
      {profile ?
        <>
          <Page />
        </>
        :
        <h1>
          {hasError ? 'Something has gone wrong' : 'Loading profile'}
        </h1>
      }
    </section >
  )
}
export default UserPage