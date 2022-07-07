import { useEffect, useState } from "react";
//import { getVehicles } from "../../lib/api";
import { Button, Card, Search } from "../../components";
import styles from "./Vehicles.module.scss";
import { IVehicle } from "../../types/Vehicle";
import Footer from "../../components/Footer";

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [addNewCar, setAddNewCar] = useState(false);

  useEffect(() => {
    // const fetchVehicles = async () => {
    //   const payload = await getVehicles();
    //   setVehicles(payload);
    // };

    // fetchVehicles();
  }, []);

  console.log({ vehicles });

  const showNewCar = () => {
  setAddNewCar(!addNewCar)
  console.log(addNewCar)
  }

  return (
    <>
      <div className={styles.Vehicles}>
        <main className={styles.main}>

          {!addNewCar ?  <Search placeholder="Buscar" value={search} onChange={showNewCar}/> : ""}
          

          <Button text="ADCIONAR" onClick={showNewCar}/>

          <Card title="Sandero Stepway">
            <p>Price: 22000</p>
            <p>Description: Carro usado por 2 anos...</p>
            <p>Year: 2018</p>
          </Card>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default VehiclesPage;
