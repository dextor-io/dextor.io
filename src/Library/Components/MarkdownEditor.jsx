import {toast, Toaster} from "sonner";

const MarkdownEditor = ({htmlContent, setHtmlContent}) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(htmlContent);
        toast.success("Copied code to clipboard 🎉");
    };

    return (
        <div className="w-full font-helvetica">
            <div className="mb-4 flex justify-between items-center">
                <label htmlFor="markdown-input" className="text-lg font-semibold">
                    HTML
                </label>
                <Toaster className="text-primary-500"/>
                <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    Copy Code
                </button>
            </div>
            <textarea
                id="markdown-input"
                className="w-full h-[calc(100vh-250px)] outline-primary-500 p-4 border-2 rounded-lg shadow-sm font-mono text-gray-800 bg-gray-50"
                value={htmlContent}
                onChange={(e) => setHtmlContent(e.target.value)}
                placeholder="Enter your HTML code here..."
            />
        </div>
    );
};

export default MarkdownEditor;