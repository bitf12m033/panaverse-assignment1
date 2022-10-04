const make_car = (manufacturer, model, ...options) => {
    const car_dict  = new Object();
    car_dict.manufacturer = manufacturer;
    car_dict.model = model;
    
    console.log(make_car.arguments);
}

make_car('subaru', 'outback', color='blue', tow_package=true)