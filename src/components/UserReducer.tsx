import User from "../models/User";
// const initialState: User = { password: 1, firstName: "malka", LastName: "bruk", adress: "@", phone: 1, email: "v" };
const initialState:User = { id:-1,password: "", firstName: "", lastName: "", address: "", phone: "", email: "" };

const userReducer = (state: any, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case 'CREATE_USER':
            return { ...state, ...action.payload };
        case 'UPDATE_USER':
            return { ...state, ...action.payload };
        case 'FETCH_USER':
             return state; // מחזיר את המצב הנוכחי (שליפה)
        case 'DELET-USER'://לא ממומש כרגע
            return state
        default:
            return state;
    }
};

export { initialState, userReducer };