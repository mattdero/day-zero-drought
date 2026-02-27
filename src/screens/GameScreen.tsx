import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import type { GameScreenProps } from '../navigation/types';

const COLORS = {
  background: '#0A1628',
  surface: '#0F2044',
  water: '#00B4D8',
  textPrimary: '#E8F4FD',
  textSecondary: '#7BA8C4',
};

export function GameScreen({ navigation }: GameScreenProps) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <View style={styles.container}>
        <Text style={styles.label}>MISSION BRIEFING</Text>
        <Text style={styles.title}>Watershed{'\n'}Simulation</Text>
        <Text style={styles.body}>
          Game simulation coming soon.{'\n'}
          Restore the watershed. Stop the drought.
        </Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
          <Text style={styles.backButtonText}>← Back to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: 28,
    justifyContent: 'center',
    gap: 16,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 3,
    color: COLORS.water,
  },
  title: {
    fontSize: 44,
    fontWeight: '900',
    color: COLORS.textPrimary,
    lineHeight: 48,
  },
  body: {
    fontSize: 15,
    color: COLORS.textSecondary,
    lineHeight: 22,
  },
  backButton: {
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 15,
    color: COLORS.water,
    fontWeight: '600',
  },
});
