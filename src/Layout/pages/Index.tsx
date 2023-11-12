import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../appRedux/store";
import { GetCarsAction } from "../../appRedux/appSlises/carSlice/ActionCreateorCar";
import Translate from "../../i18n/Translate";
import imgSearch from "../../icons/testimgsearch.png";
import { Link } from "react-router-dom";

const Index = () => {
  const dispatch = useAppDispatch();
  const cars = useAppSelector((stete) => stete.CarReducerRoot.cars);
  useEffect(() => {
    dispatch(GetCarsAction());
  }, [dispatch]);

  return (
    <div className="indexPage">
      <div className="appColum-1">
        <div
          className="searchBox"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={imgSearch} alt="" />
        </div>
      </div>

      <div className="container text-center appMargin">
        <div className="row align-items-center">
          {
             <Link to={"/account/activate/12545"}>Go to Activ</Link>
          }
          <div className="col">
            <Translate contentKey="index.ouroffers">OUR OFFERS</Translate>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row align-items-center appRow">
          {cars !== null && cars.length > 0 ? (
            cars.map((car, key) => (
              <div className="col " key={key}>
                <div className="card">
                  <img
                    src={`https://amdprog.azurewebsites.net/api/img?imageName=${car.imagePath}`}
                    className="card-img-top"
                    alt="..."
                  />

                  <div className="card-body">
                    <p className="card-text">{car.name}</p>
                    <p className="card-text">{car.price}.zl</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1>Loading ... </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
