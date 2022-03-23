import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import colors from '../../constants/colors';
import * as productsActions from '../../store/actions/products';
import MenuItem from '../../components/MenuItem';

const EmployeeProductScreen = props => {
const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <MenuItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {}}
        >
            <TouchableOpacity
                style={styles.button}
                onPress={() => {}}
                >
                    <Text style={styles.buttonText}>Submit Order</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonWarning}
                onPress={() => {dispatch(productsActions.deleteProduct(itemData.item.id))}}
                >
            <Text style={styles.buttonText}>Delete Product</Text>
            </TouchableOpacity>
        </MenuItem>
      )}
    />
  );
};

EmployeeProductScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Editing Products',
  };
};

const styles = StyleSheet.create({
 button: {
    backgroundColor: colors.assessory,
    justifyContent: 'center',
    padding: 10,
    margin: 15
 },
 buttonWarning: {
    backgroundColor: 'red',
    justifyContent: 'center',
    padding: 10,
    margin: 15,
    marginBottom: 50
 },
 buttonText: {
    color: colors.text
 },

});

export default EmployeeProductScreen;
