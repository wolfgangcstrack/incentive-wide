import React, { Component } from 'react';
import {NewUserMain} from './../container/NewUserMain.jsx'
import './../main.css'

const About = () => (
  <div className="container">
    <img className="houseImgOverlay" src="https://i.kinja-img.com/gawker-media/image/upload/s--bIV3xkEm--/c_scale,f_auto,fl_progressive,q_80,w_800/jsprifdd1gmfy7e7nola.jpg" />
    <section className="is-info is-fullheight">
            <div className="hero-head">

                </div>

                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-6 is-offset-3">
                            <h1 className="title has-text-black">
                                About
                            </h1>
                            <h2 className="subtitle has-text-black has-text-weight-bold">
                                $this is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.
                            </h2>
                            <NewUserMain />
                        </div>
                    </div>
                </div>

        </section>
  </div>


)

module.exports.About = About;
