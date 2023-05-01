// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import CameraKit from 'react-native-camera-kit';
// import CameraScreen from 'react-native-camera-kit';
// import { CameraRoll } from "@react-native-camera-roll/camera-roll";


// interface Props {}

// const CameraApp: React.FC<Props> = () => {
//     const [capturedPhotos, setCapturedPhotos] = useState<string[]>([]);
//     const [showCamera, setShowCamera] = useState<boolean>(true);
//     const [cameraRollPhotos, setCameraRollPhotos] = useState<
//       string[] | undefined
//     >(undefined);
  
//     const handleCapture = async () => {
//       try {
//         const image = await CameraKit.capture(true);
//         setCapturedPhotos([...capturedPhotos, image.uri]);
//         setShowCamera(false);
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
//     const handleCameraRollPick = async () => {
//       try {
//         const photos = await CameraRoll.getPhotos({
//           first: 100,
//           assetType: 'Photos',
//         });
//         const photoURIs = photos.edges.map((edge) => edge.node.image.uri);
//         const filteredPhotos = photoURIs.filter((uri) =>
//           capturedPhotos.includes(uri)
//         );
//         setCameraRollPhotos(filteredPhotos);
//         setShowCamera(false);
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
//     const handleReset = () => {
//       setCapturedPhotos([]);
//       setCameraRollPhotos(undefined);
//       setShowCamera(true);
//     };

//   return (
//     <View className='flex-1'>
//       {showCamera ? (
//         <View className='flex-1'>
//           <CameraScreen
//             showFrame={false}
//             scanBarcode={false}
//             onBottomButtonPressed={handleCapture}
//             actions={{ rightButtonText: 'Done' }}
//             bottomButtonColor="#fff"
//             cameraFlipImage={require('./flip_camera.png')}
//           />
//         </View>
//       ) : (
//         <View className='h-40 bg-gray-200'>
//           {cameraRollPhotos !== undefined && (
//             <View className='flex-1'>
//               <View className='flex-row flex-wrap p-5'>
//                 {cameraRollPhotos.map((photo) => (
//                   <Image
//                     key={photo}
//                     source={{ uri: photo }}
//                     className='w-28 h-28 m-2'
//                   />
//                 ))}
//               </View>
//               <TouchableOpacity
//                 onPress={handleReset}
//                 className='bg-red-500 p-4 mt-4 self-center'
//               >
//                 <Text className='text-white font-bold'>Reset</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//           {cameraRollPhotos === undefined && (
//             <TouchableOpacity
//               onPress={handleCameraRollPick}
//               className='bg-blue-500 p-4 mt-4 self-center'
//             >
//               <Text className='text-white font-bold'>Select Photos</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//       )}
//       {capturedPhotos.length > 0 && (
//         <View className='flex-row justify-center items-center py-10 bg-gray-200'>
//           {capturedPhotos.map((photo) => (
//             <Image key={photo} source={{ uri: photo }} className='w-24 h-24 m-2' />
//             ))}
//           </View>
//         )}
//       </View>
// );
// };

// export default CameraApp;

