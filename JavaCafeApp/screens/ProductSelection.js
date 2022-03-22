import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import BottomNavigation from '../components/BottomNavigation';
import colors from '../constants/colors';
import * as cartActions from '../store/actions/cart';


const ProductSelection = props => {
  const dispatch = useDispatch();
  const productId = props.navigation.getParam('productId');
  const selectedProduct = useSelector(state =>
    state.products.availableProducts.find(prod => prod.id === productId)
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentcontainer}>
        <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
        <View style={styles.actions}>
          <Button color='orange' title="Add to Cart" onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct))
          }} />
        </View>
        <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
        <Text style={styles.description}>{selectedProduct.description}</Text>
        
      </ScrollView>
      {/* <View style={styles.navbar}>
        <BottomNavigation navigation={props.navigation}/>
      </View> */}
    </View>
  );
};

ProductSelection.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('productTitle')
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    marginBottom: 25
  
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center'
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
    color: colors.text
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  contentcontainer: {
    flex: 1
  },
  navbar: {
    height: 80
  },
});

export default ProductSelection;
