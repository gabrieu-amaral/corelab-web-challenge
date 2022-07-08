import { useEffect, useState } from "react";
import { getVehicles } from "../../lib/api";
import { Button, Card, Search } from "../../components";
import styles from "./Vehicles.module.scss";
import { IVehicle } from "../../types/Vehicle";
import Footer from "../../components/Footer";

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");
  const [addNewCar, setAddNewCar] = useState(false);

  useEffect(() => {
    const fetchVehicles = async () => {
    const payload = await getVehicles();
    setVehicles(payload);
   };

    fetchVehicles();
  }, []);

  const listCar = () => {
    return vehicles.map((vehicle) => 
      <Card title={vehicle.name} color={vehicle.color}>
        <p>Price: {vehicle.price}</p>
        <p>Description: {vehicle.description}</p>
        <p>Year: {vehicle.year}</p>
      </Card>
    )
  }

  console.log({ vehicles });

  const showNewCar = () => {
  setAddNewCar(!addNewCar)
  console.log(addNewCar)
  }

  return (
    <>
      <div className={styles.Vehicles}>
        <main className={styles.main}>

         <>
          {!addNewCar ?  <Search placeholder="Buscar" value={search} onChange={showNewCar}/> : ""}
            

            <Button text="ADCIONAR" onClick={showNewCar}/>
          
            <div className={styles.cardsSpace}>
              {listCar()}
            </div>
         </>

        </main>
      </div>
      <Footer />
    </>
  );
};

export default VehiclesPage;
