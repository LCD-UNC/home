import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

{/*

    ProjectTab Component

*/}

class ProjectTab extends Component {
    render() {
        const { children, value, index } = this.props;

        return (
            <div role="tabpanel" hidden={value !== index}
                    id={`scrollable-force-tabpanel-${index}`}
                    aria-labelledby={`scrollable-force-tab-${index}`}>
                {value === index && (
                    <Box p={2}>
                        {children}
                    </Box>
                )}
            </div>
        );
    }
}

ProjectTab.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default ProjectTab;