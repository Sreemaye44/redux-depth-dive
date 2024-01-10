import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByValue } from "./redux/features/counterSlice";


function App() {

  const { count } = useSelector((state) => state.counter)

  const dispatch = useDispatch();


  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="flex border border-purple-300 rounded-md bg-slate-50 p-10">
          <button onClick={() => dispatch(increment())} className="px-3 py-2 rounded-md bg-green-300 text-xl font-semibold">Increment</button>
          <button onClick={() => dispatch(incrementByValue(5))} className="px-3 py-2 rounded-md bg-green-300 text-xl font-semibold">Increment by 5</button>
          <h1 className="text-3xl mx-10">{count}</h1>
          <button onClick={() => dispatch(decrement())} className="px-3 py-2 rounded-md bg-red-300 text-xl font-semibold">Decrement</button>
        </div>
      </div>
    </>
  )
}

export default App
