import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../appRedux/store";
import { GetCarsAction } from "../../appRedux/appSlises/carSlice/ActionCreateorCar";
import Translate from "../../i18n/Translate";

const Index = () => {
  const dispatch = useAppDispatch();
  const cars = useAppSelector((stete) => stete.CarReducerRoot.cars);

  useEffect(() => {
    dispatch(GetCarsAction());
  }, [dispatch]);

  return (
    <div className="indexPage">
      <div className="appColum-1"></div>

      <div className="container text-center appMargin">
        <div className="row align-items-center">
          <div className="col">
            <Translate contentKey="index.ouroffers">OUR OFFERS</Translate>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row align-items-center appRow">
          {cars !== null && cars.length > 0 ? (
            cars.map((car, key) => (
              <div className="col card" key={key}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={`https://amdprog.azurewebsites.net/api/img?imageName=${car.imagePath}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text" style={{ color: "#fff" }}>
                      {car.name}
                    </p>
                    <p className="card-text" style={{ color: "#fff" }}>
                      {car.price}.zl
                    </p>
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
