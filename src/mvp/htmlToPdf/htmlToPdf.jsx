import React, {useState} from "react";
import MarkdownEditor from "../../Library/Components/MarkdownEditor.jsx";
import MarkdownPreview from "../../Library/Components/MarkdownPreview.jsx";

function App() {
    const [htmlContent, setHtmlContent] = useState(``);
    console.log(htmlContent)
    return (
        <div className="relative overflow-hidden">
            <div className="px-4 pt-20 pb-16 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
                <h3 className="mb-6 text-5xl font-bold text-black md:text-5xl animate-fade-in">
                    toPdf<span className="text-primary-500">.io</span>
                </h3>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white rounded-xl shadow-lg p-6 md:order-1 order-2">
                    <MarkdownEditor htmlContent={htmlContent} setHtmlContent={setHtmlContent}/>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 md:order-2 order-1">
                    <MarkdownPreview htmlContent={htmlContent}/>
                </div>
            </div>
        </div>
    )
        ;
}

export default App;