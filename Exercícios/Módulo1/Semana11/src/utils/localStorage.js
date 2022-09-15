const THEME = 'THEME';

export const getThemeLocalStorage = () =>{
    return localStorage.getItem(THEME)

}
export const setThemeLocalStorage = (value) =>{
    localStorage.setItem(THEME,value)
}

export const clearThemeLocalStorage = () =>{
    localStorage.clear(THEME)
}

// ------------------------

const PROFILES = 'PROFILES'

export const getProfilesLocalStorage = () =>{
    return localStorage.getItem(PROFILES)
}

export const setProfilesLocalStorage = (profiles) => {
    return localStorage.setItem(PROFILES,profiles)
}


