import '../../assets/css/css-informacoes/ButtonAbout.css'
import about from '../../assets/img/sobre-nos 1.png'
import { useState ,useEffect} from 'react'
import { Boxproduto } from './Boxproduto'

export const ButtonAbout = () => {
    const { innerWidth: width, innerHeight: height } = window;
    const [visible, setVisible] = useState("ButtonAbout-box")
    const [pressed, setPressed] = useState(false)

    const setMenuVisible = () => {
        pressed ? setVisible("ButtonAbout-box-fechar") : setVisible("ButtonAbout-box")
        setPressed(!pressed)
    }

    useEffect(() => {
        if (innerHeight < 1000){
            setVisible('ButtonAbout-box-fechar')
        }
    },[])


    return (
        <div className="ButtonAbout-div" >
            <button className='ButtonAbout-button' onClick={() => setMenuVisible()}><img src={about} alt="" width={30} /></button>
            <span className={visible}>
                <Boxproduto/>
            </span>
        </div>
    )
}
