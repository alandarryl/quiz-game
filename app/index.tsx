import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    /* Pas de guillemets autour de {styles.container} */
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Master 🏆</Text>
      
      {/* Correction de la double accolade pour le href */}
      <Link href={ "/quiz" as any} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>COMMENCER LE QUIZ</Text>
        </TouchableOpacity>
      </Link>

      <Link href={ "/leaderboard" as any} asChild>
        <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
          <Text style={styles.buttonText}>VOIR LE CLASSEMENT</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f5f5f5' 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 40, 
    color: '#333' 
  },
  button: { 
    backgroundColor: '#6200ee', 
    paddingVertical: 15, 
    paddingHorizontal: 40, 
    borderRadius: 30, 
    marginBottom: 20 
  },
  secondaryButton: { 
    backgroundColor: '#03dac6' 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});