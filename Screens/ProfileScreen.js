import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Card, Button} from 'react-native-elements';

class ProfileScreen extends Component {
	render() {
		return(
			<View>
				<Text>Hello User</Text>
				<Button 
					title="Go to request"
					onPress={() => this.props.navigation.navigate("request")}/>
			</View>
		)
	}
}

export default ProfileScreen;