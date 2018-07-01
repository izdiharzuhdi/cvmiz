'use strict';

const ReactDOM = require('react-dom');
const React = require('react');
import PropTypes from 'prop-types';
const Routes = require('./routes');
const request = require('superagent');

function getResumePath() {
    if (['localhost', '127.0.0.1'].indexOf(window.location.hostname) === -1) {
        return '/resume.example.json';
    }
    return '/resume.example.json';
}

function getNavigation() {
    return {
        home: 'Home',
        about: 'About',
        work: 'Work',
        education: 'Education',
        skill: 'Skills',
        portfolio: 'Projects',
        testimonials: 'References'
    };
}

ReactDOM.render(
    Routes.get({
        resumePath: getResumePath(),
        navigation: getNavigation()
    }),
    document.getElementById('app')
);