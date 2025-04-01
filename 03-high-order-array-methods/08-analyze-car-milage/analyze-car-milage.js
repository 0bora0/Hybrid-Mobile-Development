function analyzeCarMileage(cars) {
              const totalMileage = cars.reduce((acc, car) => acc + car.mileage, 0);
              const averageMileage = totalMileage / cars.length;
              const highestMileageCar = cars.reduce((highest, car) => 
                car.mileage > highest.mileage ? car : highest
              );
              const lowestMileageCar = cars.reduce((lowest, car) => 
                car.mileage < lowest.mileage ? car : lowest
              );
              return {
                averageMileage,
                highestMileageCar,
                lowestMileageCar,
                totalMileage
              };
            }
            

module.exports = analyzeCarMileage;
