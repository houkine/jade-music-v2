import { Link } from "react-router-dom"
import { useContext } from 'react';
import './index.css'
import languageContext,{CN,EN} from "../../constant/language";


const Index = () =>{
    const language = useContext(languageContext)
    return(
        <div className="lesson-container">
            <div className="lesson-detail">
                {language==EN?
                    "YES! we glad to provide the lesson. We are all experienced professional training for more tahn 20 years. "
                    :
                    "是的！ 我们很高兴提供课程。 我们都是经过超过20年的专业培训，经验丰富。"
                }
                <br/><br/>
                {language==EN?
                    "If you interested learning chinese traditinoal musical instrument "
                    :
                    "如果您有兴趣学习中国传统乐器 "
                }
                <br/>( 
                {language==EN?
                    "we aim to create the high-end lesson and good-quality Chinese music in Brisbane, we like be a bridge between you and the Aisian culture "
                    :
                    "我们致力于打造布里斯班高端课程和优质华乐，成为您与亚洲文化之间的桥梁"
                }
                {" :"} )<br/>
                <br/><br/><br/><br/>
                {language==EN?
                    "please send your enquiry to ... or text message to 0420378345 "
                    :
                    "请将您的询问发送至...或短信至0420378345"
                }
                <br/>
                </div>
        </div>
    )
}

export default Index;