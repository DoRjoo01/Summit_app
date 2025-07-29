import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import starIcon from "../../assets/profileIcons/starColor.png";
import starIconColor from "../../assets/Icons/starIcon.png";
import star from "../../assets/Icons/star.png";
import UserContext from "../contexts/UserContext";
import { DEV_URL } from "../../src/constant";

const FavoriteBottom = (props) => {
	const state = useContext(UserContext);
	const [isFav, setIsFav] = useState(null);
	useEffect(() => {
		setIsFav(props.isFavorite);
	}, []);

	let size = 28;
	if (props.iconSize !== undefined) {
		size = props.iconSize;
	}
	const getFavoriteCarAdd = () => {
		axios({
			method: "post",
			url: `${DEV_URL}api/mobile/v1/profile/favorite`,
			headers: {
				Authorization: `Bearer ${state.token}`
			},
			data: {
				car_id: props.carId
			}
		})
			.then((response) => {
				setIsFav(!isFav);
				props.snackFunction(response.data.data);
			})
			.catch(function (error) {
				console.log("error", error);
				if (error.response) {
					console.log("error ", error.response.status);
				}
			});
	};

	return (
		<TouchableOpacity
			onPress={() => (state.isLoggedIn ? getFavoriteCarAdd() : props.snackFunction("Та нэвтэрнэ үү."))}
			style={{
				overflow: "hidden",
				borderRadius: 10
			}}
		>
			<View style={{ padding: 2 }}>
				<Image
					source={isFav == null || !isFav ? (props.favIconCondition != null ? starIcon : star) : starIconColor}
					style={{ width: size, height: size }}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default FavoriteBottom;

const styles = StyleSheet.create({});
