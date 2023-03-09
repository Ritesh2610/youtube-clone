import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/Contextapp'
import LeftNavMenuItem from "./LeftNavMenuItem"
import { categories } from "../utils/constants"
function LeftNav() {
  const { selectCategories, setSelectCategories, mobileMenu } = useContext(Context)
  const navigate=useNavigate

  const clickhandler = (name,type) => {
    // console.log(type,name);
    switch (type) {
      case "category":
        return setSelectCategories(name)
      case "home":
        return setSelectCategories(name)
      case "menu":
        return false
      default:
        break;
    }
  }
  return (
    <div className={`md:block w-[240px] ovrtflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-0
    md:translate-x-0 transition-all ${mobileMenu?"translate-x-0":"hidden"}`}>
      <div className="flex flex-col px-5">
        {categories.map((item, index) => {
          return (<React.Fragment key={index}>
            <LeftNavMenuItem    
              text={item.type === "home" ? "Home" : item.name}
              icon={item.icon}
              action={() => { clickhandler(item.name,item.type)
              navigate("/")}}
              className={`${selectCategories === item.name ? "bg-white/[0.15]" : " "}`}
            />
            {item.divider && (
              <hr className="my-5 border-white/[0.2]" />
            )}
          </React.Fragment>)
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">
          Clone by : Ritesh Pandey
        </div>
      </div>
    </div>
  )
}

export default LeftNav