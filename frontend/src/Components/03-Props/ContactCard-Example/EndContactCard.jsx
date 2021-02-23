'use strict';

const EndContactCard = ({img,name,phone,email}) => {
    return (
        <div className="contact-card">
            <img src={img} />
            <h3>{name}</h3>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
        </div>
    )
}
export default EndContactCard; 