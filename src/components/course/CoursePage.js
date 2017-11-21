import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CourseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursePage extends React.Component {
    constructor(props, context) {
        super(props);
        this.redirectToAddCourse = this.redirectToAddCourse.bind(this);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    redirectToAddCourse() {
        browserHistory.push('/course');
    }

    render() {
        const {courses} = this.props;

        return (
            <div>
                <h1>Course</h1>
                <input type="submit"
                       defaultValue="Add Course"
                       className="btn btn-primary"
                       onClick={this.redirectToAddCourse} />
                <CourseList courses={courses}/>
            </div>
        );
    }
} 

CoursePage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CourseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);