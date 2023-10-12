const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			urlBase: "https://www.swapi.tech/api/",
			favorites: [],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacters: () => {
				fetch(`${getStore().urlBase}/people`)
					.then((response) => response.json())
					.then((data) => {
						for (let item of data.results) {
							fetch(item.url)
								.then((response) => response.json())
								.then((data) => {
									setStore({
										characters: [...getStore().characters, data.result]
									})
								}
								).catch((err) => {
									console.log(err)
								})

						}

					}
					).catch((err) => {
						console.log(err)
					})


			},
			getPlanets: () => {
				fetch(`${getStore().urlBase}/planets`)
					.then((response) => response.json())
					.then((data) => {
						for (let item of data.results) {
							fetch(item.url)
								.then((response) => response.json())
								.then((data) => {
									setStore({
										planets: [...getStore().planets, data.result]
									})
								}
								).catch((err) => {
									console.log(err)
								})

						}

					}
					).catch((err) => {
						console.log(err)
					})


			},
			addFavorite: (fav) => {
				let store = getStore()
				let favExist = store.favorites.some((item) => fav._id == item._id)
				if (favExist) {
					let newFavorite = store.favorites.filter((item) => fav._id != item._id)
					setStore({
						favorites: newFavorite
					})
				} else {
					setStore({
						favorites: [...store.favorites, fav]
					})
				}
			},
			deleteFavorite: (fav) => {
				let store = getStore ()
				let newFavorite = store.favorites.filter((item) => fav._id != item._id)
					setStore({
						favorites: newFavorite
					})
			}
		}
	};
};

export default getState;
