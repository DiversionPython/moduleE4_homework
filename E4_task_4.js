function ElectroDevice(wattage, group, brand){
    this.wattage = wattage;
    this.group = group;
    this.brand = brand;
    this.powerOn = function(turn){
        if (turn === 'on') {
            console.log('You have connected the device to an outlet');
            currentTurn = turn;
            return currentTurn;
        }else if (turn == 'off') {
            console.log(`Your device is unplugged from the wall outlet. Enter the command to continue 'on'`);
            currentTurn = turn;
            return currentTurn;
        }
    };
    this.getConsumption = function(hour){
        if (currentTurn === 'on' && hour > 0){
            console.log(`Сonsumption per ${hour} hour is ${this.wattage /1000  * hour} kW`);
        }else if (hour < 1) {
            console.log('The working time is incorrectly specified');
        }else {
            console.log('Turn on the device to find out the power consumption');
        }
    };
}

function HouseholdDevice(wattage, group, brand, smart){
    this.wattage = wattage;
    this.group = group;
    this.brand = brand;
    this.smart = smart;
    this.getHeatingArea = function(){
        if (this.group === 'heaters'){
            console.log(`This heater with a capacity of ${this.wattage} watts heats ${this.wattage / 100} sq.m.`);
        }else {
            console.log(`${this.group} - this group devices does not have the specified property`);
        }
    };
}

function PowerTool(wattage, group, brand, max_revol){
    this.wattage = wattage;
    this.group = group;
    this.brand = brand;
    this.max_revol = max_revol;
}

function EmbeddedEquipment(wattage, group, brand, body_material){
    this.wattage = wattage;
    this.group = group;
    this.brand = brand;
    this.body_material= body_material;
}


HouseholdDevice.prototype = new ElectroDevice()
PowerTool.prototype = new ElectroDevice()
EmbeddedEquipment.prototype = new ElectroDevice()


const flatiron = new HouseholdDevice(2000, 'flatirons', 'Scarlett', 'No');
const heater = new HouseholdDevice(2200, 'heaters', 'Pioneer', 'Yes');
const perforator = new PowerTool(800, 'perforators', 'Makita', 1100);
const kitchen_hood  = new EmbeddedEquipment(120, 'kitchen_hoods', 'Germes', 'iron');


flatiron.powerOn('on')
flatiron.getConsumption(44)

perforator.powerOn('off')
perforator.getConsumption(44)

flatiron.getHeatingArea()
heater.getHeatingArea()