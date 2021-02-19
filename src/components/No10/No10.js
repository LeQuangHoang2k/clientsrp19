import React, { useEffect } from "react";

import "../../styles/no10/no10.css";
import Avatar from "../../img/avatar.jpg";
import { useSelector } from "react-redux";
import ButtonChat from "./ButtonChat";

function No10(props) {
  const offer = useSelector((state) => state.offer);

  return (
    <div className="no10">
      <article className="no10">
        {offer.list.map((offers, index) => {
          return (
            <section className="no10" key={index}>
              <img src={Avatar} className="no10" alt="mage" />
              <main className="no10">
                <a href="âs" className="no10">
                  {offers.name}
                </a>
                <h6 className="no10">1 bạn chung : Đức Nghị</h6>
                <h5 className="no10">Học tại Đại học Bách Khoa</h5>
                <h4 className="no10">Sống tại Hồ Chí Minh</h4>
              </main>
              <aside className="no10">
                <ButtonChat offerId={offers._id} />
                <button className="no10 add">+</button>
              </aside>
            </section>
          );
        })}
      </article>
      <div className="" style={{ textAlign: "center" }}>
        Đề xuất bạn bè
      </div>
    </div>
  );
}

export default No10;
