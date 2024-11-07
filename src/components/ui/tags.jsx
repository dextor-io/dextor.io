import React from 'react';
import PropTypes from 'prop-types';

function TechTags({techList}) {
    return (
        <div className="flex flex-wrap gap-2">
            {techList.map((tech) => {
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
