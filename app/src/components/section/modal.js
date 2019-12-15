'use strict';

const React = require('react');
const PropTypes = React.PropTypes;
// import PropTypes from 'prop-types';
const ReactModal = require('react-modal');

const ResumePropTypes = require('../../prop_types/resume');
const Datetime = require('../../utils/datetime');
const BulletPoints = require('../bullet_points');

const Modal = React.createClass({
    propTypes: {
        entry: ResumePropTypes.projects,
        isOpen: PropTypes.bool.isRequired,
        onRequestClose: PropTypes.func.isRequired
    },

    render: function () {
        const style = {
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.75)'
            }
        };
    
        const startDate = Datetime.getDisplayFromDate(this.props.entry.startDate);
        const endDate = Datetime.getDisplayFromDate(this.props.entry.endDate);
        
        return (
            <ReactModal className='popup-modal mfp-hide' isOpen={this.props.isOpen} onRequestClose={this.props.onRequestClose} style={style}>
                <div className='description-box'>
                    <h3>{this.props.entry.name}</h3>
                    <p className='info'>
                        <span className='info-summary'>{this.props.entry.summary}</span>
                        <span> &bull; </span>
                        <em className='date'>{startDate} - {endDate}</em>
                    </p>
                    <BulletPoints points={this.props.entry.details} />
                </div>
                <div className='link-box'>
                    <a className='popup-modal-dismiss' onClick={this.props.onRequestClose}>Close</a>
                </div>
            </ReactModal>
        );
    }
});

module.exports = Modal;
