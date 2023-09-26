import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import style from '@/styles/Preview.module.css'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Preview() {

    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedTemplate, setSelectedTemplate] = useState(null)
    const [iframeClass, setIframeClass] = useState(style.preview_iframe)
    const [iframeButtonClass, setIframeButtonClass] = useState(style.preview_iframe_button)
    const [iframeX, setIframeX] = useState(false)

    useEffect(() => {
        // Fetch the list of directories from the API
        fetch('/api/listTemplates')
            .then(response => response.json())
            .then(data => {
                // console.log(data.data)
                setTemplates(data.data);
                setLoading(false);
            })
            .catch(error => {
                // console.error("Error fetching directories:", error);
                setLoading(false);
            });
    }, []); // The empty dependency array ensures this useEffect runs once when the component mounts

    const getTemplates = () => {
        const templateButtons = Object.keys(templates).map(templateKey => {
            const template = templates[templateKey];
            return (
                <button
                    key={templateKey}
                    style={{
                        backgroundColor: template.primaryColor,
                        color: template.fontColor,
                        marginRight: '10px',
                        padding: '10px',
                        borderRadius: '10px',
                        cursor: 'pointer'
                    }}
                    title={template.templateDescription}
                    onClick={() => setSelectedTemplate({ [templateKey]: template })}

                >
                    {template.templateName}
                </button>
            );
        })
        return templateButtons
    }

    const toggleIframe = () => {
        if(iframeClass == style.preview_iframe){
            setIframeClass(style.preview_iframe_expanded)
            setIframeButtonClass(style.preview_iframe_button_expanded)
        }
        else{
            setIframeClass(style.preview_iframe)
            setIframeButtonClass(style.preview_iframe_button)
        }
    }

    return (
        <main className={style.preview_container}>
            <div className={style.preview}>

                <div className={style.preview_header}>

                    <h1 className={style.preview_header_heading}>Our Templates</h1>
                    <h2 className={style.preview_header_subheading}>We have various website templates for your various needs</h2>
                </div>
                <div className={style.preview_templates}>
                    {getTemplates()}
                </div>
                {
                    selectedTemplate != null ?
                        <>{
                            Object.keys(selectedTemplate).map(templateKey => {
                                return (
                                    <>
                                        <div className={style.preview_details}>
                                            <p className={style.preview_details_heading}>{selectedTemplate[templateKey].templateName}</p>
                                            <p className={style.preview_details_subheading}>{selectedTemplate[templateKey].templateDescription}</p>
                                            <div className={style.preview_details_colors}>
                                                Colors
                                                <div
                                                    style={{
                                                        backgroundColor: selectedTemplate[templateKey].primaryColor,
                                                        width: '50px',
                                                        height: '25px'
                                                    }}
                                                ></div><div
                                                    style={{
                                                        backgroundColor: selectedTemplate[templateKey].secondaryColor,
                                                        width: '50px',
                                                        height: '25px'
                                                    }}
                                                ></div>
                                            </div>
                                            {/* <Link href={"/" + templateKey}>View Template</Link> */}
                                        </div>
                                        <div className={iframeClass}>
                                            <button
                                                className={iframeButtonClass}
                                                onClick={() => toggleIframe()}
                                            >
                                                {iframeClass == style.preview_iframe ? "Expand" : "Minimize"}
                                            </button>
                                            <iframe
                                                src={"/" + templateKey}
                                                title="Template Preview"
                                                className={style.preview_iframe_component}
                                            ></iframe>

                                        </div>
                                    </>)
                            })
                        }

                        </>
                        :
                        <></>
                }


            </div>
        </main>
    )
}
