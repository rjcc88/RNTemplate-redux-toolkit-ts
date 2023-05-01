import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import BleManager from 'react-native-ble-manager';
import Biometrics from 'react-native-biometrics-extended';

const App = () => {
  const [device, setDevice] = useState(null);

  const handleScan = () => {
    BleManager.scan([], 5, true).then(results => {
      // Find the BLE-2 device
      const bleDevice = results.find(result => result.name === 'Your BLE-2 Device Name');
      if (bleDevice) {
        setDevice(bleDevice);
      } else {
        alert('BLE-2 device not found.');
      }
    });
  };

  const handleConnect = () => {
    BleManager.connect(device.id).then(() => {
      // Read data from the device
      BleManager.read(device.id, 'SERVICE_UUID', 'CHARACTERISTIC_UUID').then(data => {
        // Process the data
        console.log('Data:', data);
      });
    });
  };

  const handleAuthenticate = () => {
    Biometrics.authenticate().then(result => {
      if (result.success) {
        handleConnect();
      } else {
        alert('Authentication failed. Please try again.');
      }
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={handleScan}>
        <Text>Scan for BLE-2 Device</Text>
      </TouchableOpacity>
      {device && (
        <View>
          <Text>Device: {device.name}</Text>
          <TouchableOpacity onPress={handleAuthenticate}>
            <Text>Connect and Authenticate</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default App;
