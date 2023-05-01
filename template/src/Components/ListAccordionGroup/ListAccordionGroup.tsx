import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

type AccordionItem = {
    title: string;
    content: React.ReactNode;
};

type Props = {
    items: AccordionItem[];
    defaultIndex?: number;
};

const AccordionGroup: React.FC<Props> = ({ items, defaultIndex = null }) => {
    const [activeItem, setActiveItem] = useState<number | null>(defaultIndex);

    const handleItemPress = (index: number) => {
        setActiveItem(activeItem === index ? null : index);
    };
    return (
        <View>
            {items.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => handleItemPress(index)}
                    className="p-2 border-b-2 border-[#EFEFEF]"
                >
                    <View className='flex-row'>
                        <View className='flex-auto'>
                            <Text className='text-black text-sm'>{item.title}</Text>
                        </View>
                        <Icons key={index} name={activeItem === index ? 'chevron-up' : 'chevron-down'} color={'#000000'} size={24} />
                    </View>

                    {activeItem === index && item.content}
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default AccordionGroup;


//Sample use

// const items = [
//     {
//         title: 'Project Profile',
//         content: (
//             renderProject()
//         ),
//     },
//     {
//         title: 'BAC Details',
//         content: (
//            renderBAC()
//         ),
//     },
//     {
//         title: 'Status Report',
//         content: (
//             <Text>
//                 No Reports Found..
//             </Text>
//         ),
//     },
// ];

// <AccordionGroup items={items} defaultIndex={0} />