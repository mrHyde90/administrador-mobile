import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Card, Button} from 'react-native-elements';

class CategoriesScreen extends Component {
	render() {
		return(
			<View>
				<Text>Hello CategoriesScreen</Text>
				<Button 
					title="Go to instrumentList"
					onPress={() => this.props.navigation.navigate("instrument")}/>
			</View>
		);
	}
}

export default CategoriesScreen;