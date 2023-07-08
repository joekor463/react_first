import preloader from "../../../assets/images/Loading_icon.gif";
import React from 'react';
type PreloaderProps = {

}

let Preloader: React.FC = (props) => {
    return <div style={{backgroundColor : 'lightblue'}}>
        <img src={preloader} />
    </div>
}

export default Preloader;