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

 const newIVehicle:IVehicle = {
   id: null,
   name: "",
   description: "",
   plate: "",
   isFavorite: false,
   year: null,
   color: "",
   price: null,
   createdAt: null,
 }
  useEffect(() => {
    setVehicleUpdated(() => newIVehicle)
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

  const handleSearch = (filter:any) => {
    console.log(filter)
    let filtered = filter.name != "" ? vehicles.filter((vehicles) => vehicles.name.toLowerCase().includes(filter.name.toLowerCase())) : vehicles
    
    if(filter.name){
      filtered = filter.name != "" ? filtered.filter((vehicles) => vehicles.name.toLowerCase().includes(filter.name.toLowerCase())) : filtered

    }

    if(filter.year){
      filtered = filter.year != "" ? filtered.filter((vehicles) => vehicles.year?.toString().includes(filter.year.toLowerCase())) : filtered

    }

    setFilteredCars(() => filtered) 
  }

  const handleUpdate = () => {
    fetchVehicles()
  }

  console.log({ vehicles });

  const showNewCar = async () => {
  setAddNewCar(!addNewCar)
  fetchVehicles()

  if(addNewCar) {
    setVehicleUpdated (() => newIVehicle)
  }
  }

  return (
    <>
      <div className={styles.Vehicles}>
        <main className={styles.main}>

         <>
          {!addNewCar ?  <Search handleSearch={handleSearch} placeholder="Buscar" onChange={handleSearch}/> : ""}
            

            <Button openNewCar={!addNewCar} text="ADCIONAR" onClick={showNewCar}/>

            {addNewCar ? <NewCar vehicleUpdated={vehicleUpdated} /> : null}
          
            {!addNewCar ? 

            <div className={styles.cardsSpace}>
              {listCar()}
            </div> : ""}
            
         </>

        </main>
      </div>
      <Footer />
    </>
  );
};

export default VehiclesPage;
