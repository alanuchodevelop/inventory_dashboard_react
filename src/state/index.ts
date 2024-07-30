import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definición de la interfaz que describe la estructura del estado inicial
export interface InitialStateTypes {
    isSidebarCollapsed: boolean;
    isDarkMode: boolean;
}

// Estado inicial de la aplicación
const initialState: InitialStateTypes = {
    isSidebarCollapsed: false,
    isDarkMode: false
}

// Creación de un slice de Redux llamado 'global'
export const globalSlice = createSlice({
    name: 'global', // Nombre del slice
    initialState,   // Estado inicial del slice
    reducers: {     // Reducers que definen cómo cambia el estado
        // Reducer para cambiar el estado de la colapsabilidad de la barra lateral
        setIsSidebarCollapse: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload;
        },
        // Reducer para cambiar el estado del modo oscuro
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        }
    }
});

// Exportación de las acciones generadas por el slice
export const { setIsSidebarCollapse, setIsDarkMode } = globalSlice.actions;

export default globalSlice.reducer;