import React from 'react'

const index = props => {
console.log('inside members', props)

const {name, role, email } = props.member;
  return (
    <div className="members">
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{email}</p>
    </div>
  )
}

export default index;
