import React, { Component } from 'react';
import { CreditScoreContainer } from '../container/CreditScoreContainer';
import { ReferFriendContainer } from '../container/ReferFriendContainer';
import { ProgressBarContainer } from '../container/ProgressBarContainer';
import { ProgressBar } from './ProgressBar';
import Referral from '../container/Referral';

const DashBoardTemplate = ({ name }) => (
  <div>

  <nav className="navbar is-white">
      <div className="container">
          <div className="navbar-brand">
              <a className="navbar-item brand-text" href="../">
        Bulma Admin
      </a>
              <div className="navbar-burger burger" data-target="navMenu">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </div>
          <div id="navMenu" className="navbar-menu">
              <div className="navbar-start">
                  <a className="navbar-item" href="admin.html">
          Home
        </a>
                  <a className="navbar-item" href="admin.html">
          Orders
        </a>
                  <a className="navbar-item" href="admin.html">
          Payments
        </a>
                  <a className="navbar-item" href="admin.html">
          Exceptions
        </a>
              </div>

          </div>
      </div>
  </nav>
  <div className="container id-fluid">
      <div className="columns">

          <div className="column">

              <section className="hero is-info welcome is-small">
                  <div className="hero-body">
                      <div className="container">
                          <h1 className="title">
                              Hello, Admin.
                          </h1>
                          <h2 className="subtitle">
                              I hope you are having a great day!
                          </h2>
                      </div>
                  </div>
              </section>
              <br/>

              <div className="columns">
                <div className="column is-4">
                    <div className='box'>
                    <progress className="progress is-primary" value="15" max="100">30%</progress>
                    </div>
                    <div className='box'>
                    <progress className="progress is-primary" value="15" max="100">30%</progress>
                    </div><div className='box'>
                    <progress className="progress is-primary" value="15" max="100">30%</progress>
                    </div><div className='box'>
                    <progress className="progress is-primary" value="15" max="100">30%</progress>
                    </div><div className='box'>
                    <progress className="progress is-primary" value="15" max="100">30%</progress>
                    </div>
                </div>
              <div className="column is-8">
                <div className="box">
                  <div className="columns">
                    <div className="column is-half">
                      <div className="box">
                      Credit
                      </div>
                    </div>
                    <div className="column is-half">
                      <div className="box">
                        Insurance
                      </div>
                    </div>
                  </div>
                <br/>
                  <div className="columns">
                    <div className="column is-half">
                      <div className="box">
                        <Referral />
                      </div>
                    </div>
                    <div className="column is-half">
                      <div className="box">
                        Savings
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
      </div>
  </div>

  </div>
)

module.exports.DashBoardTemplate = DashBoardTemplate