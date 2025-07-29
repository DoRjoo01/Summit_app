import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useContext, useRef, useState } from "react";
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_LIGHT,
  MAIN_COLOR_GRAY,
  PIC_URL,
  RED,
} from "../constant";
import LottieView from "lottie-react-native";
import UserContext from "../contexts/UserContext";
import CustomDialog from "./CustomDialog";

export default function (props) {
  const UserContextState = useContext(UserContext);
  const animation = useRef(null); //LottieView animation
  const [visibleDialog, setVisibleDialog] = useState(false); //Dialog харуулах
  const [dialogType, setDialogType] = useState("warning"); //Dialog харуулах төрөл
  const [dialogText, setDialogText] = useState(""); //Dialog -н текст

  return (
    <View style={styles.container}>
      {!UserContextState.bankLoading ? (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {UserContextState.agree == "" ? (
            <Text
              style={{
                fontFamily: FONT_FAMILY_BOLD,
                marginHorizontal: 30,
                color: "red",
              }}
            ></Text>
          ) : (
            <>
              <Text
                style={{
                  fontFamily: FONT_FAMILY_BOLD,
                  paddingLeft: 5,
                  paddingBottom: 5,
                  marginTop: 10,
                }}
              >
                Зээлийн шалгуурыг хангасан санхүүгийн байгууллагууд
              </Text>
              <View style={styles.gridBanksContainer}>
                {UserContextState.agree?.map((value, index) => {
                  return (
                    <TouchableOpacity
                      style={styles.gridBanks}
                      key={index}
                      onPress={() => {
                        setVisibleDialog(true);
                        setDialogText(
                          "Та 5 -р алхам буюу илгээх шатанд банкаа сонгох боломжтой."
                        );
                      }}
                    >
                      <Image
                        source={{ uri: `${PIC_URL}${value.bank_logo}` }}
                        style={styles.bankLogo}
                      />
                      <Text style={styles.bankText} numberOfLines={2}>
                        {value.department_name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </>
          )}
        </View>
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", backgroundColor: "#fff" }}
        >
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: 80,
              height: 80,
              backgroundColor: "transparent",
            }}
            source={require("../../assets/loader.json")}
          />
        </View>
      )}
      <CustomDialog
        visible={visibleDialog}
        confirmFunction={() => {
          setVisibleDialog(false);
        }}
        declineFunction={() => {}}
        text={dialogText}
        confirmBtnText="Окей"
        DeclineBtnText=""
        type={dialogType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  gridBanksContainer: {
    width: "100%",
    borderColor: MAIN_COLOR_GRAY,
    backgroundColor: "#EFEFEF",
    opacity: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    borderRadius: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  gridBanks: {
    flexDirection: "column",
    width: "30%",
    padding: 5,
    margin: 5,
    alignItems: "center",
  },

  bankLogo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  bankText: {
    fontFamily: FONT_FAMILY_LIGHT,
    fontSize: 12,
    textAlign: "center",
  },
});
