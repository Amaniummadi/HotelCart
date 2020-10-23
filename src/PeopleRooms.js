import React,{useState} from "react";

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
    
    
<h1 className="font-bold text-xl ">Choose number of people</h1>
      <div className="grid grid-cols-3 gap-4 border p-1 m-3">
        <div className="col-span-2 ">Rooms</div>
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
        <div className="col-span-2 ">adults</div>
        <div className="col-span-1 ">
        <Counter
        handleIncrement={() => dispatch(increment())}
        handleDecrement={() => dispatch(decrement())}
        isEnabled={isEnabledCount}
        count={count}
      />
        </div>
        <div className="col-span-3 "><hr></hr></div>
        <div className="col-span-2 ">children</div>
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
