import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Platform, TouchableOpacity
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import HeaderButton from '../../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


import * as productsActions from '../../store/actions/products';

const AddProduct = props => {
  const identifier = props.navigation.getParam('prodId');
  const editedProduct = useSelector(state =>
    state.products.availableProducts.find(prod => prod.id === identifier)
  );
  const dispatch = useDispatch();
  const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
  const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : '');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState(editedProduct ? editedProduct.description : '');

  const submitHandler = useCallback(() => 
  {
 dispatch(
        productsActions.createProduct(title, description, imageUrl, +price)
      );
    }, 
  [dispatch, identifier, title, description, imageUrl, price]);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  return (
      
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={text => setTitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={text => setImageUrl(text)}
          />
        </View>
        {editedProduct ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={text => setPrice(text)}
            />
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={text => setDescription(text)}
          />
        </View>
      </View>

    </ScrollView>
  );
};

AddProduct.navigationOptions = navData => {
    const submitFn = navData.navigation.getParam('submit');
  return {
    headerTitle: 'Add Product',
    headerRight: () => <HeaderButtons>
            <Item
                title='Submit'
                iconName='person-sharp'
                onPress={submitFn} />
        </HeaderButtons>

  };
};

const styles = StyleSheet.create({
  form: {
    margin: 20
  },
  formControl: {
    width: '100%'
  },
  label: {

    marginVertical: 8
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }
});

export default AddProduct;