import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const { children } = props

  return (
    <div>
      <Navbar />
      <hr />
      <div className="main-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="children-container">
          {children}
        </div>
      </div>
    </div>
  )

  // return (
  //   <div>
  //     <Navbar />
  //     <hr />
  //     <Link to='/products'><button>See Our Dragons!</button></Link>
  //   </div>
  // )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
}
