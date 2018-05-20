import React, { Component } from 'react';
import Gauge from 'react-svg-gauge';

const ex = {
    value: 720,
    color: 'green',
}

const CreditScoreContainer = () => (
  <div>
  <Gauge value={ex.value} width={300} height={320} label="Credit Score: 720" color={ex.color} max='800'/>
  </div>
)


module.exports.CreditScoreContainer = CreditScoreContainer;
