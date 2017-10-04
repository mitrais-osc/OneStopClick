import { FormLabel, FormInput, FormValidationMessage, Card, Button, Icon, Button as RneButton } from 'react-native-elements'
import I18n from 'react-native-i18n'
import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Alert, FlatList } from 'react-native'
import { validateField } from '../Lib/validator'
import styles from './Styles/FormGeneratorStyle'
import { Colors } from '../Themes/'
import { currency } from '../Lib/numberFormatter.js'
var uuid = require('react-native-uuid')

export class CustomInputField extends Component {
  setValue (fieldName, newValue, existingState) {
    existingState[fieldName].value = newValue
    return existingState
  };

  render () {
    var field = this.props.field
    const { name, secureText, message, returnKeyType, keyboardType, value } = field
    var state = this.props.state
    return <View>
      <FormLabel>{I18n.t(name)}</FormLabel>
      <FormInput
        ref={name}
        value={value}
        secureTextEntry={secureText}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={(text) => this.props.updateState(this.setValue(name, text, state))}
        onSubmitEditing={() => this.props.updateState(validateField(state, name))}
        onBlur={() => this.props.updateState(validateField(state, name))}
        {...this.props}
      />
      <FormValidationMessage>{message}</FormValidationMessage>
    </View>
  }
}

export class CustomButton extends React.Component {
  render () {
    return <Button
      {...this.props}
      backgroundColor='#86b200'
      fontWeight='bold'
    />
  }
}

export class HamburgerMenu extends React.Component {
  render () {
    return (
      <TouchableOpacity
        {...this.props}
        underlayColor='transparent'>
        <Icon
          color='white'
          name='menu'
          size={28}
        />
      </TouchableOpacity>
    )
  }
}

export class Category extends Component {
  render () {
    const { name } = this.props.category
    return (<Text style={[styles.titleLabel]}>{name}</Text>)
  }
}

export class Products extends Component {
  addCartItem (product) {
    const { cartItems, historyItems, accessToken } = this.props

    var histories = []
    var historiesStr = JSON.stringify(historyItems)
    if (historiesStr !== '[]' && historyItems.data.length > 0) {
      for (var i = 0; i < historyItems.data.length; i++) {
        for (var j = 0; j < historyItems.data[i].details.length; j++) {
          console.tron.log(historyItems.data[i].id + '; product id ' + historyItems.data[i].details[j].product.id)
          histories.push(historyItems.data[i].details[j].product)
        }
      }
    }
    if (accessToken === null || accessToken === '') {
      Alert.alert('Error', 'Please login.')
    } else {
      // checking duplication
      var hasAdded = false
      var hasBought = false

      // on cart
      for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].product_id === product.id) {
          hasAdded = true
          break
        }
      }

      // on history
      for (var j = 0; j < histories.length; j++) {
        if (histories[j].id === product.id) {
          hasBought = true
          break
        }
      }

      if (!hasAdded && !hasBought) {
        var newCartItems = []
        newCartItems.push(product)
        this.props.onBuyPress(product)
      } else {
        if (hasAdded) {
          Alert.alert('Warning', 'You have already added ' + product.product_name + '.')
        }

        if (hasBought) {
          Alert.alert('Warning', 'You have already bought ' + product.product_name + '. Please download from history transaction.')
        }
      }
    }
  }

  render () {
    const { data } = this.props
    var products = Object.assign([], data)
    for (let j = 0; j < products.length; j++) {
      var product = Object.assign({}, products[j])
      product.key = product.id
      products[j] = product
    }

    return (<FlatList
      data={products}
      key={uuid.v1()}
      numColumns='2'
      renderItem={({ item }) =>
        <TouchableOpacity onPress={() => this.props.onProductClick(item)}>
          <View>
            <Card
              style={styles.cardContent}
              key={item.id}
              image={{ uri: item.images[0].image_url }}
            >
              <Text
                numberOfLines={2}
                ellipsizeMode={'tail'}
                style={{ marginBottom: 10, fontWeight: 'bold', textAlign: 'center', fontSize: 12, height: 30 }}>
                {item.product_name}
              </Text>
              <Text
                numberOfLines={2}
                ellipsizeMode={'tail'}
                style={{ marginBottom: 10, fontSize: 10, height: 25 }}>
                {item.description}
              </Text>
              <Text
                style={{ color: Colors.green, textAlign: 'right', fontSize: 11, marginBottom: 10 }}>
                Rp. {currency(item.price)}
              </Text>
              <RneButton
                icon={{ name: 'shopping-cart' }}
                backgroundColor={Colors.green}
                fontFamily='Lato'
                fontSize={13}
                buttonStyle={{ marginLeft: 0, marginRight: 0 }}
                onPress={() => this.addCartItem(item)}
                title={I18n.t('addToCart')} />
            </Card>
          </View>
        </TouchableOpacity>
      }
    />)
  }
}
