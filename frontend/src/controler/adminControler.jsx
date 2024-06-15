import React from 'react'
import axios from "axios";
import { useDispatch , useSelector} from 'react-redux'
import { Link, Outlet } from "react-router-dom";


export default function adminControler() {
    const { user, isLoading,} = useSelector((state) => state.auth)

    const [ok, setOk] = useState(true);
    const [auth, setAuth] = useAuth();
  
    useEffect(() => {
      const authCheck = async () => {
        const res = await axios.get("/api/v1/auth/admin-auth");
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(true);
        }
      };
      if (user.token) authCheck();
    }, [user.token]);
  
    return ok ? <Outlet /> : <Link to="/" />;
  }

