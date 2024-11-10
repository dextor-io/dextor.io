import {toast, Toaster} from "sonner";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import request from "superagent";

const MarkdownPreview = ({htmlContent}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error] = useState(null);

    const handleGeneratePdf = async () => {
        setIsLoading(true);

        const resumeId = uuidv4().replace(/-/g, ""); // Generate a random resumeId
        try {
            console.log(htmlContent)
            const response = await request
                .post(`http://64.227.179.39:2211/api/generatePdf?resumeId=${resumeId}`)
                .set('api-key', 'sPNHKp1qhR!322U6Byu3')
                .set('Content-Type', 'text/html')
                .send(htmlContent)
                .responseType('blob');

            // Create a URL for the PDF file and trigger the download
            const url = window.URL.createObjectURL(new Blob([response.body]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${resumeId}.pdf`);  // Set filename for the downloaded PDF
            document.body.appendChild(link);
            link.click();

            // Clean up by revoking the URL object and removing the link element
            link.parentNode.removeChild(link);
            window.URL.revokeObjectURL(url);

            toast.success("PDF downloaded successfully 🎉");
        } catch (err) {
            toast.error("Failed to generate PDF");
            console.error("Error downloading PDF:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full font-helvetica">
            <div className="mb-4 flex justify-between items-center">
                <label className="text-lg font-semibold">Preview</label>
                <Toaster/>
                <div className="flex gap-2">
                    <button
                        onClick={handleGeneratePdf}
                        className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-800 transition-colors duration-200"
                        disabled={isLoading}
                    >
                        {isLoading ? "Generating PDF..." : "Generate PDF"}
                    </button>
                    {error && <p className="text-red-600 mt-2">{error}</p>}
                </div>
            </div>
            <div
                className="w-full h-[calc(100vh-250px)] p-4 border-2 rounded-lg shadow-sm font-mono text-gray-800 bg-gray-50 overflow-y-auto"
                dangerouslySetInnerHTML={{__html: htmlContent}}
            />
        </div>
    );

};


export default MarkdownPreview;