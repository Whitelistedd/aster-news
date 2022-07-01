import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { callWeatherApi } from './requests';

interface FetchWeatherType {
    latitude: number,
    longitude: number,
    key?: string,
}

/* функция для получения погоды и температуры в зависимости от местоположения пользователя */
export const FetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    async (position: FetchWeatherType,thunkAPI) => {
        const latitude = position.latitude
        const longitude = position.longitude
        const key = position.key
        const response = await callWeatherApi({latitude,longitude,key});
        return response
    }
)

const WeatherSlice = createSlice({
    name: "weather",
    initialState: {
        weather: "",
        temp: 0,
        icon: "",
    },
    reducers: {
        setWeatherAndTemp: (state,actions) => {
            state.weather = actions.payload.weather;
            state.temp = actions.payload.tempature;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(FetchWeather.fulfilled, (state, action) => {
          state.temp = action.payload.tempature
          state.weather = action.payload.weather
          state.icon = action.payload.icon
        })
    }, 
})

export const { setWeatherAndTemp } = WeatherSlice.actions;
export default WeatherSlice.reducer;