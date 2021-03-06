import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { deleteLog, setCurrent } from '../../actions/logAction'
import M from 'materialize-css/dist/js/materialize.min.js'

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id)
    M.toast({ html: `Log #${log.id} deleted by ${log.tech}` })
  }

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
          onClick={() => {
            setCurrent(log)
          }}
        >
          {log.message}
        </a><a
          href="#!"
          onClick={onDelete}
          className="material-icons secondary-content"
        >
          delete
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last updated by{' '}
          {'  '}
          <span className="black-text">{log.tech}</span> on{' '}
          <Moment format="MMM Do YYYY, h:mm:ss a">{log.date}</Moment>>
        </span>
        
      </div>
    </li>
  )
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
}

export default connect(null, { deleteLog, setCurrent })(LogItem)
