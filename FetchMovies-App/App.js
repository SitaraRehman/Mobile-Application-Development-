import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Button } from 'react-native';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); // new state for selected movie

  const getMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setMovies(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🎬 Movie List</Text>

      <Button title="Reload Movies 🔁" onPress={getMovies} color="#2c3e50" />

      {isLoading ? (
        <ActivityIndicator size="large" color="#2c3e50" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          style={{ marginTop: 20 }}
          data={movies}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <View style={styles.movieCard}>
              <Text style={styles.title}>{item.title}</Text>

              {/* Show release year only if selected */}
              {selectedMovie === item.id && (
                <Text style={styles.year}>Release Year: {item.releaseYear}</Text>
              )}

              <Button
                title={selectedMovie === item.id ? 'Hide Details' : 'Show Details'}
                onPress={() =>
                  setSelectedMovie(selectedMovie === item.id ? null : item.id)
                }
                color="#0096FF"
              />
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
    padding: 20,
    paddingTop: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
    textAlign: 'center',
  },
  movieCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495e',
  },
  year: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 5,
    marginBottom: 5,
  },
});


