import React, {Component} from 'react'
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    Platform,
    Dimensions,
    ScrollView
} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'

import * as WebBrowser from 'expo-web-browser' 

import Colors from '../../constants/Colors'
import { Thumbnail, Icon } from 'native-base'
import { TouchableOpacity } from '../../components/common/TouchableOpacity'


export default class Account extends Component{
    static navigationOptions = {
        header: null
    }

    handleContactPress = () => {
        WebBrowser.openBrowserAsync(
            'https://web.facebook.com/marvalinks?_rdc=1&_rdr'
        )
    }

    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={{backgroundColor: 'white'}} />
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Account</Text>
                </View>

                <ScrollView style={{flex: 1,}}>
                    <View style={styles.profileContainer}>
                        <Thumbnail large source={require('../../assets/images/marvalinks.png')} />
                        <Text style={{fontSize: 30, fontWeight: 'bold', paddingTop: 10}}>
                            marvalinks@gmail.com
                        </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ViewProfile')}>
                            <Text style={{color: '#3ea7e9', paddingTop: 10, fontWeight: '600'}}>View profile</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.titleText}>Organizations</Text>
                        <View style={styles.organizationsInfoContainer}>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                                <View style={{width: 40,  alignItems: 'center', justifyContent: 'center'}}>
                                    <Icon name='ios-checkmark' style={{color: 'green'}} />
                                </View>
                                <View style={{flex: 1, paddingLeft: 6, paddingTop: 10}}>
                                    <Text style={{fontSize: 16}}>My Company</Text>
                                    <Text style={{color: 'grey', fontSize: 12, fontWeight: '500'}}>arismartison@gmail.com</Text>
                                </View>
                            </View>
                            <View style={styles.separator}/>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                                <View style={{width: 40,  alignItems: 'center', justifyContent: 'center'}}>
                                    {/* <Icon name='ios-checkmark' style={{color: 'green'}} /> */}
                                </View>
                                <View style={{flex: 1, paddingLeft: 6, paddingTop: 10}}>
                                    <Text style={{fontSize: 16}}>Marvalinks Labs</Text>
                                    <Text style={{color: 'grey', fontSize: 12, fontWeight: '500'}}>arismartison@gmail.com</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{marginTop: 25}}>
                            <Text style={styles.titleText}>Notifications</Text>
                            <View style={styles.notificationsInfoContainer}>
                                <View style={{}}>
                                    <Text style={{fontSize: 16}}>Push</Text>
                                    <Text style={{color: 'grey', fontSize: 13, fontWeight: '500'}}>On</Text>
                                </View>
                                <Icon name='ios-arrow-forward' style={{fontSize: 15, color: 'grey'}}/>
                            </View>
                        </View>

                        <View style={{marginTop: 25}}>
                            <Text style={styles.titleText}>Support</Text>
                            <View style={styles.organizationsInfoContainer}>
                                <TouchableOpacity
                                    // onPress={this.handleGuidePress}
                                    style={{
                                        flex: 1, flexDirection: 'row', 
                                        justifyContent: 'space-between', 
                                        paddingHorizontal: 10, 
                                        alignItems: 'center'
                                    }}
                                >
                                    <Text style={{fontSize: 16}}>iOS guide</Text>
                                    <Icon name='ios-arrow-forward' style={{fontSize: 15, color: 'grey'}}/>
                                </TouchableOpacity>

                            <View style={styles.separator}/>
                            <TouchableOpacity onPress={this.handleContactPress} style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center'}}>
                                <Text style={{fontSize: 16}}>Contact support</Text>
                                <Icon name='ios-arrow-forward' style={{fontSize: 15, color: 'grey'}}/>
                            </TouchableOpacity>
                         </View>
                        </View>

                        
                        <View style={{marginTop: 25}}>
                            <Text style={styles.titleText}>More</Text>
                            <View style={styles.moreInfoContainer}>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center'}}>
                                <Text style={{fontSize: 16}}>Rate the app</Text>
                                <Icon name='ios-arrow-forward' style={{fontSize: 15, color: 'grey'}}/>
                            </View>
                            <View style={styles.separator}/>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center'}}>
                                <Text style={{fontSize: 16}}>Privacy policy</Text>
                                <Icon name='ios-arrow-forward' style={{fontSize: 15, color: 'grey'}}/>
                            </View>
                            <View style={styles.separator}/>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center'}}>
                                <Text style={{fontSize: 16}}>Terms of service</Text>
                                <Icon name='ios-arrow-forward' style={{fontSize: 15, color: 'grey'}}/>
                            </View>
                            <View style={styles.separator}/>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center'}}>
                                <Text style={{fontSize: 16}}>Version</Text>
                                <Text style={{fontSize: 13, color: 'grey'}}>marv. 2.0.1</Text>
                            </View>
                         </View>
                        </View>

                        <View style={{marginTop: 30}}>
                            <View style={styles.logoutContainer}>
                                <Text style={{color: 'tomato', fontWeight: '500'}}>Log out</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor
    },
    headerContainer: {
        height: hp('13%'),
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        paddingBottom: 15,
        ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.1,
              shadowRadius: 3,
            },
            android: {
              elevation: 20,
            },
        }),
    },
    headerText: {
        fontSize: 34,
        fontWeight: 'bold',
        paddingLeft: 18
    },
    profileContainer: {
        height: height/3,
        // backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionContainer: {
        paddingHorizontal: 20,
        marginBottom: 20
    },
    titleText: {
        color: 'grey',
        fontWeight: '500',
        paddingVertical: 10
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#ccc'
    },
    organizationsInfoContainer: {
        height: hp('18%'),
        backgroundColor: 'white',
        borderRadius: 18,
        // padding: 10
    },
    notificationsInfoContainer: {
        height: hp('8.6%'),
        backgroundColor: 'white',
        borderRadius: 15,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    moreInfoContainer: {
        height: hp('38%'),
        backgroundColor: 'white',
        borderRadius: 18
    },
    logoutContainer: {
        height: hp('8.5%'),
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
})