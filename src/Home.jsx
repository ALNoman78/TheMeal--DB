import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { Oval } from 'react-loader-spinner'

const Home = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex items-center justify-center'>
                {
                    navigation.state === 'loading' ? <Oval
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""></Oval> : <Outlet></Outlet>
                }
            </div>
            <footer>This is footer</footer>
        </div>
    )
}

Home.propTypes = {}

export default Home