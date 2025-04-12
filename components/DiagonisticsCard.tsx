import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type DiagnosticsCardProps = {
    status: 'Healthy' | 'Needs Attention' | 'Critical';
    mileage: number;
    suggestion: string;
};

const DiagnosticsCard: React.FC<DiagnosticsCardProps> = ({ status, mileage, suggestion }) => {
    
    const getStatusColor = () => {
        if (status === 'Healthy') return '#00FF88';
        if (status === 'Needs Attention') return '#FFD700';
        if (status === 'Critical') return '#FF0000';
        return '#FFFFFF';
    };

    return (
        <View style={styles.card}>
            <Text style={styles.title}>Quick Diagnostics</Text>

            <Text style={styles.item}>
                Last Scan Status: 
                <Text style={{ color: getStatusColor() }}>
                    {` ${status}`}
                </Text>
            </Text>

      <Text style={styles.item}>
        Mileage Since Last Service: {mileage} km
      </Text>

      <Text style={styles.item}>
        Suggestion: {suggestion}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0a0a0a',
    borderRadius: 20,
    padding: 20,
    margin: 10,
    shadowColor: '#00FFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 12,
  },
  title: {
    color: '#00FFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    color: '#A8B5DB',
    fontSize: 14,
    marginVertical: 4,
  },
});

export default DiagnosticsCard;
