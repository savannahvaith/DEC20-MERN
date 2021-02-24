import { useState } from 'react';

const LessText = ({ text, maxLength }) => {
    const [hidden, setHidden] = useState(true);

    if (text.length <= maxLength) {
        return <span>{text}</span>
    }

    return (
        <span>
            {hidden ? `${text.substr(0, maxLength).trim()}...` : text}

            {hidden ? (
                <a onClick={() => setHidden(false)}>Read More</a>
            ) : (
                    <a onClick={() => setHidden(true)}>Read Less</a>
                )}
        </span>
    );
}

export default LessText;