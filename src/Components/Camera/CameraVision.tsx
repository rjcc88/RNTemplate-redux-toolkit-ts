// import React, { useEffect, useState, useRef } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   PermissionsAndroid,
//   Platform,
//   StyleSheet,
// } from 'react-native';

// import { Camera, useCameraDevices, CameraDevice } from 'react-native-vision-camera';
// import CameraRoll, { useCameraRoll } from '@react-native-camera-roll/camera-roll';
// import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useWindowDimensions } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';



// const CameraApp = () => {
//   const [type, setType] = useState<CameraType>(CameraType.Back);
//   const [previewVisible, setPreviewVisible] = useState(false);
//   const [capturedImage, setCapturedImage] = useState<any>(null);
//   const [cameraReady, setCameraReady] = useState(false);
//   const cameraRef = useRef<Camera>(null);
//   const { bottom } = useSafeAreaInsets();
//   const windowDimensions = useWindowDimensions();
//   const screenWidth = windowDimensions.width;

//   const cameraRef = useRef<Camera | null>(null);

//   useEffect(() => {
//     if (Platform.OS === 'android') {
//       requestCameraPermission();
//     } else {
//       setHasCameraPermission(true);
//     }
//   }, []);

//   const requestCameraPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title: 'Camera Permission',
//           message: 'App needs camera permission',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         setHasCameraPermission(true);
//       } else {
//         setHasCameraPermission(false);
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   const handleCameraTypeSwitch = () => {
//     if (cameraPosition === Camera.Position.BACK) {
//       setCameraPosition(Camera.Position.FRONT);
//     } else {
//       setCameraPosition(Camera.Position.BACK);
//     }
//   };

//   const handleCapturePhoto = async () => {
//     if (cameraRef.current) {
//       const photo = await cameraRef.current.takePhoto({ quality: 0.5 });
//       const savedPhoto = await CameraRoll.save(photo.uri, { type: 'photo' });
//       setCapturedPhotos([...capturedPhotos, savedPhoto]);
//       setIsPreviewVisible(true);
//     }
//   };

//   const handlePreviewDismiss = () => {
//     setIsPreviewVisible(false);
//   };

//   const handleDeletePhoto = async (photo: any) => {
//     try {
//       await CameraRoll.delete(photo.node.image.uri);
//       setCapturedPhotos(
//         capturedPhotos.filter((item) => item.node.image.uri !== photo.node.image.uri),
//       );
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   const { devices, selectedDevice } = useCameraDevices();
//   const isCameraReady = devices.length > 0 && selectedDevice != null;

//   if (!hasCameraPermission) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={tw`flex-1 items-center justify-center bg-gray-200`}>
//       <View style={tw`flex-1 w-full`}>
//         <Camera style={tw`w-full h-full`} type={cameraType} />
//       </View>
//       <View style={tw`flex-row items-center justify-around w-full p-4`}>
//         <TouchableOpacity
//           style={tw`bg-white p-4 rounded-full`}
//           onPress={handleCapturePhoto}
//           disabled={!hasCameraPermission}
//         >
//           <Text style={tw`text-black text-xl`}>📸</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={tw`bg-white p-4 rounded-full ${
//             hasCameraPermission ? 'opacity-100' : 'opacity-50'
//           }`}
//           onPress={handleCameraRollPick}
//           disabled={!hasCameraPermission}
//         >
//           <Text style={tw`text-black text-xl`}>📷</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={tw`      bg-white p-4 rounded-full ${
//             hasCameraPermission ? 'opacity-100' : 'opacity-50'
//           }`}
//           onPress={handleCameraTypeSwitch}
//           disabled={!hasCameraPermission}
//         >
//           <Text style={tw`text-black text-xl`}>
//             {cameraType === CameraType.back ? '🤳' : '📷'}
//           </Text>
//         </TouchableOpacity>
//       </View>
//       {isPreviewVisible && (
//         <View style={tw`flex-1 absolute top-0 left-0 w-full h-full bg-gray-900 opacity-80`}>
//           <View style={tw`flex-row items-center justify-center w-full h-12`}>
//             <TouchableOpacity style={tw`ml-4`} onPress={handlePreviewDismiss}>
//               <Text style={tw`text-white text-xl`}>❌</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={tw`flex-1 p-2`}>
//             <Text style={tw`text-white text-lg mb-2`}>Captured Photos</Text>
//             <View style={tw`flex-row flex-wrap items-start justify-start`}>
//               {capturedPhotos.map((photo) => (
//                 <TouchableOpacity
//                   key={photo.node.image.uri}
//                   style={tw`w-1/3 p-2`}
//                   onPress={() => handleDeletePhoto(photo)}
//                 >
//                   <Image
//                     style={tw`w-full h-32 object-cover rounded-lg`}
//                     source={{ uri: photo.node.image.uri }}
//                   />
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>
//         </View>
//       )}
//     </View>
    
//     );
//   };
  
//   export default CameraApp;
