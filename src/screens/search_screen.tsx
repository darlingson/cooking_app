import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { Text, Card } from "react-native-paper";
import { searchResults } from "../utils/search_logic"; // Import search logic
import { StatusBar } from "react-native";
const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);


  const handleSearch = () => {
    setResults(searchResults(query));
    console.log(`the handle results function ${results}`);
  };

  return (
    <SafeAreaView style={styles.container} >
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter search query"
          value={query}
          onChangeText={setQuery}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
      <View style={styles.resultsContainer}>
        {results.length > 0 ? (
          <FlatList
            data={results}
            renderItem={({ item, index }) => (
              <Card key={index} style={{ marginBottom: 10, padding: 10, borderRadius: 5, elevation: 5 }}>
                <Card.Content>
                  <Text style={{ fontWeight: "bold", color: "blue", marginBottom: 5 }}>{item.title}</Text>
                  <Text>{item.description}</Text>
                </Card.Content>
              </Card>
            )}
            keyExtractor={(item) => item.title}
          />
        ) : (
          <Text>No results found</Text>
        )}
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: StatusBar.currentHeight || 0,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  suggestionsContainer: {
    marginBottom: 10,
  },
  suggestion: {
    marginBottom: 5,
    textDecorationLine: "underline",
    color: "blue",
  },
  resultsContainer: {
    flex: 1,
  },
});

export default SearchScreen;
