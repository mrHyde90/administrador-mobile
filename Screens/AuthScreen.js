import React, {Component} from 'react';
import {Text, View,} from 'react-native';
import {Card, Button} from 'react-native-elements';

class AuthScreen extends Component {
	render() {
		return (
			<Card
				title='HELLO WORLD'>
				<Text>Lol no sirve</Text>
				<Button 
					title="Log In"
					onPress={() => this.props.navigation.navigate("home")} />
			</Card>
		);
	}
}

export default AuthScreen;