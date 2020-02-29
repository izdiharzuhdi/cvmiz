'use strict';

const React = require('react');

const Carousel = require('nuka-carousel');

const ResumePropTypes = require('../../prop_types/resume');

const Entry = React.createClass({
    propTypes: {
        entry: ResumePropTypes.slides.number
    },

    render: function () {
        return (
            <div>
                {/* {this.props.entry} */}
                <img src={this.props.entry} />
            </div>
        );
    }
});

const References = React.createClass({
    propTypes: {
        content: ResumePropTypes.slides
    },

    render: function () {
        var Decorators = [
            {
                component: React.createClass({
                    render() {
                        return (
                            <button onClick={this.props.previousSlide}>
                                <i className="fa fa-angle-left" />
                            </button>
                        )
                    }
                }),
                position: 'CenterLeft',
                style: {
                    padding: 20
                }
            },
            {
                component: React.createClass({
                    render() {
                        return (
                            <button onClick={this.props.nextSlide}>
                                <i className="fa fa-angle-right" />
                            </button>
                        )
                    }
                }),
                position: 'CenterRight',
                style: {
                    padding: 20
                }
            },

        ];
        const carouselConfig = {
            autoplay: true,
            decorators: Decorators,
            framePadding: '10px',
            cellSpacing: 30,
            wrapAround: true
        };
        return (
            <section id='slides'>
                <div className='text-container'>
                    <Carousel
                        // autoplay={carouselConfig.autoplay}
                        decorators={carouselConfig.decorators}
                        // wrapAround={carouselConfig.wrapAround}
                        cellAlign='center'
                    >
                        {this.props.content.number.map(function (entry, index) {
                            return (
                                <Entry key={index} entry={entry} />
                            );
                        })}
                    </Carousel>
                </div>
            </section>
        );
    }
});

module.exports = References;
