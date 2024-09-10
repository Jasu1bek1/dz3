import { useSelector } from "react-redux"


function Number() {
    const num = useSelector(s => s.reducer.num)
    const text = useSelector(s => s.reducer.text)
  return (
    <div>
        <h1>{num}</h1>
        <h1>{text}</h1>
    </div>
  )
}

export default Number