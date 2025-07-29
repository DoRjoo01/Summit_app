import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useContext, useRef } from "react";
import { FONT_FAMILY_BOLD, FONT_FAMILY_LIGHT, MAIN_COLOR } from "../constant";
import RBSheet from "react-native-raw-bottom-sheet";
import GradientButton from "./GradientButton";
import UserContext from "../contexts/UserContext";
import { ScrollView } from "react-native";
import { Checkbox } from "react-native-paper";

export default function (props) {
  const UserContextState = useContext(UserContext);
  const refRBSheet = useRef();
  const screen = Dimensions.get("screen");
  return (
    <View style={styles.termSection}>
      <TouchableOpacity
        style={styles.termContainer}
        onPress={() => refRBSheet.current.open()}
      >
						<Checkbox.Android
							status={UserContextState.termCheck ? "checked" : "unchecked"}
							onPress={() => refRBSheet.current.open()}
							color={MAIN_COLOR}
						/>
        <Text
          style={{
            fontFamily: FONT_FAMILY_LIGHT,
            width: "90%",
            paddingTop: 10,
            marginLeft: 10,
          }}
        >
          Үйлчилгээний нөхцөлийг хүлээн зөвшөөрч байна
        </Text>
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        dragFromTopOnly={true}
        height={screen.height - 200}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(52, 52, 52, 0.8)",
          },
          container: {
            flexDirection: "column",
            borderTopStartRadius: 16,
            borderTopEndRadius: 16,
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <View style={styles.bottomSheetContainer}>
          <View style={styles.lookupcontainer}>
            <ScrollView
              contentContainerStyle={{
                paddingBottom: 40,
                marginHorizontal: 20,
              }}
            >
              <Text style={styles.cardTopText}>Ерөнхий заалт</Text>
              <View>
                <Text style={styles.generalText}>
                  AUTOHULEG.MN сайт нь “Дижитал кредит” ХХК-ийн веб сайт бөгөөд
                  энэхүү үйлчилгээний нөхцөл нь уг веб сайтаар үйлчлүүлэх,
                  худалдан авалт хийх, зээлийн хүсэлт илгээхтэй холбоотой үүсэх
                  харилцааг зохицуулахад оршино.
                </Text>
                <Text style={styles.generalText}>
                  1.1 Хэрэглэгч үйлчилгээний нөхцөлийг хүлээн зөвшөөрч
                  баталгаажуулсны үндсэн дээр зээлийн хүсэлт илгээх, худалдан
                  авалт хийх, үйлчилгээ авах эрхтэй болно.
                </Text>
                <Text style={styles.generalText}>
                  1.2 Хэрэглэгч нь 18 нас хүрсэн Монгол улсын иргэн, хуулийн
                  этгээд байна.
                </Text>
                <Text style={styles.generalText}>
                  1.3 Хэрэглэгч нь системд мэдээллээ оруулан ХУР, ДАН системээр
                  баталгаажуулах боломжтой.
                </Text>
              </View>
              <Text style={styles.cardTopText}>
                Хэрэглэгч нь дижитал кредит ххк-д дараах зөвшөөрөл, эрхийг
                олгоно
              </Text>
              <View>
                <Text style={styles.generalText}>
                  2.1 Хувийн мэдээллийг хүлээн авч мэдээллийн санд хадгалах
                </Text>
                <Text style={styles.generalText}>
                  2.2 Хэрэглэгчийн зөвшөөрлөөр ХУР, ДАН системээр дамжуулан
                  Төрийн цахим мэдээллийн санд хандаж хэрэглэгчийн Хувийн
                  мэдээлэл(овог, нэр, регистрийн дугаар, оршин суугаа хаяг,
                  орлогын мэдээлэл гэх мэт)-ийг баталгаажуулах
                </Text>
                <Text style={styles.generalText}>
                  2.3 Хэрэглэгчийн зөвшөөрлөөр хувийн мэдээллийг сонгосон зээл
                  олгогч байгууллага руу илгээх
                </Text>
                <Text style={styles.generalText}>
                  2.4 Хэрэглэгчийн хувийн мэдээлэл дээр үндэслэн хиймэл оюун
                  ухааны тусламжтайгаар дүн шинжилгээ хийж баталгаажуулах,
                  бүтээгдэхүүн үйлчилгээ санал болгох
                </Text>
                <Text style={styles.generalText}>
                  2.5 Хэрэглэгчийн зөвшөөрлөөр бүтээгдэхүүн үйлчилгээ үзүүлэгч
                  этгээдүүдэд дамжуулах
                </Text>
              </View>
              <Text style={styles.cardTopText}>
                Хэрэглэгчийн зөвшөөрлөөр мэдээллийг ашиглах
              </Text>
              <View>
                <Text style={styles.generalText}>
                  3.1 Зээлийн хүсэлтийг дамжуулах, системд бүртгүүлэх, ашиглах,
                  системээр дамжих бусад төрлийн бүтээгдэхүүн үйлчилгээг
                  үзүүлэх.
                </Text>
                <Text style={styles.generalText}>
                  3.2 "Дижитал кредит" ХХК-ны хамтран ажиллагч этгээдийн
                  мэдээлэл үйлчилгээ авахад боломжит байршлыг харуулах зорилгоор
                  байршлын мэдээллийг авах
                </Text>
                <Text style={styles.generalText}>
                  3.3 Зээлдүүлэгч байгууллагын зээлийн үйлчилгээний нөхцөл
                  хэмжээг тогтоох
                </Text>
                <Text style={styles.generalText}>
                  3.4 Төрийн цахим мэдээллийн сангаас хэрэглэгчийн лавлагаа,
                  мэдээллийг хүлээн авах, дамжуулах
                </Text>
                <Text style={styles.generalText}>
                  3.5 Хэрэгцээтэй зар, мэдээлэл хүргүүлэх, хамтран ажиллагч
                  гуравдагч этгээдийн зар мэдээллийг дамжуулах
                </Text>
                <Text style={styles.generalText}>
                  3.6 Хэрэгцээтэй зар, мэдээлэл хүргүүлэх, хамтран ажиллагч
                  гуравдагч этгээдийн зар мэдээллийг дамжуулах
                </Text>
                <Text style={styles.generalText}>
                  3.7 Бүтээгдэхүүн үйлчилгээний эрсдэлийг үнэлэх, санхүүгийн
                  болон мэдээллийн аюулгүй байдлыг хангах, хяналт тавих,
                  сайжруулах
                </Text>
                <Text style={styles.generalText}>
                  3.8 "Дижитал кредит" ХХК болон түүний хамтран ажиллагч
                  гуравдагч этгээдийн бүтээгдэхүүн үйлчилгээний сэтгэл ханамжийн
                  судалгаа, тандалт хийх
                </Text>
                <Text style={styles.generalText}>
                  3.9 Хуулиар тогтоосон аливаа шаардлагыг биелүүлэх, нийцлийг
                  хангах
                </Text>
                <Text style={styles.generalText}>
                  3.10 Хуулиар хориглоогүй бусад зорилгоор
                </Text>
              </View>
              <Text style={styles.cardTopText}>Хэрэглэгчийн эрх, үүрэг</Text>
              <View>
                <Text style={styles.generalText}>
                  4.1 Хэрэглэгч нь зөвхөн өөрийн нотлогдох, баталгаат мэдээллийг
                  оруулах
                </Text>
                <Text style={styles.generalText}>
                  4.2 Хэрэглэгч нь системд оруулсан мэдээллээ өөрчлөлт орох бүрд
                  шинэчлэх
                </Text>
                <Text style={styles.generalText}>
                  4.3 Нэвтрэх нэр, нууц үгийг бусдад задруулахгүй байх
                </Text>
                <Text style={styles.generalText}>
                  4.4 Үйлчилгээний эрхээ түр хаах, сэргээх, цуцлах
                </Text>
                <Text style={styles.generalText}>
                  4.5 Хэрэв хэрэглэгч нь хуулийн этгээдийг төлөөлөн системийг
                  ашиглаж байгаа бол танд тухайн хуулийн этгээдийг төлөөлөх эрх
                  олгогдсон бөгөөд тухайн хуулийн этгээд энэхүү нөхцөлийг мөн
                  хүлээн зөвшөөрсөнд тооцох тул хэрэглэгчийн хийсэн аливаа
                  үйлдлийн үр дагавар, үүрэг хариуцлагыг та болон тухайн хуулийн
                  этгээд хүлээхгүйгээр баталгаажуулж байгаа болно
                </Text>
              </View>
              <Text style={styles.cardTopText}>
                Дижитал кредит ххк-ний эрх , үүрэг
              </Text>
              <View>
                <Text style={styles.generalText}>
                  5.1 Хэрэглэгчийн мэдээллийг энэхүү үйлчилгээний нөхцөлд
                  зааснаас бусад тохиолдолд бусдад дамжуулах, бусад зорилгоор
                  ашиглахгүй байх үүрэгтэй
                </Text>
                <Text style={styles.generalText}>
                  5.2 Хэрэглэгчийн хувийн мэдээллийг хадгалах, хамгаалах
                  үүрэгтэй
                </Text>
                <Text style={styles.generalText}>
                  5.3 Хуульд заасан шаардлагын дагуу эрх бүхий этгээдийн
                  шаардсан хэмжээгээр хязгаарлан гаргаж өгнө.
                </Text>
                <Text style={styles.generalText}>
                  5.4 Хамтран ажиллагч байгууллагын зар сурталчилгааг
                  байршуулах, санал болгох эрхтэй
                </Text>
                <Text style={styles.generalText}>
                  5.5 Системд байрших хуулийн этгээдийн барааны тэмдэгт /хуульд
                  зааснаар бол/ нь гагцхүү тухайн хуулийн этгээдийн оюуны өмч
                  бөгөөд "Дижитал кредит" ХХК нь тэдгээр лого, холбогдох оюуны
                  өмчийн талаар аливаа хариуцлага хүлээхгүй
                </Text>
                <Text style={styles.generalText}>
                  5.6 Хэрэглэгчийн зөвшөөрлөөр хамтран ажиллагч хуулийн этгээдэд
                  хэрэглэгчийн хувийн мэдээллийг дамжуулах эрхтэй
                </Text>
              </View>
              <Text style={styles.cardTopText}>Бусад нөхцөл</Text>
              <View>
                <Text style={styles.generalText}>
                  6.1 Энэхүү үйлчилгээний нөхцөлийг Монгол улсын хууль
                  тогтоомжийн дагуу тайлбарлаж, зохицуулагдана.
                </Text>
                <Text style={styles.generalText}>
                  6.2 Системийг ашиглахтай холбоотойгоор үүссэн аливаа маргааныг
                  эвийн журмаар шийдвэрлэхийг эрмэлзэх бөгөөд тийнхүү шийдвэрлэх
                  боломжгүй тохиолдолд Монгол улсын шүүхээр шийдвэрлүүлнэ.
                </Text>
              </View>
              <View
                style={{
                  width: "90%",
                  alignSelf: "center",
                }}
              >
                <GradientButton
                  text="Зөвшөөрөх"
                  action={() => {
                    UserContextState.setTermCheck(true);
                    refRBSheet.current.close();
                  }}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomSheetContainer: {
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  lookupcontainer: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
  },
  termSection: {},
  termContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
    alignSelf: "center",
    alignItems: "center",
  },
  cardTopText: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 18,
    marginBottom: 10,
    color: MAIN_COLOR,
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
  },
  generalText: {
    fontFamily: FONT_FAMILY_BOLD,
    textAlign: "justify",
    marginBottom: 10,
  },
});
