import { StyleSheet, Text, View, Button } from "react-native";
export const home = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  top: {
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 0,
  },
  hello: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#9197B3",
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#050220",
    marginBottom: 0,
  },
  searchBar: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
    backgroundColor: "#fff",
    paddingTop: 12,
    paddingBottom: 12,
  },
  searchInput: {
    backgroundColor: "#f5f5f5",
    fontSize: 16,
    padding: 12,
    borderRadius: 5,
  },
  ordersButton: {
    flexDirection: "row",
    paddingLeft: 24,
    paddingRight: 24,
    justifyContent: "space-between",
    marginBottom: 24,
  },
  orderDoctor: {
    width: "48%",
    height: 100,
    padding: 12,
    backgroundColor: "#3989FA",
    borderRadius: 10,
  },
  orderConsult: {
    width: "48%",
    height: 100,
    padding: 12,
    backgroundColor: "#3989FA",
    borderRadius: 10,
  },
  orderText: {
    fontWeight: "bold",
    color: "#fff",
  },
  feed: {
    paddingHorizontal: 24,
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  feedTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    paddingTop: 8,
  },
  noteItem: {
    borderWidth: 1,
    borderColor: "#FFA800",
    padding: 12,
    borderRadius: 5,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderTitle: {
    fontSize: 16,
    color: "#050220",
    fontWeight: "bold",
    marginBottom: 4,
  },
  anotherTimeTitle: {
    fontSize: 16,
    color: "#050220",
    // fontWeight: "bold",
    // marginBottom: 4,
  },
  anotherTime: {
    borderWidth: 1,
    borderColor: "#3989FA",
    borderRadius: 5,
    padding: 8,
  },
  cancelButtonTitle: {
    fontSize: 16,
    color: "#ffffff",
    // fontWeight: "bold",
    // marginBottom: 4,
  },
  cancelButton: {
    borderWidth: 1,
    color: "#ffffff",
    borderColor: "#3989FA",
    backgroundColor: "#3989FA",
    borderRadius: 5,
    padding: 8,
  },
  addEditButton: {
    borderWidth: 1,
    color: "#ffffff",
    borderColor: "#3989FA",
    borderRadius: 5,
    padding: 8,
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    paddingTop: 10,
    // justifyContent: "space-between",
  },
  scrollStyle: {
    backgroundColor: "#fff",
  },
  noteInfo: {
    color: "black",
    fontSize: 12,
  },
  paddingText: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },

  buttonAddEditLocation: {
    flexDirection: "row-reverse",
    gap: 20,
  },
});
