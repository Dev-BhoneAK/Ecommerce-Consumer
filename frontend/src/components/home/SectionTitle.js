import React from 'react';

const SectionTitle = ({ title }) => {
    return (
        <div className="col-12">
            <div className="title-basic">
                <h2 className="title font-fraunces">
                    <i className="fa-solid fa-bolt" />
                    {title}
                </h2>
            </div>
        </div>
    );
};

export default SectionTitle;
