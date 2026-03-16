import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Navigates to the previous page
    };

    return (
        <div
            className="fixed top-0 left-0 p-5 pr-15 h-screen hover:cursor-pointer"
            onClick={goBack}
        >
            ←
        </div>
    );
}

export default BackButton;
