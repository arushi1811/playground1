import "./Screengrab.css"
import ClearIcon from '@material-ui/icons/Clear';

const Screengrab = () => {
    return (
        <div className="screen-grab">
            <div className="cross-btn">
                <ClearIcon></ClearIcon>
            </div>
            <div className="content-screen">
            <h3>Wynisco Bootcamp</h3>
            <a href="https://www.wynisco.com/bootcamp.html">Check it Out</a>
            </div>
        </div>
    )
}

export default Screengrab