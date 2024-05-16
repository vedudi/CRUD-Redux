import { IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { searchDataFunc, sortingDataFunc } from "../redux/dataSlice";


const Header = () => {
  const dispatch=useDispatch()
  return (
    <div className="flex items-center justify-between bg-indigo-500 text-white p-4">
      <div className="text-4xl">C.R.U.D practice with redux</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select onChange={e=>dispatch(sortingDataFunc(e.target.value))} className="h-10 px-2 rounded-lg" name="" id="">
            <option value="asc">Artan</option>
            <option value="desc">Azalan</option>
          </select>
        </div>
        <div>
          <input onChange={e=>dispatch(searchDataFunc(e.target.value))} className="h-10 px-2 rounded-lg text-black" type="text" placeholder="search ..."/>
        </div>
        <div onClick={()=>dispatch(modalFunc())} className="bg-indigo-800 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
        <IoMdAddCircleOutline size={30} />

        </div>
      </div>
    </div>
  )
}

export default Header