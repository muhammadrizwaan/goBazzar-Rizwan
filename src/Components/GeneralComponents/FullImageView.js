import React from 'react'
import { Modal, StyleSheet, View, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'

import { Spinner, Icon, Item, Left, Right, Body, Text } from 'native-base'

const FullImageView = ({ images, isVisible, onClose, index }) => {
    return (
        <Modal visible={isVisible} transparent={true} onRequestClose={onClose} onClose={onClose}>
            <ImageViewer
                imageUrls={images}
                enableSwipeDown={true}
                onCancel={onClose}
                renderIndicator={() => { }}
                index={index}
                loadingRender={() => <Spinner color="#278FDA" />}
                renderHeader={() =>
                    <TouchableOpacity onPress={onClose} style={{ alignItems: "flex-end", marginRight: 20, marginTop: 10, justifyContent: 'center' }}>
                        <SafeAreaView />
                        {/* <Image source={require("../../images/close.png")} style={{ width: 25, height: 25 }} /> */}
                        <Text style={{color: 'white'}}>Close</Text>
                    </TouchableOpacity>
                }
            />
        </Modal>
    )
}

const styles = StyleSheet.create({
    cancelButton: {
        position: 'absolute',
        top: 20,
        right: 10
    }
})

export default FullImageView
