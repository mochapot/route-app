import React from "react";
import { useLocation } from "react-router";

const Home = () => {
  // useLocation Hook 은 location 리턴
  // pathname: 현재 요청된 경로
  // state: navigate()로 이동할 떄 전달된 state
  const location = useLocation();
  // console.log(location);
  const state = location.state;
  const from = state ? state.from : "";
  return (
    <div className="card card-body">
      <h2>Home</h2>
      {from !== "" ? <h4>state.from {from} </h4> : ""}
    </div>
  );
};

export default Home;
