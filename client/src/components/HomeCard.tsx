interface Props {
    children: React.ReactNode;
    maxWidth?: string;
}

function HomeCard({ children, maxWidth }: Props) {
    const cardStyle = {
        width: "100%",
        maxWidth: maxWidth,
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        padding: "20px",
        borderRadius: "15px"
    }
    return (
        <div style={cardStyle}>
            {children}
        </div>
    )
}

export default HomeCard;