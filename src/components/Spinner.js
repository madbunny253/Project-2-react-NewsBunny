import React, { Component } from 'react'
import loading from './loading.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-4' >
        <img src={loading} alt="loading" style={{height: '2%', width: '2%'}}/>
      </div>
    )
  }
}