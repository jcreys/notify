import React from 'react'
import {connect} from 'react-redux';
import { Form, Field } from 'react-final-form';
import { subscribeToFilter } from '../store/filters';

/**
 * COMPONENT
 */
export const Home = ({username, onSubscribeToFilter}) => {
  const onSubmit = (values) => {
    console.log(values)
    return onSubscribeToFilter(values)
    .then(res => {
      console.log('res', res)
    })
    .catch((err) => {
      console.log('err', err)
    })
  }

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <Form
        onSubmit={onSubmit}
        //validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>            
            <div>
              <label>Phone Number</label>
              <Field name="phone_number" component="input" placeholder="Phone Number" />
            </div>
        
           {/* <h2>Render Function</h2>
            <Field
              name="bio"
              render={({ input, meta }) => (
                <div>
                  <label>Bio</label>
                  <textarea {...input} />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />*/}
    
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubscribeToFilter: (payload) => {
      return dispatch(subscribeToFilter(payload))
    }
  }
}

export default connect(mapState, mapDispatchToProps)(Home)
