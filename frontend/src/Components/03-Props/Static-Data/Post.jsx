'use strict';

// const Post = ({name,mail}) => {
const Post = (props) => {
    console.log(props);
    const { name, mail } = props;

    return (
        <>
            <p>{name}</p>
            <a href="mailto:svaithilingam@qa.com">{mail}</a>
        </>
    );
}
export default Post; 