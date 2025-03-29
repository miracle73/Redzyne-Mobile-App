import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import PostListItem from "../../components/PostListItem";
import posts from "../../../assets/data/posts.json";

const index = () => {
  const post = posts[0];
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
      />
      {/* <PostListItem post={posts[0]} /> */}
    </View>
  );
};

const styles = StyleSheet.create({});
export default index;
