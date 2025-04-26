import React from "react";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { pricefilter } from "../../redux/FilterSlice";

const Filter = ({category}) => {
  const dispatch = useDispatch()

  function filterprice(start, end, category){
    dispatch(pricefilter({start, end, category}))
  }


  const ranges = [
    { start: 0, end: 10000, label: "Below ₹10,000", id: "underten" },
    { start: 10000, end: 20000, label: "Between ₹10,000 - ₹20,000", id: "undertwenty" },
    { start: 20000, end: 30000, label: "Between ₹20,000 - ₹30,000", id: "underthirty" },
    { start: 30000, end: 40000, label: "Between ₹30,000 - ₹40,000", id: "underforty" },
    { start: 40000, end: 50000, label: "Between ₹40,000 - ₹50,000", id: "underfifty" },
    { start: 50000, end: 60000, label: "Between ₹50,000 - ₹60,000", id: "undersixty" },
    { start: 60000, end: 70000, label: "Between ₹60,000 - ₹70,000", id: "underseventy" },
  ];

  return (
    <div className="filter">
      <div className="filtertext">Filter:</div>
      <div className="pricefilter">
        <div className="filtermainbox">
          <div className="filtertitle">Price</div>
          <i className="fa-light fa-angle-down" />
        </div>
        {ranges.map((item)=>{
          return(
            <label key={item.id} className="filterboxes" htmlFor={item.id}>
              <p>{item.label}</p>
              <input onChange={() => filterprice(item.start, item.end, category )} type="checkbox" id={item.id} />
            </label>
          )
        })}

      </div>
    </div>
  );
};

export default Filter;
