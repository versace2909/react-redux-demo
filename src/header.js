import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./store/index";
const Header = () => {
  let loginState = useSelector((state) => state.login);
  let dispatch = useDispatch();
  const loginHandler = () => {
    if (!loginState.isLogin) {
      dispatch(loginAction.login("HAHA"));
    } else {
      dispatch(loginAction.logout());
    }
  };

  return (
    <div>
      {loginState.isLogin && <p>{loginState.user}</p>}
      <button onClick={loginHandler}>
        {loginState.isLogin ? "Log out" : "Login"}
      </button>
    </div>
  );
};

export default Header;
