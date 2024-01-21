import { Link } from "react-router-dom"
import './index.css'
import { useContext } from 'react';
import Input from '../../components/input'
import InputArea from '../../components/inputArea'
import languageContext,{CN,EN} from "../../constant/language";


const Index = () =>{
    const language = useContext(languageContext)

    return(
        <div className="contact-container">
            <div className="contact-title1">
                {language==EN?"Contact Us":"联系我们"}
            </div>
            <div className="contact-line" />
            <div className="contact-title2">
                {language==EN?"Office":"办公室"}
            </div>
            <div className="contact-detail">
                <div className="contact-decoration">{language==EN?"EMAIL":"电子邮件"}</div>
                <div>echoofjademusic@gmail.com</div>
            </div>
            <div className="contact-detail">
                <div className="contact-decoration">{language==EN?"NUMBER":"电话"}</div>
                <div>0420 378 345</div>
            </div>
            <div className="contact-detail">
                <div className="contact-decoration">{language==EN?"POSTAL ADDRESS":"邮寄地址"}</div>
                <div>Shop 3/223 Calam Road, Sunnybank Hills</div>
            </div>
        </div>
    )
}

export default Index;