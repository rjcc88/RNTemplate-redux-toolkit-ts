import React, { useState, useRef, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  ActivityIndicator,
  SafeAreaView
} from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

interface DropdownProps {
  data: any[];
  placeholder?: string;
  onSelected?: (data: any) => void;
  renderItem?: (item: { item: any }) => React.ReactNode;
}

const Dropdown = ({ data, placeholder = 'Select', onSelected, renderItem }: DropdownProps) => {
  const [modalVisible, setModalVisible] = React.useState(false)
  const buttonRef = useRef<TouchableOpacity>(null);
  const [buttonLayout, setButtonLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [select, setSelect] = useState<any | undefined>();
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setItems(data);
  }, [data]);

  const onButtonLayout = () => {
    buttonRef.current?.measure((x, y, width, height, pageX, pageY) => {
      setButtonLayout({ x: pageX, y: pageY, width, height });
    });
  };

  const openModal = () => { setModalVisible(true); };

  const onSelect = (item: any) => {
    setSelect(item);
    setModalVisible(false);
    if (onSelected) {
      onSelected(item);
    }
  };

  function renderModal() {
    const closeModal = () => {
      setModalVisible(false);
    };

    const renderItemInternal = ({ item }: { item: { item: any } }) => {
      return (
        <View
          className="py-4 px-2 w-fit justify-center items-center truncate"
          key={item.item}
        >
          <TouchableOpacity
            onPress={() => {
              onSelect(item);
            }}
          >
            {renderItem ? (
              renderItem(item)
            ) : (
              <Text className="text-black truncate w-full whitespace-nowrap">
                {item.item}
              </Text>
            )}
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <Modal
        animationType="fade"
        transparent={true}
        onRequestClose={closeModal}
        visible={modalVisible}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            closeModal();
          }}
        >
          <View style={StyleSheet.absoluteFillObject}>
            <View
              className="justify-center items-center rounded-lg absolute bg-white px-1 h-44"
              style={[
                {
                  top:
                    buttonLayout?.y !== undefined
                      ? buttonLayout.y + buttonLayout.height
                      : undefined,
                  left: buttonLayout?.x,
                  width: buttonLayout?.width,
                },
              ]}
            >
              {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
              ) : (
                <FlatList
                  data={items}
                  renderItem={renderItemInternal}
                  keyExtractor={(item, index) => `${item}-${index}`}
                  showsVerticalScrollIndicator={false}
                  className="p-4"
                  ItemSeparatorComponent={() => (
                    <View className="border-dashed border-t border-[#999797]" />
                  )}
                />
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  function renderDropDown() {
    return (
      <View className="px-1 py-2  rounded-lg">
        <View className="flex-row justify-center items-center" >
          <TouchableOpacity className="w-full px-2 py-2 h-10 border bg-white border-[#CBCBCB] rounded-lg" onPress={openModal}
            ref={buttonRef}
            onLayout={onButtonLayout}>
            <View className="flex-row">
              <View className="flex-auto">
              <Text className="dark:text-white text-black">
                  {select ? select.pmsName :<Text className="text-gray-400">{placeholder}</Text>}
                </Text>
              </View>
              <Icons name="menu-down" size={20} color={'gray'} />
            </View>
          </TouchableOpacity>
          {renderModal()}
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView>
      {renderDropDown()}

    </SafeAreaView>
  );
};

export default Dropdown



// sample to use
// const [selectedItem, setSelectedItem] = useState();
// const data =[{id:1, title:'option 1'},{id:2, title:'option 2'}]
// const renderItem = (item:any) => (
//   <Text className="text-black truncate w-full whitespace-nowrap">{item.pmsName}</Text>
// )
{/*  <Dropdown data={dataDrop} onSelected={(item)=>setSelectedItem(item)} renderItem={renderItem} /> */ }