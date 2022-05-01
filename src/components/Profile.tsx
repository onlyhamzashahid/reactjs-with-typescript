import React, { } from 'react'

interface ProfileProps{
    name?: string
    age: number
    // status?: string
    status?: "Designer" | "Developer" | "Unknown"
    children?: React.ReactNode
}

const Profile = ({name,age, status,children}: ProfileProps) => {
  return (
      <div style={{border:"2px solid",margin: "2px"}}>
          <h1>Name - {name || "User"}</h1>
          <h1>Age - {age}</h1>
          <h1>Status - {status || "Unknown"}</h1>
          <h1>{children}</h1>
      </div>
  )
}

export default Profile