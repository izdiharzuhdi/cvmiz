'use strict';
const React = require('react');
const Carousel = require('nuka-carousel');

const ResumePropTypes = require('../../prop_types/resume');

const Entry = React.createClass({
    propTypes: {
        entry: ResumePropTypes.slides
    },

    render: function () {
        return (
            <div>
                <img src={this.props.entry}/>
            </div>
        );
    }
});

const References = React.createClass({
    propTypes: {
        content: ResumePropTypes.slides
    },

    render: function () {
        const carouselConfig = {
            autoplay: true,
            decorators: [],
            framePadding: '10px',
            cellSpacing: 30,
            wrapAround: true
        };

        return (
            <section id='slides'>
                <div className='text-container'>
                    <div className='row'>
                            <Carousel
                            // autoplay={carouselConfig.autoplay}
                            // decorators={carouselConfig.decorators}
                            // wrapAround={carouselConfig.wrapAround}
                            cellAlign='center'
                            heightMode='current'
                            >
                                {this.props.content.pdf.map(function (entry, index) {
                                    return (
                                        <Entry key={index} entry={entry} />
                                    );
                                })}
                            </Carousel>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = References;
