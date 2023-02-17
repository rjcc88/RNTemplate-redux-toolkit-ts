import React, { useState } from "react";
import {
  SafeAreaView,
} from "react-native"
import { AppRootStackParamList } from "@/Route/app/app-navigator";
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { DOMParser } from '@xmldom/xmldom'
import { kml } from "@tmcw/togeojson";
import Leaflet, { Markers, TileOptions, Layers, GeoJson, GeoJsonFeatures } from 'react-native-leaflet-ts';

type Props = NativeStackScreenProps<AppRootStackParamList, 'Map'>;

const Map = ({ navigation: { navigate } }: Props) => {
  const[fets, setFets] = useState<GeoJsonFeatures| any>()
  const coords: GeoJson = {
    type:'',
    features:[{
      type:fets?.type,
      properties:fets?.properties,
      geometry:{
        type:fets?.geometry?.type,
        coordinates:fets?.geometry?.coordinates
      }
    }]
  }
  // https://gist.githubusercontent.com/wf9a5m75/7785aaef59e46bcb6159ffa5a5feb437/raw/85efbc6cb96a0696ea3d82aa742580e7d48005b5/sample.kml
  // https://raw.githubusercontent.com/aviklai/react-leaflet-kml/master/src/assets/example1.kml
  React.useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/wf9a5m75/7785aaef59e46bcb6159ffa5a5feb437/raw/85efbc6cb96a0696ea3d82aa742580e7d48005b5/sample.kml"
    )
      .then((res) => res.text())
      .then((kmlText) => {
        const parser = new DOMParser();
        const kmls = parser.parseFromString(kmlText, "text/xml");

        const routes = kml(kmls)
      coords.type = routes.type

         
        routes.features.map((res: any) => {
        setFets(res)
        coords.features = res
         
        })

        console.log(coords)
      });
  }, []);

  const options: TileOptions = {
    noWrap: true,
    detectRetina: true,
  };

  const mapLayers: Layers[] = [
    {
      name: 'Wiki Map',
      src: 'http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png',
      tileOptions: options,
    },
    {
      name: 'Open Street Map',
      src: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      tileOptions: options,
    },

    {
      name: 'Arc GIS Map',
      src: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      tileOptions: options,
    },

  ];


  return (
    <SafeAreaView className="flex absolute inset-0 justify-center">

      <Leaflet
        mapLayers={
          mapLayers
        }
        minZoom={1}
        zoom={2}
        maxZoom={17}
        flyTo={{
          latLng: [-7.9717,-14.3907],
          zoom: 5,
        }}
        geoJson={coords}
        // backgroundColor="green"
      />

    </SafeAreaView>
  )
}
export default Map;   