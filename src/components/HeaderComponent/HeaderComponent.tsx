import {useNavigate} from "react-router-dom";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import css from './HeaderComponent.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {moviesActions} from "../../store/slice/movieSlice";
import SearchComponent from "../SearchComponent/SearchComponent";
import DarkThemeComponent from "../DarkThemeComponent/DarkThemeComponent";
import Authorization from "../Authorization/Authorization";
import Sidebar from "../SidebarComponent/SidebarComponent";

const HeaderComponent = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const theme = localStorage.getItem('theme')
    const theme1 = useAppSelector(state => state.moviesResponse.darkTheme);

    const homePage = () => {

        dispatch(moviesActions.getByPage('1'))

        navigate('/main?page=1')
        window.scrollTo(0,0)

    }
    return (
        <div className={theme1||theme ? css.HeaderDark : css.Header}>
            <div className={css.genres}>
                <h2 onClick={()=>homePage()}>HOME PAGE</h2>
                <Sidebar/>
            </div>
            <div className={css.themes}>
                <WbSunnyIcon/>
                <DarkThemeComponent/>
                <DarkModeIcon/>
            </div>
            <div>
                <SearchComponent/>
            </div>
            <div>
                <Authorization/>
            </div>
        </div>
    );
};
export default HeaderComponent;