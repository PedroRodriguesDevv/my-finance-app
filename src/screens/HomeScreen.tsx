import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  // Dados de exemplo para a barrinha de progresso
  const dailySpending = {
    current: 85,
    limit: 100,
    goal: 70
  };

  // Dados de metas
  const goals = [
    { id: 1, name: "Economizar para viagem", progress: 65, target: 5000, saved: 3250 },
    { id: 2, name: "Comprar novo celular", progress: 30, target: 3000, saved: 900 }
  ];

  // Benefícios disponíveis
  const benefits = [
    { id: 1, name: "Cashback 5% em farmácias", validUntil: "30/06" },
    { id: 2, name: "Desconto 10% em combustível", validUntil: "15/05" },
    { id: 3, name: "2x pontos em supermercados", validUntil: "31/05" }
  ];

  // Calcula a porcentagem de gastos
  const spendingPercentage = (dailySpending.current / dailySpending.limit) * 100;
  const goalPercentage = (dailySpending.current / dailySpending.goal) * 100;

  return (
    <LinearGradient
      colors={['#FFFFFF', '#FFE5CC']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Seu Resumo Financeiro</Text>
        
        {/* Card de Saldo */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Saldo Disponível</Text>
          <Text style={styles.balance}>R$ 5.432,10</Text>
        </View>

        {/* Barrinha de Gastos Diários */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Gastos Diários</Text>
          
          <View style={styles.progressContainer}>
            <View style={styles.progressLabels}>
              <Text style={styles.progressLabel}>R$ {dailySpending.current}</Text>
              <Text style={styles.progressLabel}>Meta: R$ {dailySpending.goal}</Text>
              <Text style={styles.progressLabel}>Limite: R$ {dailySpending.limit}</Text>
            </View>
            
            {/* Barra de progresso principal */}
            <View style={styles.progressBarBackground}>
              <View 
                style={[
                  styles.progressBar, 
                  { 
                    width: `${spendingPercentage}%`,
                    backgroundColor: spendingPercentage > 100 ? '#e74c3c' : 
                                    spendingPercentage > 80 ? '#f39c12' : '#2ecc71'
                  }
                ]}
              />
            </View>
            
            {/* Marcador da meta */}
            {dailySpending.goal < dailySpending.limit && (
              <View style={[styles.goalMarker, { left: `${goalPercentage}%` }]}>
                <View style={styles.goalMarkerLine} />
                <Text style={styles.goalMarkerText}>Meta</Text>
              </View>
            )}
          </View>
          
          <Text style={styles.spendingMessage}>
            {spendingPercentage > 100 ? 'Você excedeu seu limite diário!' : 
             spendingPercentage > 80 ? 'Você está perto do limite!' : 
             'Seus gastos estão dentro do planejado.'}
          </Text>
        </View>

        {/* Metas Financeiras */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Suas Metas</Text>
          {goals.map(goal => (
            <View key={goal.id} style={styles.goalItem}>
              <Text style={styles.goalName}>{goal.name}</Text>
              <Text style={styles.goalProgressText}>
                R$ {goal.saved} de R$ {goal.target} ({goal.progress}%)
              </Text>
              <View style={styles.goalProgressBarBackground}>
                <View 
                  style={[
                    styles.goalProgressBar, 
                    { width: `${goal.progress}%` }
                  ]}
                />
              </View>
            </View>
          ))}
        </View>

        {/* Benefícios */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Seus Benefícios</Text>
          {benefits.map(benefit => (
            <View key={benefit.id} style={styles.benefitItem}>
              <Text style={styles.benefitName}>{benefit.name}</Text>
              <Text style={styles.benefitDate}>Válido até: {benefit.validUntil}</Text>
            </View>
          ))}
        </View>

        {/* Últimas Transações */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Últimas Transações</Text>
          {[
            { id: 1, name: "Mercado", value: "R$ 256,90", date: "10/05" },
            { id: 2, name: "Combustível", value: "R$ 180,00", date: "09/05" },
            { id: 3, name: "Aluguel", value: "R$ 1.500,00", date: "05/05" },
          ].map(item => (
            <View key={item.id} style={styles.transactionItem}>
              <View>
                <Text style={styles.transactionName}>{item.name}</Text>
                <Text style={styles.transactionDate}>{item.date}</Text>
              </View>
              <Text style={styles.transactionValue}>{item.value}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF8C00',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginBottom: 15,
  },
  balance: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2ecc71',
    textAlign: 'center',
  },
  progressContainer: {
    marginBottom: 15,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  progressLabel: {
    fontSize: 12,
    color: '#777',
  },
  progressBarBackground: {
    height: 20,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  progressBar: {
    height: '100%',
    borderRadius: 10,
  },
  goalMarker: {
    position: 'absolute',
    top: -15,
    alignItems: 'center',
    width: 40,
  },
  goalMarkerLine: {
    width: 2,
    height: 15,
    backgroundColor: '#3498db',
  },
  goalMarkerText: {
    fontSize: 10,
    color: '#3498db',
    fontWeight: 'bold',
  },
  spendingMessage: {
    marginTop: 10,
    textAlign: 'center',
    color: '#555',
    fontStyle: 'italic',
  },
  goalItem: {
    marginBottom: 15,
  },
  goalName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  goalProgressText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  goalProgressBarBackground: {
    height: 10,
    backgroundColor: '#ecf0f1',
    borderRadius: 5,
    overflow: 'hidden',
  },
  goalProgressBar: {
    height: '100%',
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  benefitItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  benefitName: {
    fontSize: 16,
    color: '#333',
  },
  benefitDate: {
    fontSize: 12,
    color: '#999',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  transactionName: {
    fontSize: 16,
    color: '#333',
  },
  transactionDate: {
    fontSize: 12,
    color: '#999',
  },
  transactionValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
});

export default HomeScreen;