import { createContext } from "react";



const UserContaxt = createContext(null)


const UserProvider = (props) => {
    const {children} = props;

    const user = {
        name:'jay',
        email:"ramoliyajay9@gmial.com",
    };
  return (
    <>
        <UserContaxt.Provider value={user}>{children}</UserContaxt.Provider>
    </>
  )
}

const useUserContaxt = () =>{
    const user = useContext(UserContaxt)

    return user;
}
export {UserContaxt, UserProvider}