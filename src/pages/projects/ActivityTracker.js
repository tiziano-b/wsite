import React from "react"
import ActivityTrackerComponent from '../../components/projects/ActivityTracker.js'

class ActivityTracker extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }


  render() {
    return (
      <div>
          <ActivityTrackerComponent/>
    </div>
    );
  }
}

 
export default ActivityTracker;