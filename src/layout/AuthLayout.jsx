import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <main className="flex justify-center">
            <div className='md:w-1/2 lg:w-1/4'>
                <Outlet/>
            </div>
            
        </main>
            
    )
}

export default AuthLayout