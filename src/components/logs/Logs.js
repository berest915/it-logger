import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LogItem from './LogItem'
import Preloader from '../layout/Preloader' 
import PropTypes from 'prop-types'
import { getLogs } from '../../actions/logAction'

//  props => case State ==> xReducer: { 'whatever state needed' } || or might destructure at mapStateToProps => (eg:) log: state.log.logs || state.log.loading
//  props => case Action ==> { 'whatever action needed' }
const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs()
    // eslint-disable-next-line
  }, [])

  if (loading || logs === null) {
    return <Preloader />
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to display..</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  )
}
Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
  //props: specific reducer from rootReducer
  log: state.log
})
export default connect(mapStateToProps, { getLogs })(Logs)
