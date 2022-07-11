import { useEffect, useState } from "react";
import { getVehicles } from "../../lib/api";
import { Button, Card, Search } from "../../components";
import styles from "./Vehicles.module.scss";
import { IVehicle } from "../../types/Vehicle";
import Footer from "../../components/Footer";
import NewCar from "./NewCar";

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [filteredCars, setFilteredCars] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");
  const [addNewCar, setAddNewCar] = useState(false);
  const [vehicleUpdated, setVehicleUpdated] = useState<IVehicle>();

  const fetchVehicles = async () => {
  const payload = await getVehicles();
  setVehicles(payload.data);
  setFilteredCars(payload.data)
 };

  useEffect(() => {

    fetchVehicles();
  }, []);

  const listCar = () => {
    return filteredCars.map((vehicle: IVehicle) => 
      <Card key={vehicle.id} title={vehicle.name} color={vehicle.color} edit={setEditVehicle} vehicle={vehicle} update={handleUpdate}>
        <p>Price: {vehicle.price}</p>
        <p>Description: {vehicle.description}</p>
        <p>Year: {vehicle.year}</p>
      </Card>
    )
  }

  const setEditVehicle = (toBeUpdated: IVehicle) => {
    setVehicleUpdated(() => toBeUpdated)
    setAddNewCar(() => true)
  }

  const handleSearch = (filter:string) => {
    console.log(filter)
    let filtered = filter != "" ? vehicles.filter((vehicles) => vehicles.name.toLowerCase().includes(filter.toLowerCase())) : vehicles
    setFilteredCars(() => filtered) 
  }

  const handleUpdate = () => {
    fetchVehicles()
  }

  console.log({ vehicles });

  const showNewCar = async () => {
  setAddNewCar(!addNewCar)
  fetchVehicles()
  }

  return (
    <>
      <div className={styles.Vehicles}>
        <main className={styles.main}>

         <>
          {!addNewCar ?  <Search placeholder="Buscar" onChange={handleSearch}/> : ""}
            

            <Button openNewCar={!addNewCar} text="ADCIONAR" onClick={showNewCar}/>

            {addNewCar ? <NewCar vehicleUpdated={vehicleUpdated} /> : null}
          
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
