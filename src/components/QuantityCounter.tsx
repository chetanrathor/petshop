import React, { useState } from 'react'
import { RootState, useAppDispatch } from '../stores/Store'
import { updateCart } from '../features/cart/api'
import { fetchCartItems, updateItemOfCart } from '../features/cart/state/cart.slice'
import { useSelector } from 'react-redux'

interface Properties {
  value: number,
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  id: string
}
const QuantityCounter = ({ onChange, value, id }: Properties) => {
  const { user } = useSelector((state: RootState) => state.authReducer)
  const dispatch = useAppDispatch()

  const [counterValue, setCounterValue] = useState(value)
  return (
    <div>
      {/* <button><span className='step-up'>^</span></button> */}
      <input type="number" min={1} max={10} value={counterValue} onBlur={() => {
        dispatch(updateItemOfCart({ id, quantity: counterValue })).then((r)=>{
          if(r.meta.requestStatus === 'fulfilled') {
            dispatch(fetchCartItems(user.id))
          }

        });
        dispatch(fetchCartItems(user.id))
      }} onChange={(e) => {
        const newValue = +e.target.value;
        if (newValue >= 1 && newValue <= 10) {
          setCounterValue(newValue);
        } else {
          setCounterValue(10);

        }
      }} className='p-3 Quantity_counter_input' name="" id="" />

    </div>
  )
}

export default QuantityCounter
