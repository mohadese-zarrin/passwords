import React from 'react'
import { StyleSheet, Animated, View, Text, TouchableOpacity,ActivityIndicator } from 'react-native'
import Navigation from './navigation'

function router() {
    return (
        <View>
            <Text>in router</Text>
            <Navigation />
        </View>
    )
}

export default router
