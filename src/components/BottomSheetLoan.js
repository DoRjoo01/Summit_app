import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import React, { useContext, useEffect, useState, useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  FONT_FAMILY_BOLD,
  WHITE,
  BUTTON_COLOR,
  MAIN_COLOR,
  RED,
} from "../constant";
import UserContext from "../contexts/UserContext";

const BottomSheet = ({
  bodyText, //sheet -н text
  dragDown, //sheet -г доош чирж хаах
  backClick, //sheet -н гадна дарж хаах
  fieldName, //update хийх талбар
  displayName,
  lookUpType,
  handle,
}) => {
  const state = useContext(UserContext);
  const sheetRef = useRef(); //Bottomsheet
  const [heightBottomSheet, setHeightBottomSheet] = useState(0);
  useEffect(() => {
    if (bodyText && bodyText.length == 1) {
      setHeightBottomSheet(Platform.OS == "ios" ? 90 : 80);
    } else if (bodyText && bodyText.length == 2) {
      setHeightBottomSheet(130);
    } else if (bodyText && bodyText.length == 3) {
      setHeightBottomSheet(180);
    } else if (bodyText && bodyText.length == 4) {
      setHeightBottomSheet(210);
    } else if (bodyText && bodyText.length > 3) {
      setHeightBottomSheet(250);
    } else {
      setHeightBottomSheet(0);
    }
  }, [handle]);

  useEffect(() => {
    bodyText && heightBottomSheet > 0 ? sheetRef.current.open() : null;
  }, [heightBottomSheet]);

  const functionCombined = (e) => {
    sheetRef.current.close();
    if (lookUpType == "AutoLeasing") {
      state.setCarRegistry((prevState) => ({
        ...prevState,
        [fieldName]: e,
      }));
    } else if (lookUpType == "Complaints") {
      state.setGetComplaintsOb((prevState) => ({
        ...prevState,
        [fieldName]: e,
      }));
    } else if (lookUpType == "userData") {
      state.setUserData((prevState) => ({
        ...prevState,
        [fieldName]: e,
      }));
    } else if (lookUpType == "ReqAutoLeasing") {
      state.setAutoLeasingData((prevState) => ({
        ...prevState,
        [fieldName]: e,
      }));
    } else if (lookUpType == "general") {
      state.setGeneralData((prevState) => ({
        ...prevState,
        [fieldName]: e,
      }));
    } else if (lookUpType == "profile") {
      state.setCustomerData((prevState) => ({
        ...prevState,
        [fieldName]: e,
      }));
    } else if (lookUpType == "income") {
      state.setIncomeData((prevState) => ({
        ...prevState,
        [fieldName]: e,
      }));
    }
  };

  return (
    <View>
      <RBSheet
        ref={sheetRef}
        height={heightBottomSheet}
        closeOnDragDown={dragDown} //sheet -г доош чирж хаах
        closeOnPressMask={backClick} //sheet -н гадна дарж хаах
        customStyles={{
          container: {
            backgroundColor: "#fff",
            flexDirection: "column",
            borderTopEndRadius: 16,
            borderTopStartRadius: 16,
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
        onClose={() => {
          setHeightBottomSheet(0);
        }}
      >
        <View style={styles.bottomSheetContainer}>
          <View style={styles.lookupcontainer}>
            <ScrollView
              contentContainerStyle={{
                backgroundColor: "#fff",
              }}
            >
              {bodyText != "" && fieldName == "loanMonth" ? (
                //Зөвхөн эээлийн хугацаа object гүй дан Array орж ирэх үед
                <>
                  {bodyText.length > 1 ? (
                    bodyText?.map((el, index) => {
                      return (
                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={{ backgroundColor: WHITE }}
                          key={index}
                          onPress={() => functionCombined(el)}
                        >
                          <Text style={styles.bottomSheetBodyLookup}>{el}</Text>
                        </TouchableOpacity>
                      );
                    })
                  ) : (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={{ backgroundColor: WHITE }}
                      onPress={() => functionCombined(bodyText)}
                    >
                      <Text style={styles.bottomSheetBodyLookup}>
                        {bodyText}
                      </Text>
                    </TouchableOpacity>
                  )}
                </>
              ) : (
                <>
                  {bodyText.length > 1 ? (
                    bodyText?.map((el, index) => {
                      return (
                        <TouchableOpacity
                          activeOpacity={0.8}
                          key={index}
                          onPress={() => functionCombined(el)}
                        >
                          <Text style={styles.bottomSheetBodyLookup}>
                            {el[displayName]}
                          </Text>
                        </TouchableOpacity>
                      );
                    })
                  ) : (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => functionCombined(bodyText[0])}
                    >
                      <Text style={styles.bottomSheetBodyLookup}>
                        {bodyText[0]?.[displayName]}
                      </Text>
                    </TouchableOpacity>
                  )}
                </>
              )}
            </ScrollView>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  lookupcontainer: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    paddingBottom: Platform.OS == "ios" ? 30 : 25,
  },
  bottomSheetBodyLookup: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 18,
    padding: 10,
    color: MAIN_COLOR,
  },
  renderContainerStyle: {
    position: "absolute",
    bottom: -2000,
  },
  FlatCss: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    width: "98%",
    height: 50,
    backgroundColor: WHITE,
    marginHorizontal: 2,
    borderRadius: 8,
    borderColor: BUTTON_COLOR,
    shadowColor: "#5577ff",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 5,
  },
});
