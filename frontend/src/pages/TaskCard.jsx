import { LiaCommentSolid } from "react-icons/lia";
import { BsPaperclip, BsPlusCircleDotted } from "react-icons/bs";

export default function TaskCard() {
  return (
    <div className="card bg-base-100 shadow-xl self-center">
      <div className=" task  bg-slate-300 rounded-md p-4 text-slate-900">
        <span className="bg-red-400 text-center py-1 px-4 rounded-lg  ">
          Priority
        </span>
        <p className="task-title  text-base my-4  p-4 ">Design Ux and UI</p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-start gap-6">
            <p className="text-xl">
              <LiaCommentSolid /> 5
            </p>
            <p className="text-xl">
              <BsPaperclip /> 5
            </p>
          </div>

          <div className="add-new flex flex-row gap-2">
            <button className="text-3xl text-slate-400 hover:text-slate-950">
              <BsPlusCircleDotted />
            </button>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-8 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}