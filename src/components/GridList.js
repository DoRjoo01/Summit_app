import React, { useContext, useState, useRef } from "react";
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView } from "react-native";
import {
	BLACK,
	FONT_FAMILY_BOLD,
	BUTTON_COLOR,
	WHITE,
	REQ_URL,
	TEXT_COLOR_GRAY,
	MAIN_COLOR,
	PIC_URL
} from "../constant";
import RBSheet from "react-native-raw-bottom-sheet";
import UserContext from "../contexts/UserContext";
import FavoriteBottom from "../components/FavoriteBottom";
import Snackbar from "../components/Snackbar";
import GradientButton from "../components/GradientButton";
import CameraIcon from "../../assets/Icons/camera.png";
import Empty from "../components/Empty";
import axios from "axios";
import LottieView from "lottie-react-native";
import CustomDialog from "./CustomDialog";
import IconRenderer from "./IconRenderer";

const height = Dimensions.get("window").height;
const GridList = ({ data, props }) => {
	const animation = useRef();
	const [snackBarMsg, setSnackBarMsg] = useState("");
	const [visibleSnack, setVisibleSnack] = useState(false);
	const [itemCode, setItemCode] = useState("");
	const [itemPrice, setItemPrice] = useState("");
	const [categoryOfBanks, setCategoryOfBanks] = useState([]); //Зээлийн бүтээгдэхүүн тус бүрийн зээл олгох банкны жагсаалт
	const [loadingBanks, setLoadingBanks] = useState(false);
	const [visibleDialog, setVisibleDialog] = useState(false); //Dialog харуулах
	const state = useContext(UserContext);
	const refRBSheet = useRef();

	const onToggleSnackBar = (msg) => {
		setVisibleSnack(!visibleSnack);
		setSnackBarMsg(msg);
	};
	const onDismissSnackBar = () => setVisibleSnack(false);

	const goCarDataDtl = (supplier_item_code, item) => {
		state.setSelectedItemCode(supplier_item_code);
		state.setSelectedCarData(item);
		state.setFavoriteCarID(item.id);
		state.setFavCarName(item.list_title);
		state.setCarFavorite(item.favorite);
		props.navigation.navigate("CarDetialRoute");
	};

	const loginCheck = () => {
		getCategoryOfBanks(), refRBSheet.current.open();
	};

	const loanTypeRequirements = [
		{
			id: "1",
			text: "Муу зээлйин түүхгүй байх"
		},
		{
			id: "2",
			text: "Сүүлийн 6 сар НДШ тасралтгүй төлсөн байх"
		},
		{
			id: "3",
			text: "Бизнесийн орлоготой бол баталгааждаг байх"
		},
		{
			id: "4",
			text: "Хамтран зээлдэгчтэй байх"
		}
	];

	const Loader = () => {
		return (
			<View
				style={{
					flex: 1,
					alignItems: "center",
					backgroundColor: "#fff",
					justifyContent: "center"
				}}
			>
				<LottieView
					autoPlay
					ref={animation}
					style={{
						width: 100,
						height: 100,
						backgroundColor: "transparent"
					}}
					source={require("../../assets/loader.json")}
				/>
			</View>
		);
	};

	const getCategoryOfBanks = () => {
		setLoadingBanks(true);
		setCategoryOfBanks([]);
		axios({
			method: "post",
			url: `${REQ_URL}api/mobile/v1/categoryOfBanks`,
			data: {
				category_id: 16082024283142
			}
		})
			.then((response) => {
				setCategoryOfBanks(response.data.data.banks);
				setLoadingBanks(false);
			})
			.catch(function (error) {
				setLoadingBanks(false);
				if (error.response) {
					// console.log("error getCategories status", error.response.status);
					// console.log("error getCategories data", error.response.data);
				}
			});
	};

	const renderCarList = ({ item, index }) => {
		return (
			<TouchableOpacity
				activeOpacity={0.9}
				onPress={() => goCarDataDtl(item.item_code, item)}
				key={index}
				// id={index}
				style={[styles.carContainer, { height: state.checkScreen ? 195 : 350 }]}
			>
				<View
					style={{
						width: "47%",
						justifyContent: "flex-end",
						alignItems: "flex-start"
					}}
				>
					<Image source={{ uri: item.item_pic1_thumb_mid }} style={styles.carFaceImg} />
					<View style={{ position: "absolute", bottom: 10, right: 10 }}>
						<FavoriteBottom
							carId={item.id}
							carName={item.list_title}
							isFavorite={item.favorite}
							favIconCondition={"1"}
							snackFunction={(e) => onToggleSnackBar(e)}
						/>
					</View>
					<View style={styles.imageCountContainer}>
						<Image source={CameraIcon} style={{ height: 15, width: 15, marginRight: 4 }} />
						<Text style={{ color: WHITE }}>{item.image_count}</Text>
					</View>
				</View>

				<View style={styles.carDetail}>
					<View>
						<View style={styles.carDetailHeader}>
							<Text style={styles.carPriceCss}>{item.buy_price} ₮</Text>
						</View>
						<View
							style={{
								flexDirection: "row",
								flexWrap: "wrap",
								marginBottom: 10
							}}
						>
							<Text style={styles.carTitleCss}>
								{item.list_title}, {item.list_year}
							</Text>
						</View>

						<View style={{ flexDirection: "row", marginLeft: -3, marginBottom: 5 }}>
							<Text style={styles.carDiscLigCss}>{item.ads_updated_date}</Text>
						</View>

						<View style={{ flexDirection: "row", marginLeft: -3 }}>
							<Text style={styles.carDiscLigCss}>Суудлын</Text>
							<Text style={styles.carDiscLigCss}>{item.engine?.name}</Text>
						</View>
					</View>

					<View style={styles.carDetailFooder}>
						<TouchableOpacity
							activeOpacity={0.8}
							style={styles.reqBottom}
							onPress={() => {
								!state.isLoggedIn ? setVisibleDialog(true) : loginCheck(),
									setItemCode(item.item_code),
									setItemPrice(item.item_m2_price);
							}}
						>
							<Text style={styles.repBottomText}>Хүсэлт илгээх</Text>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<View style={{ backgroundColor: "#fff", paddingHorizontal: 5 }}>
			<Snackbar visible={visibleSnack} dismiss={onDismissSnackBar} msg={snackBarMsg} topPosition={"-17%"} />

			<FlatList data={data} renderItem={renderCarList} keyExtractor={(item, index) => index.toString()} />
			<RBSheet
				ref={refRBSheet}
				closeOnPressMask
				closeOnDragDown
				dragFromTopOnly
				height={height - 100}
				customStyles={{
					container: {
						backgroundColor: "#fff",
						flexDirection: "column",
						borderTopEndRadius: 16,
						borderTopStartRadius: 16,
						paddingBottom: 60
					},
					draggableIcon: {
						backgroundColor: "#000"
					}
				}}
			>
				<ScrollView
					showsVerticalScrollIndicator={false}
					nestedScrollEnabled
					contentContainerStyle={{ flexGrow: 1, marginHorizontal: 12 }}
					bounces={false}
				>
					<Image
						source={require("../../assets/Stores/autolising.jpg")}
						style={{
							height: height * 0.25,
							width: "100%",
							borderRadius: 8
						}}
						resizeMode="cover"
					/>
					<Text style={styles.loanMarketHeaderText}>Автолизинг</Text>
					<Text style={styles.bottomSheetBodyText}>
						AUTOHULEG нь банк, ББСБ-уудь дэлгүүрүүд нэг дор төвлөрсөн зээлийн супермаркет бөгөөд зээлдэгч онлайнаар
						зээлийн хүсэлтээ илгээн зээл олгогч банк, ББСБ-уудаас ирүүлсэн зээлийн саналаас өөрт хамгийн тааламжтай
						нөхцөлтэйг сонгон авах үйлчилгээ юм.
					</Text>
					<Text style={styles.loanMarketHeaderText}>Тавигдах шаардлага</Text>
					{loanTypeRequirements.map((el, index) => {
						return (
							<View key={index} style={styles.conditionContainer}>
								<IconRenderer iconType="entypo" iconName="dot-single" color={MAIN_COLOR} size={20} />
								<Text
									style={{
										fontFamily: FONT_FAMILY_BOLD,
										marginLeft: 10,
										flex: 1
									}}
								>
									{el.text}
								</Text>
							</View>
						);
					})}
					<Text style={styles.loanMarketHeaderText}>Та дараах санхүүгийн байгууллагуудаас зээл авах боломжтой</Text>

					<View style={{}}>
						{loadingBanks ? (
							<Loader />
						) : !loadingBanks && categoryOfBanks == "" ? (
							<Empty text="Зээл олгох БАНК, ББСБ байхгүй байна." mainStyle="1" />
						) : (
							categoryOfBanks?.map((el, index) => {
								return (
									<View key={index} style={[styles.conditionContainer, { marginVertical: 5 }]}>
										<IconRenderer iconType="entypo" iconName="dot-single" color={MAIN_COLOR} size={30} />
										<Image
											source={{ uri: `${PIC_URL}${el.bank_logo}` }}
											style={{ width: 25, height: 25 }}
											resizeMode="contain"
										/>
										<Text
											style={{
												fontFamily: FONT_FAMILY_BOLD,
												marginLeft: 10,
												flex: 1
											}}
										>
											{el.department_name}
										</Text>
									</View>
								);
							})
						)}
					</View>
				</ScrollView>
				<View
					style={{
						marginBottom: 20,
						position: "absolute",
						bottom: 0,
						width: "90%",
						alignSelf: "center"
					}}
				>
					<GradientButton
						text="Хүсэлт илгээх"
						action={() => {
							refRBSheet.current.close();
							state.setIsDanCalled(false); //E-Mongolia дуудсан
							state.initialData(); //OBJECT -уудыг анхны утгатай болгох
							state.setSelectedBanks([]); //Сонгосон банк хоослох
							state.setRequestSent(false); //Зээлийн хүсэлт амжилттай илгээсэн
							state.setRequestLoading(false); //Зээлийн хүсэлт илгээж байна
							state.setMaxLoanAmount(0); //Зээлийн дээд хэмжээг 0 болгох
							state.setAutoLeasingData((prevState) => ({
								...prevState,
								itemCode: itemCode
							}));
							state.setAutoLeasingData((prevState) => ({
								...prevState,
								carPrice: state.addCommas(state.removeNonNumeric(itemPrice))
							}));
							props.navigation.navigate("AutoLeasing");
						}}
					/>
				</View>
			</RBSheet>
			<CustomDialog
				visible={visibleDialog}
				confirmFunction={() => {
					setVisibleDialog(false);
					props.navigation.navigate("LoginDrawer");
				}}
				declineFunction={() => {}}
				text={"Та нэвтэрсэн тохиолдолд хүсэлт илгээх боломжтой🙂"}
				confirmBtnText="Окей"
				DeclineBtnText=""
				type={"success"}
			/>
		</View>
	);
};

export default GridList;

const styles = StyleSheet.create({
	bottomSheetBodyText: {
		fontFamily: FONT_FAMILY_BOLD,
		paddingHorizontal: 5,
		marginBottom: 10,
		paddingTop: 0,
		color: TEXT_COLOR_GRAY
	},
	loanMarketHeaderText: {
		fontFamily: FONT_FAMILY_BOLD,
		paddingHorizontal: 5,
		paddingVertical: 12,
		color: MAIN_COLOR
	},
	conditionContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start"
	},
	reqBottom: {
		flexDirection: "row",
		alignItems: "flex-end",
		justifyContent: "flex-end",
		paddingVertical: 8,
		paddingHorizontal: 8,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: BUTTON_COLOR
	},
	repBottomText: {
		fontSize: 12,
		lineHeight: 18,
		fontFamily: FONT_FAMILY_BOLD,
		letterSpacing: 0.25,
		color: WHITE
	},
	carDetailFooder: {
		flexDirection: "row",
		width: "100%",
		paddingRight: 6,
		justifyContent: "flex-end",
		paddingBottom: 15
	},
	carDiscLigCss: {
		fontSize: 13,
		marginLeft: 3,
		color: TEXT_COLOR_GRAY,
		fontFamily: FONT_FAMILY_BOLD
	},
	carTitleCss: {
		fontFamily: FONT_FAMILY_BOLD,
		fontSize: 16,
		color: BLACK,
		marginBottom: -3
	},
	carPriceCss: {
		fontFamily: FONT_FAMILY_BOLD,
		fontSize: 15,
		marginBottom: 3
	},
	carDetailHeader: {
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "flex-start"
	},
	carDetail: {
		flexDirection: "column",
		width: "50%",
		paddingLeft: 13,
		paddingTop: "3%",
		height: "100%",
		justifyContent: "space-between"
	},
	imageCountContainer: {
		position: "absolute",
		top: 8,
		right: 18,
		flexDirection: "row",
		width: 40,
		backgroundColor: BLACK,
		backgroundColor: "rgba(52, 52, 52, 0.6)",
		justifyContent: "center",
		borderRadius: 5,
		alignItems: "center"
	},
	carFaceImg: {
		width: "100%",
		height: "100%",
		borderRadius: 5
	},
	carContainer: {
		marginTop: 5,
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: WHITE,
		shadowColor: MAIN_COLOR,
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 0.18,
		shadowRadius: 1.0,
		elevation: 1,
		backgroundColor: WHITE
	}
});
