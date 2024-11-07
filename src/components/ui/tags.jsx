import React from 'react';
import PropTypes from 'prop-types';

function TechTags({techList}) {
    const colorPairs = [
        {background: 'bg-pink-200', text: 'text-pink-800'},
        {background: 'bg-yellow-200', text: 'text-yellow-800'},
        {background: 'bg-green-200', text: 'text-green-800'},
        {background: 'bg-primary-200', text: 'text-primary-800'},
        {background: 'bg-purple-200', text: 'text-purple-800'},
        {background: 'bg-teal-200', text: 'text-teal-800'},
        {background: 'bg-orange-200', text: 'text-orange-800'},
    ];
    return (
        <div className="flex flex-wrap gap-2">
            {techList.map((tech) => {
                const {background, text} = colorPairs[Math.floor(Math.random() * colorPairs.length)];

                return (
                    <span
                        key={tech}
                        className={`px-2 py-1 text-sm text-primary-700 bg-primary-100 border-[1px] border-primary-400 rounded-md`}
                    >
            {tech}
          </span>
                );
            })}
        </div>
    );
}

// Define propTypes for the component
TechTags.propTypes = {
    techList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TechTags;
