import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchLogs } from '../../actions/logAction'

const SearchBar = ({ searchLogs }) => {
  //? useRef doesn't re-render (uncontrolled input) while useState re-render (controlled input)
  // const text = useRef('')
  // const [q, setQ] = useState('')

  const onChange = (e) => {
    //? it always be one character behind what we type, let say F, F-value only after re-render and during this.render, q = ''
    // setQ(e.target.value.trim())
    // searchLogs(q)
    // searchLogs(text.current.value.trim())
    searchLogs(e.target.value.trim())
  }

  return (
    <nav style={{ marginBottom: '30px' }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="search for logs"
              // ref={text}
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}
SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
}
export default connect(null, { searchLogs })(SearchBar)
