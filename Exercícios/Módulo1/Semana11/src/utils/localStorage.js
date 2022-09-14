const THEME = 'THEME';

export const getTheme = () =>{
    const theme = localStorage.getItem(THEME)
    return theme ?? true;
}
export const setTheme = (value) =>{
    localStorage.setItem(THEME,value)
}
export const clearTheme = () =>{
    localStorage.clear(THEME)
}

