import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ILCatAnak,
  ILCatCovid,
  ILCatGigi,
  ILCatMata,
  ILCatSaraf,
  ILCatUmum,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const DoctorCategory = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'Dokter Covid-19') {
      return <ILCatCovid style={styles.illustration} />;
    }
    if (category === 'Dokter Umum') {
      return <ILCatUmum style={styles.illustration} />;
    }
    if (category === 'Dokter Saraf') {
      return <ILCatSaraf style={styles.illustration} />;
    }
    if (category === 'Dokter Gigi') {
      return <ILCatGigi style={styles.illustration} />;
    }
    if (category === 'Dokter Mata') {
      return <ILCatMata style={styles.illustration} />;
    }
    if (category === 'Dokter Anak') {
      return <ILCatAnak style={styles.illustration} />;
    }
    return <ILCatUmum style={styles.illustration} />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 120,
    height: 150,
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
