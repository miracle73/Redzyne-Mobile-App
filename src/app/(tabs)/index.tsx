import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import posts from "../../../assets/data/posts.json";
import { formatDistanceToNowStrict } from "date-fns";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const index = () => {
  const post = posts[0];
  return (
    <View
      style={{
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "white",
      }}
    >
      {/* POST HEADER */}
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Image
          source={{ uri: post.group.image }}
          style={{ height: 20, width: 20, borderRadius: 10 }}
        />
        <Text style={{ fontWeight: "bold" }}>{post.group.name}</Text>
        <Text style={{ color: "grey" }}>
          {formatDistanceToNowStrict(new Date(post.created_at))}
        </Text>
        <View style={{ marginLeft: "auto" }}>
          <Text style={styles.joinButton}>Join</Text>
        </View>
      </View>
      {/* CONTENT */}
      <View>
        <Text style={styles.title}>{post.title}</Text>
        {post.image && (
          <Image source={{ uri: post.image }} style={styles.image} />
        )}
        {!post.image && post.description && (
          <Text numberOfLines={4}>{post.description}</Text>
        )}
      </View>
      {/* FOOTER */}
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={[{ flexDirection: "row" }, styles.iconBox]}>
            <MaterialCommunityIcons
              name="arrow-up-bold-outline"
              size={19}
              color="black"
            />
            <Text
              style={{
                fontWeight: "500",
                marginLeft: 5,
                alignSelf: "center",
              }}
            >
              {post.upvotes}
            </Text>
            <Text
              style={{
                width: 1,
                height: 14,
                backgroundColor: "#D4D4D4",
                alignSelf: "center",
                marginHorizontal: 7,
              }}
            >
              {post.upvotes}
            </Text>
            <MaterialCommunityIcons
              name="arrow-down-bold-outline"
              size={19}
              color="black"
            />
          </View>
          <View style={[{ flexDirection: "row" }, styles.iconBox]}>
            <MaterialCommunityIcons
              name="comment-outline"
              size={19}
              color="black"
            />
            <Text
              style={{
                fontWeight: "500",
                marginLeft: 5,
                alignSelf: "center",
              }}
            >
              {post.nr_of_comments}
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: "auto", gap: 10 }}>
            <MaterialCommunityIcons
              name="trophy-outline"
              size={19}
              color="black"
              style={styles.iconBox}
            />
            <MaterialCommunityIcons
              name="share-outline"
              size={19}
              color="black"
              style={styles.iconBox}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconBox: {
    borderWidth: 0.5,
    borderColor: "#D4D4D4",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  joinButton: {
    backgroundColor: "#0d469b",
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 10,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
    borderRadius: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
    letterSpacing: 0.2,
  },
});
export default index;
