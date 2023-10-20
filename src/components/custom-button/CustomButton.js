import "./CustomButton.css";

function CustomButton({ children, onClick, ...props }) {
    return (
        <button
            onClick={() => (onClick ? onClick() : () => {})}
            className="custom-button"
            style={props}
        >
            {children}
        </button>
    );
}

export default CustomButton;
