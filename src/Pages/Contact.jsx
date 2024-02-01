import React from 'react'



function Contact() {

  const contacts = [
    {
      name: "Peter Johnson",
      club: "Man Utd",
      color: "Black",
      id: 1
    },
    {
      name: "Christian Leo",
      club: "Liverpool",
      color: "Blue",
      id: 2
    },
    {
      name: "Johnny Son",
      club: "Chelsea",
      color: "Green",
      id: 3
    }
  ]
  return (
    <>
      <h1>List of contacts</h1>
      <ul>
        {contacts.map((x) => <li key={x.id}>{x.name}</li>)}
      </ul>
      
    </>
  )
}

export default Contact