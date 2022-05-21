import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux';
import { Form, Field } from 'react-final-form';
import { subscribeToFilter, getListings } from '../store/listings';

/**
 * COMPONENT
 */
export const Home = ({username, onSubscribeToFilter, onGetListings, listings }) => {
  const [filters, setFilters] = useState({});
  const [showSubscribeButton, setShowSubscribeButton] = useState(false)

  const onSubmit = ({ maxPrice, minPrice }) => {
    console.log('values',maxPrice, minPrice)
    const payload = {}
    if (maxPrice) payload.maxPrice = maxPrice;
    if (minPrice) payload.minPrice = minPrice;
    setFilters(payload);
    setShowSubscribeButton(false)

    return onGetListings(payload)
    .then(res => {
      console.log('res', res)
      setShowSubscribeButton(true)
    })
    .catch((err) => {
      console.log('err', err)
    })
  }

  const onSubscribe = () => {
    return onSubscribeToFilter(filters)
      .then(res => {
        console.log('onSubscribe res', res)
        alert('Subscription saved!')
      })
      .catch((err) => {
        console.log('onSubscribe err', err)
      })
  }

  useEffect(() => {
    onGetListings({})
    .then(res => {
      console.log('res', res)
      setShowSubscribeButton(true);
    })
  }, [])

  return (
    <div className='postings'>
      <h3 className='navTitle'>Notify!</h3>
      <Form
        onSubmit={onSubmit}
        //validate={validate}
        render={({ handleSubmit  }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Min Price</label>
              <Field name="minPrice" component="input" placeholder="Min Price" />
            </div>    
            <div>
              <label>Max Price</label>
              <Field name="maxPrice" component="input" placeholder="Max Price" />
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
      {listings.map((listing) => {
        return <div className='news-item' key={listing.id}>
          <div>{`${listing.id}. ${listing.name} $ ${listing.price}`}</div>
        </div>
      }).sort()}
      {showSubscribeButton && <button onClick={onSubscribe} type='button'>Subscribe</button>}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username,
    listings: state.listing.listings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetListings: (payload) => {
      return dispatch(getListings(payload))
    },
    onSubscribeToFilter: (payload) => {
      return dispatch(subscribeToFilter(payload))
    }
  }
}

export default connect(mapState, mapDispatchToProps)(Home)
