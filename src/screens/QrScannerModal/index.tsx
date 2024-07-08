'use strict';

import React, {
  Fragment, 
  useState, 
  useEffect
} from 'react';
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Text,
} from 'react-native';
import {ModalStylesType, WraperCenteringStylesType} from '../../types';
import Modal from '../../components/Modal';
import { RNCamera } from 'react-native-camera';

interface QrScannerModalPropsTypes {

  visible?: boolean;
  style?: ModalStylesType & WraperCenteringStylesType;

  currentToken: string;
  purpose: 'sync' | 'sign';
  selectedAccount: string[];
  isNfcbroadcastSuccess: boolean;
  onNfcBroadcastSuccess: () => void;
  onScanSuccess: (ur: string) => void;
  onScanError: (error: string) => void;
  hideModal: () => void;
  pauseHitoCode?: (x: boolean) => void;
}


const QrScannerModal = (props: QrScannerModalPropsTypes) => {
  const {
    visible,
    style,
  } = props;

  const [isVisible, setIsVisible] = useState(typeof visible === 'boolean' ? visible: true);
  useEffect(()=>{
    if (typeof visible === 'boolean'){
      setIsVisible(visible);
    }
  }, [visible]);

  if (isVisible) {
  return (
    <View
      style = {{
        flexDirection: 'column',
        justifiContent: 'center',
        alignItems: 'center'
      }}
    >
    <Modal
      style={style}
    >
      <View style={styles.container}>
        <RNCamera
          onMountError={onError}
          captureAudio={false}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          onBarCodeRead={onBarCodeRead}
          flashMode={RNCamera.Constants.FlashMode.auto}
          androidCameraPermissionOptions={{
            title: 'allow_camera_dialog_title',
            message: 'allow_camera_dialog_message',
            buttonPositive: 'ok',
            buttonNegative: 'cancel',
          }}
          onStatusChange={onStatusChange}
        >
          <SafeAreaView style={styles.innerView}>
            <TouchableOpacity style={styles.closeIcon} onPress={hideModal}>
              <Icon
                name={IconName.Close}
                size={IconSize.Md}
                style={styles.closeIcon}
                color={IconColor.Default}
              />
            </TouchableOpacity>
            {isNfcbroadcastSuccess ?
              <NfcBroadcastModal
                visible={true}
                purpose={purpose}
                aesToken={currentToken}
                onErrorNoSupportedNFC={() => { }}//used to display error
                onNfcBroadcastSuccess={onNfcBroadcastSuccess}
              />
              :
              <Image source={frameImage} style={styles.frame} />
            }
            <Text style={styles.text}>'qr_scanner.scanning'</Text>
          </SafeAreaView>
        </RNCamera>
        <View style={styles.hint}>{hintText}</View>
      </View>
    </Modal>
    </View>
  );
  }else{
    return(
      <Fragment></Fragment>
    )
  }
}

export default QrScannerModal;