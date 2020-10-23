import React from 'react'

const BookedRooms = ({room,children,count}) => {
    return (
      <table>
          <tr>
              <th>Rooms</th>
              <th>childrens</th>
              <th>auldts</th>

          </tr>
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
      </table>
    )
}

export default BookedRooms
