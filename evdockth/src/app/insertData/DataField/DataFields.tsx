export interface Info {
    brands: string;
    model: string;
    status: string;
    price: number;
    launchDate: Date;
}

export interface Exterior {
    carBody: string;
    segment: string;
    roofRails: string;
    widthMM: number;
    lengthMM: number;
    heightMM: number;
    groundClearance: string;
    radialTire: string;
    mac: string;
    wheelbase: string;
    steeringWheel: string;
    frontSuspension: string;
    rearSuspension: string;
    weightUnladenKG: string;
    grossVehicleWeight: string;
    maxPayload: number;
    cargoVolumeFrunk: string;
    cargoVolume: number;
    roofLoad: string;
    headlightColor: string;
    daytimeRunningLight: string;
    tailLights: string;
    bodyColor: string;
}

export interface Interior {
    seats: number;
    isofix: string;
    carSeat: number;
    cupHolder: string;
    wirelessCharger: string;
    appleCarplay: string;
    androidAuto: string;
    output12V: string;
    output48V: string;
    usbPort: string;
    audioSpeaker: string;
    ambientLight: string;
    airbag: string;
}

export interface DriveSpec {
    motorDrive: string;
    motorSizeKW: number;
    maxPowerHP: number;
    torque: number;
    topSpeedKmHr: number;
    speed0_100s: number;
    driveSystem: string;
    turningCircle: string;
    platform: string;
    evDedicatePlatform: string;
    batteryKwHr: number;
    batType: string;
    chargePortPosition: string;
    chargePort: number;
    chargeTime30_80min: number;
    rangeKM: number;
    realRangeKM: number;
    maxDcChargeKW: number;
    maxAcChargeKW: number;
    drivingMode: string;
    brakeSystem: string;
    frontBrakeCaliper: string;
    townHitchPossible: string;
    towningWeightUnbraked: string;
    towningWeightBraked: string;
    verticalLoadMax: number;
}

export interface DriveAssist {
    frontSensor: number;
    rearSensor: number;
    camera: string;
    radar: string;
    abs: boolean;
    ebd: boolean;
    esp: boolean;
    hhc: boolean;
    avh: boolean;
    tcs: boolean;
    aeb: boolean;
    fcw: boolean;
    pcw: boolean;
    rcw: boolean;
    tsr: boolean;
    ldw: boolean;
    ldp: boolean;
    lka: boolean;
    islc: boolean;
    fcta: boolean;
    fctb: boolean;
    rcta: boolean;
    rctb: boolean;
    brd: boolean;
    dow: boolean;
    onePedal: boolean;
    acc: boolean;
    stopAndGo: boolean;
    hma: boolean;
    daw: boolean;
    tirePressureMonitoringSystem: boolean;
    memorySideMiror: boolean;
    welcomeSeat: string;
    memorySeat: string;
}

export interface Promotions {
    homeCharger: boolean;
    warrantyYearRange: string;
    freeFirstClassWarrantyYear: number;
    emergencySupport24Hr: boolean;
    emergencyChargerCable: boolean;
    v2lAdaptor: boolean;
}

export interface Miscellaneous {
    v2l: string;
    air: string;
    mainMonitorSizeInc: number;
    voiceAssistance: boolean;
    softwareUpdate: boolean;
    heatPumpStandardEquipment: string;
    emergencyTirePatchKit: boolean;
}

export interface DataFields{
    id: number;
    Info: Info;
    Exterior: Exterior;
    Interior: Interior;
    DriveSpec: DriveSpec;
    DriveAssist: DriveAssist;
    Promotions: Promotions;
    Miscellaneous: Miscellaneous;
}

// export interface DataFields {
//     // Define all 115 fields with appropriate types
//     Brands: string;
//     Model: string;
//     Status: string;
//     Price: number;
//     LaunchDate: Date;
//     carBody: string;
//     segment: string;
//     roofRails: string;
//     widthMM: number;
//     lengthMM: number;
//     heightMM: number;
//     groundClearance: string;
//     radialTire: string;
//     mac: string;
//     wheelbase: string;
//     steeringWheel: string;
//     frontSuspension: string;
//     rearSuspension: string;
//     weightUnladenKG: string;
//     grossVehicleWeight: string;
//     maxPayload: number;
//     cargoVolumeFrunk: string;
//     cargoVolume: number;
//     roofLoad: string;
//     headlightColor: string;
//     daytimeRunningLight: string;
//     tailLights: string;
//     bodyColor: string;
//     seats: number;
//     isofix: string;
//     carSeat: number;
//     cupHolder: string;
//     wirelessCharger: string;
//     appleCarplay: string;
//     androidAuto: string;
//     output12V: string;
//     output48V: string;
//     usbPort: string;
//     audioSpeaker: string;
//     ambientLight: string;
//     airbag: string;
//     motorDrive: string;
//     motorSizeKW: number;
//     maxPowerHP: number;
//     torque: number;
//     topSpeedKmHr: number;
//     speed0_100s: number;
//     driveSystem: string;
//     turningCircle: string;
//     platform: string;
//     evDedicatePlatform: string;
//     batteryKwHr: number;
//     batType: string;
//     chargePortPosition: string;
//     chargePort: number;
//     chargeTime30_80min: number;
//     rangeKM: number;
//     realRangeKM: number;
//     maxDcChargeKW: number;
//     maxAcChargeKW: number;
//     drivingMode: string;
//     brakeSystem: string;
//     frontBrakeCaliper: string;
//     townHitchPossible: string;
//     towningWeightUnbraked: string;
//     towningWeightBraked: string;
//     verticalLoadMax: number;
//     frontSensor: number;
//     rearSensor: number;
//     camera: string;
//     radar: string;
//     abs: boolean;
//     ebd: boolean;
//     esp: boolean;
//     hhc: boolean;
//     avh: boolean;
//     tcs: boolean;
//     aeb: boolean;
//     fcw: boolean;
//     pcw: boolean;
//     rcw: boolean;
//     tsr: boolean;
//     ldw: boolean;
//     ldp: boolean;
//     lka: boolean;
//     islc: boolean;
//     fcta: boolean;
//     fctb: boolean;
//     rcta: boolean;
//     rctb: boolean;
//     brd: boolean;
//     dow: boolean;
//     onePedal: boolean;
//     acc: boolean;
//     stopAndGo: boolean;
//     hma: boolean;
//     daw: boolean;
//     tirePressureMonitoringSystem: boolean;
//     memorySideMiror: boolean;
//     welcomeSeat: string;
//     memorySeat: string;
//     homeCharger: boolean;
//     warrantyYearRange: string;
//     freeFirstClassWarrantyYear: number;
//     emergencySupport24Hr: boolean;
//     emergencyChargerCable: boolean;
//     v2lAdaptor: boolean;
//     v2l: string;
//     air: string;
//     mainMonitorSizeInc: number;
//     voiceAssistance: boolean;
//     softwareUpdate: boolean;
//     heatPumpStandardEquipment: string;
//     emergencyTirePatchKit: boolean;
//     // ... and so on
// }