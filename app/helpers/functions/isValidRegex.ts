export const isValidEmail = (email: string) => {
    const emailRegex:RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailRegex.test(email)) {
        return true
    } else {
        return  false
    }
}