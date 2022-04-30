import React from 'react'

interface ProfileProps{
    name: string
    age: number
}

const Profile = (props: ProfileProps) => {
  return (
      <div style={{border:"2px solid",margin: "2px"}}>
          <h1>Name - {props.name}</h1>
          <h1>Age - {props.age}</h1>
      </div>
  )
}

export default Profile