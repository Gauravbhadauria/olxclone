import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';

const ItemsByCategory = () => {
  const items = useSelector(state => state.post);
  const route = useRoute();
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    let tempData = items.data;
    let tem = [];
    tempData.map(item => {
      if (item.category == route.params.category) {
        tem.push(item);
      }
    });
    setItemList(tem);
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={itemList}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={styles.item}>
              <Image source={{uri: item.image}} style={styles.itemImage} />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
                <Text style={styles.price}>{'INR.' + item.price}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ItemsByCategory;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: '90%',
    height: 100,
    backgroundColor: '#fff',
    marginTop: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  desc: {
    fontSize: 16,

    marginLeft: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    color: 'green',
  },
});
