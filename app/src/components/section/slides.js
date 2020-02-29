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
                            <button
                                onClick={this.props.previousSlide}>
                                    <i className="fa fa-arrow-right" />
                                
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
                            <button
                                onClick={this.props.NextSlide}>
                                Next Slide
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
                        // decorators={carouselConfig.decorators}
                        // wrapAround={carouselConfig.wrapAround}
                        // cellAlign='center'
                        // heightMode='current'
                        // renderBottomCenterControls={false}
                        // renderCenterLeftControls={({ previousSlide }) => (
                        //     <button onClick={previousSlide}> XXX
                        //     </button>
                        // )}
                        // renderBottomRightControls={({ nextSlide }) => (
                        //     <button onClick={nextSlide}>
                        //         <i className="fa fa-arrow-right" />
                        //     </button>
                        // )}
                        renderCenterLeftControls={({ previousSlide }) => (
                            <button onClick={previousSlide}>X</button>
                        )}
                        renderCenterRightControls={({ nextSlide }) => (
                            <button onClick={nextSlide}>Y</button>
                        )}
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
