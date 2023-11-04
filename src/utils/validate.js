export const checkValidData = (email, password) => {
    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    const isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
    if(!isEmailValid) return "Please enter a valid email address."
    if(!isPasswordValid) return "Your password must contain between 6 and 16 characters."

    return null
}
