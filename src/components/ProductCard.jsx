import { useState } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const updateFunc=()=>{
dispatch(modalFunc())
setOpenEdit(false)
navigate(`/?update=${dt?.id}`)
// dispatch(updateDataFunc(dt))
  }
  return (
    <div className="w-[200px] h-[200px] relative rounded-md m-8 ">
      <img className="w-full h-full rounded-md m-2" src={dt?.url} alt="" />
      <div className="absolute left-2 mt-[-15px] rounded-md  bg-indigo-600 text-white w-full p-2">
        <div>{dt?.name}</div>
        <div>{dt?.price} $</div>
      </div>

      <div
        onClick={() => setOpenEdit(!openEdit)}
        className="absolute top-2 right-0  cursor-pointer"
      >
        <MdOutlineEditNote color="greenyellow" size={30} />
      </div>
      {openEdit && (
        <div className="absolute font-bold top-2 right-10 text-green-500 flex gap-3">
          <div
            className="cursor-pointer"
            onClick={() => dispatch(deleteDataFunc(dt?.id))}
          >
            sil
          </div>
          -
          <div
            className="cursor-pointer"
            onClick={updateFunc}
          >
            güncelle
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
