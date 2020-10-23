import React from 'react'
import './App.css'


const BookedRooms = ({room,children,count}) => {
    return (
      <table className="">
            <thead>
          <tr>
              <th>Rooms</th>
              <th>childrens</th>
              <th>auldts</th>

          </tr>
          </thead>
          <tbody>
          <tr>
              <td>
                  {room}
              </td>
              <td>
                  {children}
              </td>
              <td>
                  {count}
              </td>
          </tr>
          </tbody>
      </table>
    )
}

export default BookedRooms
