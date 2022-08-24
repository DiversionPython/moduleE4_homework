class ElectroDevice {
    constructor(wattage, group, brand){
        this.wattage = wattage;
        this.group = group;
        this.brand = brand;
        this.deviceTurned = false;
        this.timeWorked = 0;
    }

    powerOn(powerOn){
        if (powerOn === 'on') {
            this.deviceTurned = true;
            console.log('You have connected the device to an outlet');
        }else if (powerOn == 'off') {
            this.deviceTurned = false;
            console.log(`Your device is unplugged from the wall outlet. Enter the command to continue 'on'`);
        }
    }
    getConsumption(hours){
        if (this.deviceTurned && hours > 0){
            console.log(`Сonsumption per ${hours}h is ${this.wattage /1000  * hours} kW`);
        }else if (hours < 1) {
            console.log('The working time is incorrectly specified');
        }else {
            console.log('Turn on the device to find out the power consumption');
        }
    }
}

class HouseholdDevice extends ElectroDevice {
    constructor(wattage, group, brand, smart, deviceTurned) {
        super(wattage, deviceTurned);
        this.wattage = wattage;
        this.group = group;
        this.brand = brand;
        this.smart = smart;

    }
    getHeatingArea(){
        if (this.group === 'heaters'){
            console.log(`This heater with a capacity of ${this.wattage} watts heats ${this.wattage / 100} sq.m.`);
        }else {
            console.log(`${this.group} - this group devices does not have the specified property`);
        }
    }
}

class PowerTool extends ElectroDevice {
    constructor(wattage, group, brand, max_revol, deviceTurned) {
        super(wattage, group, brand, deviceTurned);
        this.wattage = wattage;
        this.group = group;
        this.brand = brand;
        this.max_revol = max_revol;
    }
}

class EmbeddedEquipment extends ElectroDevice {
    constructor(wattage, group, brand, body_material, deviceTurned) {
        super(wattage, group, brand, deviceTurned);
        this.wattage = wattage;
        this.group = group;
        this.brand = brand;
        this.body_material= body_material;

    }

}

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

kitchen_hood.powerOn('on')
kitchen_hood.getConsumption(44)