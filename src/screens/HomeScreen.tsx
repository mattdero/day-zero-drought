import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import type { HomeScreenProps } from '../navigation/types';

const COLORS = {
  background: '#0A1628',
  surface: '#0F2044',
  border: '#1A3A6B',
  water: '#00B4D8',
  waterDim: '#0077A8',
  warning: '#F59E0B',
  textPrimary: '#E8F4FD',
  textSecondary: '#7BA8C4',
  danger: '#EF4444',
};

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.eyebrow}>WATERSHED STRATEGY</Text>
          <Text style={styles.title}>Day Zero{'\n'}Drought</Text>
          <View style={styles.divider} />
          <Text style={styles.tagline}>Stop the Spiral · Plant the Rain</Text>
        </View>

        {/* Crisis indicator */}
        <View style={styles.crisisCard}>
          <Text style={styles.crisisLabel}>⚠  DAY ZERO APPROACHING</Text>
          <Text style={styles.crisisText}>
            Reservoirs are failing. Rivers are running dry.{'\n'}
            Your watershed needs you.
          </Text>
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Game')}
            activeOpacity={0.85}
          >
            <Text style={styles.primaryButtonText}>▶  Start Mission</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.7}>
            <Text style={styles.secondaryButtonText}>How to Play</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.7}>
            <Text style={styles.secondaryButtonText}>Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>v1.0.0 · Day Zero Drought</Text>
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
    paddingTop: 40,
    paddingBottom: 24,
    justifyContent: 'space-between',
  },

  // Header
  header: {
    alignItems: 'center',
    gap: 10,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 3,
    color: COLORS.water,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 52,
    fontWeight: '900',
    color: COLORS.textPrimary,
    textAlign: 'center',
    lineHeight: 56,
    letterSpacing: -1,
  },
  divider: {
    width: 48,
    height: 3,
    backgroundColor: COLORS.water,
    borderRadius: 2,
    marginVertical: 4,
  },
  tagline: {
    fontSize: 14,
    color: COLORS.textSecondary,
    letterSpacing: 1,
  },

  // Crisis card
  crisisCard: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.warning,
    borderRadius: 12,
    padding: 20,
    gap: 8,
  },
  crisisLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.warning,
    letterSpacing: 1.5,
  },
  crisisText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },

  // Buttons
  actions: {
    gap: 12,
  },
  primaryButton: {
    backgroundColor: COLORS.water,
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.background,
    letterSpacing: 0.5,
  },
  secondaryButton: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },

  // Footer
  footer: {
    textAlign: 'center',
    fontSize: 11,
    color: COLORS.border,
    letterSpacing: 1,
  },
});
