import React from 'react'

const EachListItem = ({ contact }) => {
    let { index, balance, picture, age, eyeColor, name, company, email, phone, address, greeting } = contact;
    return (
        <div>
            <div><strong>Index:</strong>  {index}</div>
            <div><strong>Balance:</strong>  {balance}</div>
            <div><strong>Picture:</strong>  {picture}</div>
            <div><strong>Age:</strong>  {age}</div>
            <div><strong>EyeColor:</strong>  {eyeColor}</div>
            <div><strong>Name:</strong>  {`${name.first} ${name.last}`}</div>
            <div><strong>Company:</strong>  {company}</div>
            <div><strong>Email:</strong>  {email}</div>
            <div><strong>Phone:</strong>  {phone}</div>
            <div><strong>Address:</strong>  {address}</div>
            <div><strong>Greeting:</strong>  {greeting}</div>
        </div>
    );
}

export default EachListItem;