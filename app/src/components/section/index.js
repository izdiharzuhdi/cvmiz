'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');
const About = require('./about');
const Work = require('./work');
const Education = require('./education');
const Skills = require('./skills');
const Projects = require('./projects');
const Slides = require('./slides');
const References = require('./references');
const Footer = require('./footer');

const Section = React.createClass({
    propTypes: {
        basics: ResumePropTypes.basics,
        work: ResumePropTypes.workSet,
        education: ResumePropTypes.educationSet,
        skills: ResumePropTypes.skillsSet,
        languages: ResumePropTypes.languagesSet,
        projects: ResumePropTypes.publicationsSet,
        slides: ResumePropTypes.slides,
        references: ResumePropTypes.referencesSet
    },

    render: function () {
        const skillsContent = {
            skills: this.props.skills,
            languages: this.props.languages
        };

        return (
            <div>
                <About content={this.props.basics}/>
                <Work content={this.props.work}/>
                <Education content={this.props.education}/>
                <Skills content={skillsContent}/>
                <Projects content={this.props.projects}/>
                <Slides content={this.props.slides}/>
                <References content={this.props.references}/>
                <Footer content={this.props.basics}/>
            </div>
        );
    }
});

module.exports = Section;
