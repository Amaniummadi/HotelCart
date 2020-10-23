import React from "react";
import './App.css'
import { Counter } from "./features/counter/Counter";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  selectCount,
} from "./features/counter/counterSlice";
import {
  decrementrooms,
  incrementrooms,
  selectRooms,
} from "./features/counter/roomsSlice";
import {
  decrementchildrens,
incrementchildrens,  selectchildrens,
} from "./features/counter/childrenSlice";
import BookedRooms from "./BookedRooms";


function PeopleRooms() {
  
  let count = useSelector(selectCount);
  let room = useSelector(selectRooms);
  let children = useSelector(selectchildrens);

  const dispatch = useDispatch();
  const childrenAndAdults=count+children
  const isEnabledRoom = room > 1
  const isEnabledCount =  count > 1
  const isEnabledChildren = children > 1

  const RoomBooking = room >= 1 && room <=5 && count >=  1 && childrenAndAdults >=1 && childrenAndAdults<=4




  return (
    <div className="PeopleRooms">
    
    
<h1 className="font-medium text-xl head"><i className="fas fa-users"></i> Choose number of <strong> people</strong></h1>
      <div className="grid grid-cols-3 gap-4 border p-1 m-3">
        <div className="col-span-2 sub-head head"> <i className="fas fa-bed"></i> Rooms</div>
        <div className="col-span-1 ">
          <Counter
            handleIncrement={() => {
                dispatch(incrementrooms())
            }
            }
            handleDecrement={() => dispatch(decrementrooms())}
            isEnabled={isEnabledRoom}
            count={room}
          />
        </div>
        <div className="col-span-3 "><hr></hr></div>
        <div className="col-span-2 sub-head head"><i className="fas fa-user-alt"></i> adults</div>
        <div className="col-span-1 ">
        <Counter
        handleIncrement={() => dispatch(increment())}
        handleDecrement={() => dispatch(decrement())}
        isEnabled={isEnabledCount}
        count={count}
      />
        </div>
        <div className="col-span-3 "><hr></hr></div>
        <div className="col-span-2 sub-head head"><i className="fas fa-female"></i> children</div>
        <div className="col-span-1 ">
          <Counter
            handleIncrement={() => dispatch(incrementchildrens())}
            handleDecrement={() => dispatch(decrementchildrens())}
            isEnabled={isEnabledChildren}
            count={children}
          />
        </div>
      </div>

{RoomBooking ? <BookedRooms room={room} count={count} children={children}/> : <h1 className="font-bold text-xl ">sorry conditions are not satisfied, please enter correct number of rooms  </h1>}

    </div>
  );
}

export default PeopleRooms;
