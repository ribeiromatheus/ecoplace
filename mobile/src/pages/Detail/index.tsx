import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, SafeAreaView, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

import api from '../../services/api';

interface PointParams {
  point_id: number;
}

interface PointsDetail {
  point: {
    name: string;
    image: string;
    email: string;
    whatsapp: string;
    city: string;
    state: string;
  };
  items: {
    title: string;
  }[];
}

const Detail = () => {
  const [pointsDetail, setPointsDetail] = useState<PointsDetail>({} as PointsDetail);

  const { goBack } = useNavigation();
  const { params } = useRoute();

  const routeParams = params as PointParams;

  useEffect(() => {
    api.get(`points/${routeParams.point_id}`).then(response => {
      setPointsDetail(response.data);
    })
  }, []);

  function handleNavigateBack() {
    goBack();
  }

  function handleComposeMail() {
    MailComposer.composeAsync({
      subject: 'Interesse na coleta de resíduos',
      recipients: [pointsDetail.point.email]
    });
  }

  function handleWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${pointsDetail.point.whatsapp}&text=Tenho interesse na coleta de resíduos`)
  }

  if (!pointsDetail.point) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>

        <Image style={styles.pointImage} source={{ uri: pointsDetail.point.image }} />

        <Text style={styles.pointName}>{pointsDetail.point.name}</Text>
        <Text style={styles.pointItems}>{pointsDetail.items.map(item => item.title).join(', ')}</Text>

        <View style={styles.address}>
          <Text style={styles.addressTitle}>Endereço</Text>
          <Text style={styles.addressContent}>{pointsDetail.point.city}, {pointsDetail.point.state}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleWhatsapp}>
          <FontAwesome name="whatsapp" size={20} color="#fff" />
          <Text style={styles.buttonText}>Whatsapp</Text>
        </RectButton>

        <RectButton style={styles.button} onPress={handleComposeMail}>
          <Icon name="mail" size={20} color="#fff" />
          <Text style={styles.buttonText}>E-mail</Text>
        </RectButton>
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 20,
  },

  pointImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 32,
  },

  pointName: {
    color: '#322153',
    fontSize: 28,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 24,
  },

  pointItems: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80'
  },

  address: {
    marginTop: 32,
  },

  addressTitle: {
    color: '#322153',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },

  addressContent: {
    fontFamily: 'Roboto_400Regular',
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80'
  },

  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#999',
    paddingVertical: 20,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  button: {
    width: '48%',
    backgroundColor: '#34CB79',
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    marginLeft: 8,
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
  },
});

export default Detail;