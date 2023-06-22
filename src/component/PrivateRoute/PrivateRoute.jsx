import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Blocks } from 'react-loader-spinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading){
        return (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
              }}
            >
              <Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
              />
            </div>
          );
    }
    console.log ('user in private route', user);

    if(user){
        return children
    }
    return <Navigate state = {{from:location}} to="/login" replace></Navigate>
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;