// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location)
      console.log(driver.name);
  });
}

function driversByRevenue(drivers) {
  const driversCopy = [...drivers];
  driversCopy.sort(function(a, b) {
    return (a.revenue) - (b.revenue);
  });
  return driversCopy;
};

function driversByName(drivers) {
  const driversCopy = [...drivers];
  driversCopy.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
  return driversCopy;
}

function totalRevenue(drivers) {
  const initialValue = 0;
  return drivers.reduce(function(a, b) {
    return a + b.revenue}, initialValue);
}

function averageRevenue(drivers) {
  const count = Object.keys(drivers).length;
  // const sum = drivers.reduce((a, b) => a + b.revenue, 0);
  // return sum / count;
  return totalRevenue(drivers) / count;
}
