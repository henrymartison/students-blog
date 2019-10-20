import React, {Component} from 'react'
import {
    View, 
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    Dimensions, 
    ScrollView,
} from 'react-native'
import { TouchableOpacity } from '../../../components/common/TouchableOpacity'
import { Ionicons, Feather } from '@expo/vector-icons'


import { Separator } from '../../../components/common/Separator'
import ProfileMenuRowItem from '../../../components/account/ProfileMenuRow'
import { Share } from '../../../components/common/Share'



export default class ViewProfile extends Component{
    static navigationOptions = {
        header: null
    }

    handleSharePress = () => {
        Share({
            message: 'marvalinks@gmail.com',
            url: 'https://web.facebook.com/marvalinks?_rdc=1&_rdr',
            title: 'Marvalinks',
            dialogTitle: 'marvalinks@gmail.com'
          });
    }
    
    render() {
        return(
            <View style={{flex: 1}}>
                <ScrollView style={{flex: 1}}>
                    <ImageBackground 
                        style={styles.backgroundImage}
                        source={require('../../../assets/images/marvalinks.png')}
                    >
                        <View style={styles.controlButtonContainer}>
                            <TouchableOpacity
                                style={styles.arrowBack}
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Ionicons name='ios-arrow-back' size={25} color='white'/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.edit}
                            >
                                <Feather name='edit-2' size={20} color='white'/>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <View style={styles.emailContainer}>
                        <Text style={{fontSize: 30, fontWeight: '600'}}>marvalinks@gmail.com</Text>
                        <Text style={{fontSize: 14, color: 'grey', fontWeight: '500', paddingTop: 17}}>marvalinks@gmail.com</Text>
                    </View>
                    <Separator />

                    <View>
                        <ProfileMenuRowItem
                            icon='check-circle'
                            attribute='View tasks'
                        />
                        <ProfileMenuRowItem
                            icon='user-plus'
                            attribute='Join study group'
                        />
                        <ProfileMenuRowItem
                            icon='users'
                            attribute='Create study group'
                        />
                        <ProfileMenuRowItem
                            icon='file-text'
                            attribute='Join project'
                        />
                        <ProfileMenuRowItem
                            icon='share'
                            attribute='Share'
                            onPress={this.handleSharePress}
                        />
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.addButton}>
                    <Feather name='plus' size={30} color='white' />
                </TouchableOpacity>
            </View>
        )
    }
}


const {height} = Dimensions.get('window')

const styles = StyleSheet.create({
    backgroundImage: {
        height: height/2,
    },
    controlButtonContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: 18,
        paddingTop: 40
    },
    arrowBack: {
        height: 50,
        width: 50,
        borderRadius: 50/2,
        backgroundColor: 'rgba(0,0,0,.1)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    edit: {
        height: 50,
        width: 50,
        borderRadius: 50/2,
        backgroundColor: 'rgba(0,0,0,.1)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    emailContainer: {
        paddingTop: 25,
        paddingBottom: 40,
        paddingHorizontal: 15
    },
    addButton: {
        height: 70,
        width: 70,
        borderRadius: 70/2,
        backgroundColor: 'green',
        position: 'absolute',
        bottom: 20,
        right: 5,
        left: null,
        top: null,
        alignItems: 'center',
        justifyContent: 'center'
    }
})