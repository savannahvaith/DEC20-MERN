'use strict';
import PropTypes from 'prop-types';

// const Post = ({name,mail}) => {
const Post = (props) => {

    const { name, mail } = props;

    return (
        <>
            <h3>{props.headerText}</h3>
            <p>{name}</p>
            <a href="mailto:svaithilingam@qa.com">{mail}</a>
        </>
    );
}
Post.defaultProps = {
    headerText: `Use this value, if nothing is passed in!`
}

Post.propTypes = { 
    name: PropTypes.string.isRequired,
    mail: PropTypes.string
}

export default Post; 